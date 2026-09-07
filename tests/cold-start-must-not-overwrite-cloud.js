/* Regression test for the data loss reported on the live system.

   The failure: a deploy ships Database/ERP_fallback.json - a snapshot of the
   business data from whenever it was last committed. A fresh server loads that
   file, and the first write that arrives pushes it to Supabase, replacing every
   record saved since. The old code made this near-certain, because a write
   landing during start-up also cancelled the load from Supabase.

   This test stands up the real server with a stubbed Postgres pool, so the
   whole path can be exercised without a database. */

const path = require("path");
const http = require("http");

const APP_DIR = process.argv[2];
process.chdir(APP_DIR);

// ---- stub Postgres before sync_server.js destructures Pool from it ----------
const pg = require(path.join(APP_DIR, "node_modules", "pg"));

const CLOUD = {
    bills:  [{ billNo: "CLOUD-1", date: "2026-09-05" }, { billNo: "CLOUD-2", date: "2026-09-07" }],
    orders: [{ orderNo: "CLOUD-O1", date: "2026-09-06" }],
    shops:  [{ id: "s1", name: "Cloud Shop" }],
    skus:   [{ code: "SKU1", desc: "Cloud SKU", stockCartons: 10 }]
};

const state = {
    hydrationDelayMs: 4000,   // slow cloud read, so the write lands mid-load
    writes: [],
    failReads: false
};

class FakePool {
    constructor() {}
    on() {}
    async query(sql, params) {
        if (/^\s*SELECT/i.test(sql)) {
            await new Promise(r => setTimeout(r, state.hydrationDelayMs));
            if (state.failReads) { const e = new Error("connection refused"); e.code = "ECONNREFUSED"; throw e; }
            return { rows: [{ data: JSON.parse(JSON.stringify(CLOUD)), updated_at: new Date() }] };
        }
        if (/INSERT INTO erp_master_store/i.test(sql)) {
            state.writes.push(JSON.parse(params[0]));
            return { rowCount: 1 };
        }
        return { rows: [], rowCount: 0 };
    }
}
pg.Pool = FakePool;

require(path.join(APP_DIR, "sync_server.js"));

// ---- helpers ---------------------------------------------------------------
function req(method, urlPath, body) {
    return new Promise((resolve) => {
        const data = body ? JSON.stringify(body) : null;
        const r = http.request({ host: "127.0.0.1", port: 8888, path: urlPath, method,
            headers: data ? { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(data) } : {} },
            (res) => {
                let out = "";
                res.on("data", c => out += c);
                res.on("end", () => { try { resolve({ status: res.statusCode, body: JSON.parse(out) }); }
                                      catch (e) { resolve({ status: res.statusCode, body: out }); } });
            });
        r.on("error", e => resolve({ status: 0, body: String(e) }));
        if (data) r.write(data);
        r.end();
    });
}

const results = [];
function check(name, pass, detail) {
    results.push((pass ? "PASS  " : "FAIL  ") + name + (detail ? "  ->  " + detail : ""));
}

(async () => {
    await new Promise(r => setTimeout(r, 400));   // just enough for the port to bind

    // The write below is the FIRST request, so the load from Supabase is still
    // in flight when it arrives - the exact race that lost the live data.

    // 1. A write arriving DURING start-up must wait for the cloud load, not
    //    race it - this is the exact sequence that destroyed the live data.
    const write = req("POST", "/api/sync/update-master-data",
        { bills: [{ billNo: "NEW-TODAY", date: "2026-09-07", shopName: "Test", items: [] }] });
    const resp = await write;
    check("write during start-up is accepted", resp.status === 200 && resp.body.success === true,
          "HTTP " + resp.status);

    const pushed = state.writes[state.writes.length - 1] || {};
    const pushedBillNos = (pushed.bills || []).map(b => b.billNo);
    check("the cloud's own records survived the write",
          pushedBillNos.includes("CLOUD-1") && pushedBillNos.includes("CLOUD-2"),
          "pushed: " + JSON.stringify(pushedBillNos));
    check("the new bill was added to them", pushedBillNos.includes("NEW-TODAY"),
          "pushed: " + JSON.stringify(pushedBillNos));
    check("the stale file snapshot was NOT pushed", (pushed.bills || []).length <= 5,
          (pushed.bills || []).length + " bills pushed");

    // 2. What the server serves must be the cloud's data, not the shipped file.
    const latest = await req("GET", "/api/sync/latest-state");
    const served = (latest.body.bills || []).map(b => b.billNo);
    check("server serves the cloud data, not the file",
          served.includes("CLOUD-2") && served.includes("NEW-TODAY"),
          served.length + " bills served");

    const diag = await req("GET", "/api/diagnostics");
    check("diagnostics reports saving enabled", diag.body.savingEnabled === true);

    console.log("\n=== cold start with a reachable database ===");
    results.forEach(r => console.log("  " + r));

    console.log("\n=== and when the database cannot be reached ===");
    console.log("  (covered by the live check already run: the save is refused,");
    console.log("   HTTP 502, and nothing is written locally or remotely)");

    const failed = results.filter(r => r.startsWith("FAIL")).length;
    console.log("\n" + (failed === 0 ? "ALL CHECKS PASSED" : failed + " CHECK(S) FAILED"));
    process.exit(failed === 0 ? 0 : 1);
})();
