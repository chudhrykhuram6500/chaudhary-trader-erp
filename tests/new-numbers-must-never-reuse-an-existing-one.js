/* Invoice, order and pick list numbers used to be "how many there are + 1".
   On the live book there were 1,685 bills but the highest number was
   CHT001715, so every new invoice was given CHT001686 - a number that
   already belonged to a confirmed bill. The new bill then picked up the old
   one's fields on the next sync: it looked confirmed, vanished from the
   open-invoice list, and its order was left "Processed" with no bill. */
const fs = require("fs");
const path = require("path");
const src = fs.readFileSync(path.resolve(__dirname, "..", "app.js"), "utf8");

// lift the real helpers out of app.js
const grab = name => {
    const start = src.indexOf("function " + name + "(");
    let i = src.indexOf("{", start), depth = 0;
    for (; i < src.length; i++) { if (src[i] === "{") depth++; else if (src[i] === "}" && --depth === 0) break; }
    return src.slice(start, i + 1);
};
const AppState = {};
eval(grab("nextSequenceNumber") + grab("getNextInvoiceId") + grab("getNextOrderNo") + grab("getNextPickListNo") +
     "; global.T = { getNextInvoiceId, getNextOrderNo, getNextPickListNo };");

const year = new Date().getFullYear();
AppState.bills = [];
for (let n = 1; n <= 1715; n++) if (n < 1656 || n > 1685) AppState.bills.push({ billNo: "CHT" + String(n).padStart(6, "0") });
AppState.bills.push({ billNo: "CHT000020-LAYS" });
AppState.orders = [{ orderNo: "ORD000005" }, { orderNo: "MOB-1794398830109" }, { orderNo: "ORD000002" }];
AppState.pickLists = [{ pickListNo: `PL-${year}-007` }, { pickListNo: `PL-${year}-003` }];

const checks = [
    ["invoice is highest + 1, not count + 1", T.getNextInvoiceId(), "CHT001716"],
    ["order ignores MOB- numbers and the count", T.getNextOrderNo(), "ORD000006"],
    ["pick list is highest + 1", T.getNextPickListNo(), `PL-${year}-008`]
];
let failed = 0;
checks.forEach(([name, got, want]) => {
    const pass = got === want;
    if (!pass) failed++;
    console.log(`${pass ? "PASS" : "FAIL"}  ${name}: ${got}${pass ? "" : " (expected " + want + ")"}`);
});
const used = new Set(AppState.bills.map(b => b.billNo));
if (used.has(T.getNextInvoiceId())) { failed++; console.log("FAIL  next invoice number already exists"); }
process.exit(failed ? 1 : 0);
