/* Reproduces the over-billing reported twice: when several orders are
   processed together and stock for an SKU is short, the quantity typed into
   the shortage dialog is written into EVERY order containing that SKU instead
   of being shared between them.

   Real example from the user: 7 cartons of Lays Y&H in stock, several shops
   had ordered it, and every one of those bills came out at 7 cartons. */

function currentBehaviour(orders, code, availCtns, availPkts) {
    // app.js applyInModalShortageAdjustmentAndProcess()
    orders.forEach(o => {
        o.items.forEach(i => {
            if (i.code === code) {
                i.cartons = availCtns;
                i.units = availPkts;
            }
        });
    });
    return orders;
}

function fixedBehaviour(orders, code, availCtns, availPkts, pack) {
    // Share the available stock out, oldest order first, each taking up to
    // what it asked for until the pool runs dry.
    let pool = (availCtns * pack) + availPkts;
    orders.forEach(o => {
        o.items.forEach(i => {
            if (i.code !== code) return;
            const want = (i.cartons * pack) + i.units;
            const give = Math.min(want, pool);
            pool -= give;
            i.cartons = Math.floor(give / pack);
            i.units = give % pack;
        });
        o.items = o.items.filter(i => i.cartons > 0 || i.units > 0);
    });
    return orders;
}

const mk = () => ([
    { orderNo: "ORD-1", items: [{ code: "YH50", cartons: 5, units: 0 }] },
    { orderNo: "ORD-2", items: [{ code: "YH50", cartons: 4, units: 0 }] },
    { orderNo: "ORD-3", items: [{ code: "YH50", cartons: 3, units: 0 }] },
    { orderNo: "ORD-4", items: [{ code: "YH50", cartons: 2, units: 0 }] }
]);

const PACK = 24, STOCK_CTNS = 7, STOCK_PKTS = 0;
const asked = 5 + 4 + 3 + 2;

const show = (label, orders) => {
    const lines = orders.map(o => {
        const it = o.items.find(i => i.code === "YH50");
        return `    ${o.orderNo}: ${it ? it.cartons + " ctn" : "line removed"}`;
    });
    const billed = orders.reduce((s, o) => {
        const it = o.items.find(i => i.code === "YH50");
        return s + (it ? it.cartons : 0);
    }, 0);
    console.log(label);
    lines.forEach(l => console.log(l));
    console.log(`    TOTAL BILLED: ${billed} cartons   (stock was ${STOCK_CTNS})`);
    console.log("");
    return billed;
};

console.log(`4 shops asked for ${asked} cartons in total. Only ${STOCK_CTNS} are in stock.\n`);
const before = show("BEFORE (what the system does today):", currentBehaviour(mk(), "YH50", STOCK_CTNS, STOCK_PKTS));
const after = show("AFTER (the fix):", fixedBehaviour(mk(), "YH50", STOCK_CTNS, STOCK_PKTS, PACK));

console.log(before > STOCK_CTNS
    ? `BUG CONFIRMED: ${before} cartons billed from ${STOCK_CTNS} in stock - ${before - STOCK_CTNS} cartons over-billed.`
    : "no over-billing detected");
console.log(after === STOCK_CTNS
    ? `FIX CONFIRMED: exactly ${after} cartons billed, matching the stock.`
    : `FIX WRONG: billed ${after}, expected ${STOCK_CTNS}`);
process.exit(before > STOCK_CTNS && after === STOCK_CTNS ? 0 : 1);
