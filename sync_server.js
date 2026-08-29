/* ==========================================================================
   CHAUDHARY TRADER ERP - WINDOWS LOCAL WI-FI SYNC SERVER SERVICE
   Pure Offline Local Network HTTP API Server & Mobile App Server
   Ports: 8888, 8080, 5000 (Multi-Port Firewall Resilience)
   ========================================================================== */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const url = require('url');

const SyncEngine = require('./sync_engine.js');
const DatabaseManager = require('./database.js');

const PORTS = [8888, 8080, 5000];
const BASE_DIR = __dirname;
const dbManager = new DatabaseManager(BASE_DIR);

function getLocalIpAddresses() {
    const interfaces = os.networkInterfaces();
    const addresses = [];
    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                addresses.push({ interface: name, address: net.address });
            }
        }
    }
    if (addresses.length === 0) {
        addresses.push({ interface: 'Localhost', address: '127.0.0.1' });
    }
    return addresses;
}

const DEFAULT_SKUS = [
    {
        "code": "320035996",
        "desc": "Lays Salt 11G 11X80",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320035993",
        "desc": "Lays F Cheese 11G 11X80",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 12,
        "stockUnits": 78
    },
    {
        "code": "320035995",
        "desc": "Lays Masala 11G 11X80",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 22,
        "stockUnits": 0
    },
    {
        "code": "320035994",
        "desc": "Lays Y&H 11G 11X80",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 109,
        "stockUnits": 0
    },
    {
        "code": "320035997",
        "desc": "Lays Paprika 11G 11X80",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 80,
        "grams": 11,
        "tpRate": 1494,
        "stockCartons": 10,
        "stockUnits": 0
    },
    {
        "code": "320036291",
        "desc": "Lays Salt 18G 18X48",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 18,
        "tpRate": 1322,
        "stockCartons": 10,
        "stockUnits": 0
    },
    {
        "code": "320035998",
        "desc": "Lays F Cheese 18G 18X48",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 18,
        "tpRate": 1322,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320036290",
        "desc": "Lays Masala 18G 18X48",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 18,
        "tpRate": 1322,
        "stockCartons": 48,
        "stockUnits": 0
    },
    {
        "code": "320040020",
        "desc": "Lays Y&H 17G 17X48",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 17,
        "tpRate": 1322,
        "stockCartons": 21,
        "stockUnits": 0
    },
    {
        "code": "320036292",
        "desc": "Lays Paprika 18G 18X48",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 18,
        "tpRate": 1322,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320038293",
        "desc": "Lays Wavy Masala Twist 17G 17X48",
        "brand": "Wavy MT",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 17,
        "tpRate": 1335,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036308",
        "desc": "Lays Wavy Bbq 16G 16X48",
        "brand": "Wavy BBQ",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 16,
        "tpRate": 1335,
        "stockCartons": 10,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320038846",
        "desc": "Lays Wavy Y&H 16G 16X48",
        "brand": "Wavy Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 48,
        "grams": 16,
        "tpRate": 1335,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036703",
        "desc": "Lays Salt 30G 30X24",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1105,
        "stockCartons": 47,
        "stockUnits": 0
    },
    {
        "code": "320036700",
        "desc": "Lays F Cheese 30G 30X24",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1105,
        "stockCartons": 96,
        "stockUnits": 0
    },
    {
        "code": "320036702",
        "desc": "Lays Masala 30G 30X24",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1105,
        "stockCartons": 1,
        "stockUnits": 0
    },
    {
        "code": "320040021",
        "desc": "Lays Y&H 29G 29X24",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 29,
        "tpRate": 1105,
        "stockCartons": 156,
        "stockUnits": 0
    },
    {
        "code": "320036704",
        "desc": "Lays Paprika 30G 30X24",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1105,
        "stockCartons": 4,
        "stockUnits": 0
    },
    {
        "code": "320038294",
        "desc": "Lays Wavy Masala Twist 31G 31X24",
        "brand": "Wavy MT",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 31,
        "tpRate": 1108,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036710",
        "desc": "Lays Wavy Bbq 30G 30X24",
        "brand": "Wavy BBQ",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1108,
        "stockCartons": 40,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320038847",
        "desc": "Lays Wavy Y&H 30G 30X24",
        "brand": "Wavy Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 30,
        "tpRate": 1108,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036708",
        "desc": "Lays Salt 45G 45X16",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1031,
        "stockCartons": 18,
        "stockUnits": 0
    },
    {
        "code": "320036705",
        "desc": "Lays F Cheese 45G 45X16",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1031,
        "stockCartons": 28,
        "stockUnits": 0
    },
    {
        "code": "320036707",
        "desc": "Lays Masala 45G 45X16",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1031,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320040022",
        "desc": "Lays Y&H 43G 43X16",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 43,
        "tpRate": 1031,
        "stockCartons": 83,
        "stockUnits": 0
    },
    {
        "code": "320036709",
        "desc": "Lays Paprika 45G 45X16",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1031,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320038295",
        "desc": "Lays Wavy Masala Twist 45G 45X16",
        "brand": "Wavy MT",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1028,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320036713",
        "desc": "Lays Wavy Bbq 45G 45X16",
        "brand": "Wavy BBQ",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1028,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320038848",
        "desc": "Lays Wavy Y&H 45G 45X16",
        "brand": "Wavy Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 45,
        "tpRate": 1028,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320039863",
        "desc": "Lays Maxx Signature Cheese 36G 36X16",
        "brand": "Max Cheese",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 36,
        "tpRate": 1031,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320039861",
        "desc": "Lays Maxx Spicy Kimchi 36G 36X16",
        "brand": "Max Kimchi",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 36,
        "tpRate": 1031,
        "stockCartons": 16,
        "stockUnits": 0
    },
    {
        "code": "320035559",
        "desc": "Lays Salt 72G 72X12",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 72,
        "tpRate": 1103,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "3200355656",
        "desc": "Lays F Cheese 72X12",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 72,
        "tpRate": 1103,
        "stockCartons": 18,
        "stockUnits": 0,
        "pricePoint": 100
    },
    {
        "code": "320035658",
        "desc": "Lays Masala 72G 72X12",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 72,
        "tpRate": 1103,
        "stockCartons": 17,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320040023",
        "desc": "Lays Y&H 70G 70X12",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 70,
        "tpRate": 1103,
        "stockCartons": 70,
        "stockUnits": 0
    },
    {
        "code": "320035850",
        "desc": "Lays Paprika 72G 72X12",
        "brand": "Paprica",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 72,
        "tpRate": 1103,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320036716",
        "desc": "Lays Wavy Bbq 70G 70X12",
        "brand": "Wavy BBQ",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 70,
        "tpRate": 1113,
        "stockCartons": 11,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320039864",
        "desc": "Lays Maxx Signature Cheese 56G 56X12",
        "brand": "Max Cheese",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 56,
        "tpRate": 1113,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320039862",
        "desc": "Lays Maxx Spicy Kimchi 56G 56X12",
        "brand": "Max Kimchi",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 56,
        "tpRate": 1113,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320040027",
        "desc": "Lays Salt 116G 116X12",
        "brand": "Salt",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 116,
        "tpRate": 1651,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320040024",
        "desc": "Lays F Cheese 116G 116X12",
        "brand": "F.C",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 116,
        "tpRate": 1651,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320040026",
        "desc": "Lays Masala 116G 116X12",
        "brand": "Masala",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 116,
        "tpRate": 1651,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320040025",
        "desc": "Lays Y&H 116G 116X12",
        "brand": "Y&H",
        "categoryType": "PC",
        "categoryName": "Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 116,
        "tpRate": 1651,
        "stockCartons": 5,
        "stockUnits": 0
    },
    {
        "code": "320040050",
        "desc": "Kurkure Chutney Chaska 14G 14X60",
        "brand": "kk-C.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 60,
        "grams": 14,
        "tpRate": 1124,
        "stockCartons": 10,
        "stockUnits": 0,
        "pricePoint": 20
    },
    {
        "code": "320040049",
        "desc": "Kurkure Red Chili 14G 14X60",
        "brand": "KK-R.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 60,
        "grams": 14,
        "tpRate": 1124,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037335",
        "desc": "Cheetos Bites Chkn Veg 11G 11X64",
        "brand": "Cheetos Bites",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 64,
        "grams": 11,
        "tpRate": 1200,
        "stockCartons": 19,
        "stockUnits": 0,
        "pricePoint": 20
    },
    {
        "code": "320037338",
        "desc": "Cheetos Ketchup 11G 11X64",
        "brand": "Cheetos Ketchup",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 64,
        "grams": 11,
        "tpRate": 1200,
        "stockCartons": 10,
        "stockUnits": 0,
        "pricePoint": 20
    },
    {
        "code": "320037529",
        "desc": "Kurkure Masti Shots Masala 11G 11X64",
        "brand": "Masti Shots",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 64,
        "grams": 11,
        "tpRate": 1124,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320037340",
        "desc": "Cheetos Ocean Safari 11G 11X64",
        "brand": "Cheetos OS",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 64,
        "grams": 11,
        "tpRate": 1197,
        "stockCartons": 9,
        "stockUnits": 0,
        "pricePoint": 20
    },
    {
        "code": "320037416",
        "desc": "Kurkure Chutney Chaska 34G 34X32",
        "brand": "kk-C.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 32,
        "grams": 34,
        "tpRate": 1193,
        "stockCartons": 61,
        "stockUnits": 0,
        "pricePoint": 40
    },
    {
        "code": "320037415",
        "desc": "Kurkure Red Chili 34G 34X32",
        "brand": "KK-R.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 32,
        "grams": 34,
        "tpRate": 1193,
        "stockCartons": 10,
        "stockUnits": 0,
        "pricePoint": 40
    },
    {
        "code": "320037347",
        "desc": "Kurkure Toofaani Mirch 34G 34X32",
        "brand": "KK-T.M",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 32,
        "grams": 34,
        "tpRate": 1193,
        "stockCartons": 5,
        "stockUnits": 0,
        "pricePoint": 40
    },
    {
        "code": "320037349",
        "desc": "Kurkure Chutney Chaska 56G 56X20",
        "brand": "kk-C.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 20,
        "grams": 56,
        "tpRate": 1118,
        "stockCartons": 83,
        "stockUnits": 0,
        "pricePoint": 60
    },
    {
        "code": "320037348",
        "desc": "Kurkure Red Chili 56G 56X20",
        "brand": "KK-R.C",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 20,
        "grams": 56,
        "tpRate": 1118,
        "stockCartons": 4,
        "stockUnits": 0,
        "pricePoint": 60
    },
    {
        "code": "320037350",
        "desc": "Kurkure Toofaani Mirch 56G 56X20",
        "brand": "KK-T.M",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 20,
        "grams": 56,
        "tpRate": 1118,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037336",
        "desc": "Cheetos Bites Chkn Veg 18G 18X36",
        "brand": "Cheetos Bites",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1006,
        "stockCartons": 0,
        "stockUnits": 0,
        "pricePoint": 30
    },
    {
        "code": "320037339",
        "desc": "Cheetos Ketchup 18G 18X36",
        "brand": "Cheetos Ketchup",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1006,
        "stockCartons": 1,
        "stockUnits": 0
    },
    {
        "code": "320037611",
        "desc": "Kurkure Masti Shots Masala 18G 18X36",
        "brand": "Masti Shots",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1006,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037341",
        "desc": "Cheetos Ocean Safari 18G 18X36",
        "brand": "Cheetos OS",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1006,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037411",
        "desc": "Cheetos Crun Rfh 18G 18X36",
        "brand": "Cheetos RFH",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 36,
        "grams": 18,
        "tpRate": 1000,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037414",
        "desc": "Cheetos Bites Chkn Veg 31G 31X16",
        "brand": "Cheetos Bites",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 16,
        "grams": 31,
        "tpRate": 744,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037412",
        "desc": "Cheetos Crun Rfh 36G 36X24",
        "brand": "Cheetos RFH",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 24,
        "grams": 36,
        "tpRate": 1105,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320037413",
        "desc": "Cheetos Crun Rfh 82G 82X12",
        "brand": "Cheetos RFH",
        "categoryType": "NPC",
        "categoryName": "Non-Potato Chips",
        "companyId": "lays",
        "pack": 12,
        "grams": 82,
        "tpRate": 1117,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "fast001",
        "desc": "Laziza Mix RS 10",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 10,
        "tpRate": 200,
        "stockCartons": 61,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast002",
        "desc": "Laziza Moth RS 10",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 20,
        "tpRate": 200,
        "stockCartons": 56,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast003",
        "desc": "Lazeez Mix RS 20",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 12,
        "grams": 30,
        "tpRate": 200,
        "stockCartons": 19,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast004",
        "desc": "Laziza Moth RS 20",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 12,
        "grams": 30,
        "tpRate": 200,
        "stockCartons": 23,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast005",
        "desc": "Daal Mong Rs 20",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 12,
        "grams": 30,
        "tpRate": 200,
        "stockCartons": 73,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast006",
        "desc": "Daal Chana RS 20",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 12,
        "grams": 30,
        "tpRate": 200,
        "stockCartons": 75,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast007",
        "desc": "Lazeez Mix RS 50",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 45,
        "tpRate": 1050,
        "stockCartons": 76,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast008",
        "desc": "Lazeez Mot RS 50",
        "brand": "Nimko",
        "categoryType": "Nimko",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 45,
        "tpRate": 1050,
        "stockCartons": 76,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast009",
        "desc": "Peanut RS 50",
        "brand": "peanut",
        "categoryType": "Peanut",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 36,
        "tpRate": 1050,
        "stockCartons": 72,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast010",
        "desc": "Hash Masala Rs 20",
        "brand": "Hash",
        "categoryType": "Hash",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 22,
        "tpRate": 430,
        "stockCartons": 19,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast011",
        "desc": "Hash Salty Rs 20",
        "brand": "Hash",
        "categoryType": "Hash",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 22,
        "tpRate": 430,
        "stockCartons": 15,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast012",
        "desc": "Popsi Achari Rs 20",
        "brand": "Hash",
        "categoryType": "Hash",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 22,
        "tpRate": 430,
        "stockCartons": 72,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "fast013",
        "desc": "Popsi CheeseRs 20",
        "brand": "Hash",
        "categoryType": "Hash",
        "categoryName": "Potato Chips",
        "companyId": "hash",
        "pack": 24,
        "grams": 22,
        "tpRate": 430,
        "stockCartons": 34,
        "stockUnits": 0,
        "pricePoint": 0
    },
    {
        "code": "320035555",
        "companyId": "lays",
        "categoryType": "PC",
        "brand": "Masala",
        "desc": "LAYS MASALA 40 GM 40X24",
        "pricePoint": 70,
        "grams": 40,
        "pack": 24,
        "tpRate": 1547,
        "stockCartons": 10,
        "stockUnits": 0
    },
    {
        "code": "320035556",
        "companyId": "lays",
        "categoryType": "PC",
        "brand": "F.C",
        "desc": "LAYS FRENCHES 40 GM 40X24",
        "pricePoint": 70,
        "grams": 40,
        "pack": 24,
        "tpRate": 1547,
        "stockCartons": 0,
        "stockUnits": 0
    },
    {
        "code": "320035557",
        "companyId": "lays",
        "categoryType": "NPC",
        "brand": "Kurkure",
        "desc": "KURKURE CHUTNEY CHASKA 55GM 55X24",
        "pricePoint": 60,
        "grams": 55,
        "pack": 24,
        "tpRate": 1341,
        "stockCartons": 1,
        "stockUnits": 0
    },
    {
        "code": "320035558",
        "companyId": "lays",
        "categoryType": "NPC",
        "brand": "Kurkure",
        "desc": "KURKURE TOFANI MIRCH 55GM 55X24",
        "pricePoint": 60,
        "grams": 55,
        "pack": 24,
        "tpRate": 1341,
        "stockCartons": 7,
        "stockUnits": 0
    }
];

const DEFAULT_SHOPS = [
    {
        "id": "shop_real_1",
        "name": "Jholoelaal Drink Corner",
        "address": "Waghra Chak",
        "customerName": "Tassawar Abbas",
        "phone": "0348-1177005",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_2",
        "name": "Malik Tea Stall",
        "address": "Awan Chak",
        "customerName": "Awais",
        "phone": "0349-4935187",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_3",
        "name": "Muhammad Nawaz Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Muhammad Nawaz",
        "phone": "0346-7267298",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_4",
        "name": "Haider Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Haider",
        "phone": "0346-7263913",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_5",
        "name": "Waris Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Waris",
        "phone": "0300-9273330",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_6",
        "name": "Usman Kiryana store",
        "address": "Panj Girain Chowk",
        "customerName": "Usman",
        "phone": "0349-4045364",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_7",
        "name": "Munawar Ali kiryana",
        "address": "Panj Girain Chowk",
        "customerName": "Munawar Ali",
        "phone": "0342-1602928",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_8",
        "name": "786 Kiryana Store",
        "address": "Panj Girain Chowk",
        "customerName": "Jafar Ali",
        "phone": "0300-3697225",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_9",
        "name": "Tahir Kiryana Store",
        "address": "Work",
        "customerName": "Tahir",
        "phone": "0340-0934425",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_10",
        "name": "Saleh Muhammad Chakki Wala",
        "address": "Kenchi Pul",
        "customerName": "Saleh Muhammad",
        "phone": "0345-6064837",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_11",
        "name": "Allah hu Super Store",
        "address": "Kenchi Pul",
        "customerName": "Malik Haider",
        "phone": "0345-4746352",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_12",
        "name": "Hassan Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Bilal",
        "phone": "0344-3921957",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_13",
        "name": "Baba Saleh Drink Corner",
        "address": "Ditta Choki Adda",
        "customerName": "Baba Saleh",
        "phone": "0343-9785751",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_14",
        "name": "Al Qamar Fast Food Drink Corner",
        "address": "Ditta Choki Adda",
        "customerName": "qamar",
        "phone": "0346-6511787",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_15",
        "name": "Mashallah kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Ghulam Shabir",
        "phone": "0347-2131362",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_16",
        "name": "Akbar Kiryana Store",
        "address": "Ditta Choki",
        "customerName": "Akbar",
        "phone": "0348-7510936",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_17",
        "name": "Zain Kiryana Store",
        "address": "Ditta Choki",
        "customerName": "Zain",
        "phone": "0345-8829568",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_18",
        "name": "Shamasher Ali Kiryana",
        "address": "Ditta Choki",
        "customerName": "Shamsher",
        "phone": "0333-4742296",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_19",
        "name": "Shehryar Kiryana Store",
        "address": "Imam Kot Back",
        "customerName": "Shehryar",
        "phone": "0349-4029932",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_20",
        "name": "Qadri Kiryana Store",
        "address": "Chhota Rata Road",
        "customerName": "qadri",
        "phone": "0345-7886300",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_21",
        "name": "bismillah kiryana",
        "address": "Chhota Rata Road",
        "customerName": "Bismillah",
        "phone": "0347-8713472",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_22",
        "name": "Mubashar Abbas Kiryana",
        "address": "Chhota Rata Road",
        "customerName": "Mubashar abbas",
        "phone": "0343-5675924",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_23",
        "name": "Shahid kiryana Mongar",
        "address": "Chhota Rata road",
        "customerName": "Shahid",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_24",
        "name": "Sanwal Drink Corner",
        "address": "Chhota Rata Road",
        "customerName": "Sanwal",
        "phone": "0349-3366133",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_25",
        "name": "Allah Dita Drink Corner",
        "address": "Chhota Rata Chowk",
        "customerName": "Allah Dita",
        "phone": "0344-3167885",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_26",
        "name": "Hafiz Fruit Shop",
        "address": "Chhota Rata Chowk",
        "customerName": "Hafiz",
        "phone": "0313-0008913",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_27",
        "name": "Shahbaz General Store",
        "address": "Chhota Rata",
        "customerName": "Shahbaz",
        "phone": "0348-3784628",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_28",
        "name": "Abbas Kiryana Store",
        "address": "Chhota Rata",
        "customerName": "Abbas",
        "phone": "0346-4937174",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_29",
        "name": "Ustad Mukhtar Kiryana",
        "address": "chota Rata",
        "customerName": "Mukhtar",
        "phone": "0342-5839799",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_30",
        "name": "Adil khan Kiryana Store",
        "address": "chota Rata",
        "customerName": "Adil Khan",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_31",
        "name": "Mumtaz Ahmad Kiryana Store",
        "address": "chota Rata",
        "customerName": "Mumtaz Ahmad",
        "phone": "0341-5418588",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_32",
        "name": "Jafar Darzi Kiryana Stire",
        "address": "Masjid Ke Peeche",
        "customerName": "Jafar Ali",
        "phone": "0342-4919617",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_33",
        "name": "Amman Zainab",
        "address": "Chhota Rata Chowk",
        "customerName": "Zainab",
        "phone": "0342-4980148",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_34",
        "name": "Asad Abbas Kiryana Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Asad Abbas",
        "phone": "0342-7659682",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_35",
        "name": "Mall of Shah Jewna",
        "address": "Sheikhan Road",
        "customerName": "Mall Of Shahjewnaa",
        "phone": "0346-7259437",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_36",
        "name": "Hospital Tuk Shop",
        "address": "Rata Chowk Adda",
        "customerName": "Hospital",
        "phone": "0343-8795632",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_37",
        "name": "Al Madina Kiryana Store",
        "address": "Rata Chowk Adda",
        "customerName": "Almadina",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_38",
        "name": "Muskan Drink Corner",
        "address": "Rata Chowk Adda",
        "customerName": "Muskan",
        "phone": "0347-7861665",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_39",
        "name": "Waseem kiryana",
        "address": "Bisma House Sheikhan Road",
        "customerName": "Waseem",
        "phone": "0348-3094220",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_40",
        "name": "Chaoudhry Sweets",
        "address": "Choki Muhammad Wali",
        "customerName": "Chaoudhry",
        "phone": "0341-5181705",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_41",
        "name": "al jafria sweets",
        "address": "Sheikhan Adda",
        "customerName": "jafir",
        "phone": "0348-0777687",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_42",
        "name": "Al imran Sweets",
        "address": "Sheikhan Adda",
        "customerName": "imran",
        "phone": "0343-2837659",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_43",
        "name": "Ayub Khan Sweets",
        "address": "Sheikhan Adda",
        "customerName": "Ayub Khan",
        "phone": "0342-0569857",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_44",
        "name": "Ahmad Hassan sweets",
        "address": "Sheikhan Adda",
        "customerName": "Ahmad Hassan",
        "phone": "0330-8985756",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_45",
        "name": "Ahmad Ali Mohli",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Mohli",
        "phone": "0334-9786641",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_46",
        "name": "Ahmad Ali Kiryana Store",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Ahmad Ali",
        "phone": "0310-6332371",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_47",
        "name": "Ali Kiryana Store",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Ali",
        "phone": "0345-1796950",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_48",
        "name": "Muzammil Kiryana Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Muzzamil",
        "phone": "0370-6250320",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_49",
        "name": "Shahzad Ali kiryana",
        "address": "Sheikhan Bazaar",
        "customerName": "Shazad Ali",
        "phone": "0342-0070669",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_50",
        "name": "Malik General Store",
        "address": "Sheikhan Adda",
        "customerName": "Malik Haider",
        "phone": "0347-1733267",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_51",
        "name": "Amir Shah General Store",
        "address": "Sheikhan Adda",
        "customerName": "Amir Shah",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_52",
        "name": "Yousaf Kiryana Store",
        "address": "Sheikhan Adda",
        "customerName": "Yousaf",
        "phone": "0334-6308213",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_53",
        "name": "Ahmad Ali Mannu",
        "address": "Sheikhan Adda",
        "customerName": "Mannu",
        "phone": "0318-3934057",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_54",
        "name": "Asif Kiryana Store",
        "address": "Sheikhan Nukar",
        "customerName": "Asif",
        "phone": "0347-1162422",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_55",
        "name": "Ali Kiryana Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Ali",
        "phone": "0342-9441411",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_56",
        "name": "Baba Jamal Kiryana Store",
        "address": "Sheikhan Road",
        "customerName": "Jamal",
        "phone": "0348-1412599",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_57",
        "name": "Saim Kiryana Store",
        "address": "Sheikhan Road",
        "customerName": "Saim",
        "phone": "0347-9724970",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_58",
        "name": "Zeshaan Kiryana Store",
        "address": "Adda Khoi",
        "customerName": "Zeeshan",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_59",
        "name": "Zafar Iqbal General Store",
        "address": "Adda Khoi",
        "customerName": "Zafar Iqbal",
        "phone": "0342-7886754",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_60",
        "name": "Akhtar General Store",
        "address": "Adda Khoi",
        "customerName": "Akhtar",
        "phone": "0346-7386023",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_61",
        "name": "Jewan Kiryana Storen",
        "address": "Adda Khoi",
        "customerName": "Jewan",
        "phone": "0341-4904879",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_62",
        "name": "Doctor AD Kiryana Store",
        "address": "Adda Khoi",
        "customerName": "Allah Dita",
        "phone": "0347-9072854",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_63",
        "name": "Baba Karam Ilahi",
        "address": "Bara Rata",
        "customerName": "karam Ilahi",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_64",
        "name": "Imran Kiryana Store",
        "address": "Bara Rata",
        "customerName": "imran",
        "phone": "0306-7505397",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_65",
        "name": "yaseen Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Yaseen",
        "phone": "0347-8706841",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_66",
        "name": "Zafar Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Zafar Iqbal",
        "phone": "0342-7390141",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_67",
        "name": "Sultan Kirana Store",
        "address": "Bara Rata",
        "customerName": "Sultan",
        "phone": "0344-4940184",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_68",
        "name": "Asim Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Asim",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_69",
        "name": "School Tuk Shop",
        "address": "Rata Kalan",
        "customerName": "School Tuk Shop",
        "phone": "",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_70",
        "name": "Ramzan Kiryana Store",
        "address": "Ramzan",
        "customerName": "Ramzan",
        "phone": "0346-8313266",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_71",
        "name": "Bilal Kiryana Store",
        "address": "Bilal",
        "customerName": "Bilal",
        "phone": "0346-5629554",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_72",
        "name": "Tajjamal Kiryana Store",
        "address": "Tajjamal",
        "customerName": "Tajjamal",
        "phone": "0343-7947556",
        "visitDay": "Sunday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SHAH JEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_73",
        "name": "Bismillah kiryana Store",
        "address": "Iqbal Nagar",
        "customerName": "Sajid",
        "phone": "0345-7605716",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_74",
        "name": "Amir Kiryana store",
        "address": "Iqbal Nagar",
        "customerName": "Amir",
        "phone": "0345-2317501",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_75",
        "name": "sajid Kiryana Store",
        "address": "Pakka khoo",
        "customerName": "Sajid",
        "phone": "0340-7491991",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_76",
        "name": "Awaan Hotel",
        "address": "Sarghoda road",
        "customerName": "Awaan",
        "phone": "0348-1188680",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_77",
        "name": "Sikandar Kiryana",
        "address": "Sarghoda road",
        "customerName": "Sikandar Hayat",
        "phone": "0340-7493139",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_78",
        "name": "Zain General Store",
        "address": "Nehar Wali Pul",
        "customerName": "Musadaq",
        "phone": "0342-5310267",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_79",
        "name": "Azhar Kiryan",
        "address": "Neher Wali Pul",
        "customerName": "Azhar",
        "phone": "0348-1188740",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_80",
        "name": "baghdadi",
        "address": "Nehar Wali Pul",
        "customerName": "mubashar",
        "phone": "0342-2540744",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_81",
        "name": "Akram Kiryana store",
        "address": "Mor Mandi",
        "customerName": "Akram",
        "phone": "0347-5261579",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_82",
        "name": "Almubark Kiryana Store",
        "address": "Mor Mandi",
        "customerName": "sajid Ali",
        "phone": "0344-0253773",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_83",
        "name": "Nadra Office",
        "address": "",
        "customerName": "Nadra Office",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_84",
        "name": "Usman kiryana",
        "address": "Sharin Basti",
        "customerName": "Hamza",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_85",
        "name": "Ali Hassan Kiryana",
        "address": "Sharin Basti",
        "customerName": "Ahmad Hassan",
        "phone": "0310-1755140",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_86",
        "name": "Ali Hussain Kiryana",
        "address": "Sharin Basti",
        "customerName": "Ghar Wali dukaan",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_87",
        "name": "Kashi General Store",
        "address": "Mor Mandi Chok",
        "customerName": "Kashif",
        "phone": "0346-4166760",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_88",
        "name": "Bhatti General Store",
        "address": "Mor Mandi Chok",
        "customerName": "Nasir Al",
        "phone": "0342-2758409",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_89",
        "name": "Bashheer Drink Corne",
        "address": "Mor Mandi",
        "customerName": "Usman",
        "phone": "0340-1817120",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_90",
        "name": "Ali General Store",
        "address": "Mor Mandi",
        "customerName": "Muzzamil",
        "phone": "0346-4023981",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_91",
        "name": "Haji Abbas Kiryana Store",
        "address": "Mor Mandi",
        "customerName": "Haji Abbas",
        "phone": "0342-7287492",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_92",
        "name": "Arshid Drink Juice",
        "address": "Mor Mandi",
        "customerName": "Arshid",
        "phone": "0347-7862086",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_93",
        "name": "Ulfat general Store",
        "address": "Mormandi",
        "customerName": "Ulfat",
        "phone": "0349-7957034",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_94",
        "name": "Naheed Naroo Kiryana",
        "address": "Mor Mandi",
        "customerName": "Naheed",
        "phone": "0301-7225879",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_95",
        "name": "Hafiz kiryana",
        "address": "Mor mandi",
        "customerName": "Hafiz",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_96",
        "name": "Kamran Drink Corner",
        "address": "Mormandi",
        "customerName": "ghulam Hussain",
        "phone": "0343-8154095",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_97",
        "name": "ZIC Petrol Pump",
        "address": "Jhamrah",
        "customerName": "Haji Iqbal Khan",
        "phone": "0345-2050576",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_98",
        "name": "Razaqia Hotel",
        "address": "Jhamrah",
        "customerName": "Hameed Khan",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_99",
        "name": "Quetta Hotel Drink",
        "address": "Jhamrah",
        "customerName": "Saleemullah",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_100",
        "name": "Allah hu kiryana Store",
        "address": "Akrenwala",
        "customerName": "Sajjad Awaan",
        "phone": "0346-6647423",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_101",
        "name": "Chaoudhry DrinkCorner",
        "address": "Akrenwala",
        "customerName": "Iqbal",
        "phone": "0344-8720431",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_102",
        "name": "Taya Bi Sweets",
        "address": "Akrenwala",
        "customerName": "Chaoudhary Asghar",
        "phone": "0300-2927796",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_103",
        "name": "Allah Dita Drink Canteen",
        "address": "Akrenwala",
        "customerName": "Usman",
        "phone": "0313-1739403",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_104",
        "name": "Makkah General Store",
        "address": "Akrenwala",
        "customerName": "Rana Asad  Ali",
        "phone": "0346-7200684",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_105",
        "name": "Haq Bahu Sweets",
        "address": "Akrenwala",
        "customerName": "Haq Bahu Sweets",
        "phone": "0342-1877958",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_106",
        "name": "Chaoudhry Super Store",
        "address": "Akrenwala",
        "customerName": "Chaoudhary",
        "phone": "0344-7504166",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_107",
        "name": "Ali Hassan Drink Corner",
        "address": "Akrenwala",
        "customerName": "Ali Hassan",
        "phone": "0343-0772020",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_108",
        "name": "Mahar Brothers Kiryana",
        "address": "Akrenwala",
        "customerName": "Ramzan",
        "phone": "0345-5534317",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_109",
        "name": "Hafiz Sweets",
        "address": "Akrenwala",
        "customerName": "ImranKhan",
        "phone": "0341-7700706",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_110",
        "name": "Chaudhry Kiryana",
        "address": "Jhamrah",
        "customerName": "Chaudhry",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_111",
        "name": "Umar Sweets",
        "address": "Jhamrah",
        "customerName": "Umar",
        "phone": "0347-4121612",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_112",
        "name": "Shafiq Fruit Shop",
        "address": "Jhamrah",
        "customerName": "Shafiq",
        "phone": "0343-4585795",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_113",
        "name": "Malik Habeeb kiryana",
        "address": "Jhamrah",
        "customerName": "Muzzamil Abbas",
        "phone": "0342-1743954",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_114",
        "name": "Umair kiryana",
        "address": "Jhamrah",
        "customerName": "Umair",
        "phone": "0371-1746588",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_115",
        "name": "Javed Sweets",
        "address": "Jhamrah",
        "customerName": "Javed Khtar",
        "phone": "0348-2558565",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_116",
        "name": "safdar Asghar Kiryana",
        "address": "Jhamrah",
        "customerName": "Nawaz",
        "phone": "0342-1001789",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_117",
        "name": "786 Kiryana",
        "address": "Jhamrah",
        "customerName": "Amjid",
        "phone": "0344-7625032",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_118",
        "name": "Tahir Kiryana",
        "address": "Jhamrah",
        "customerName": "Tahir",
        "phone": "0311-4229252",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_119",
        "name": "Tauseef kiryana",
        "address": "Jhamrah",
        "customerName": "Tauseef Ahmad",
        "phone": "0346-6453038",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_120",
        "name": "Almadina General store",
        "address": "Jhamrah",
        "customerName": "Qari Jafar",
        "phone": "0302-6737273",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_121",
        "name": "Faisal Kiryana Store",
        "address": "Chak 63",
        "customerName": "Faisal Shah",
        "phone": "0347-2243405",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_122",
        "name": "Ishaq General store",
        "address": "Chak 63",
        "customerName": "Ishaq",
        "phone": "0347-7700714",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_123",
        "name": "Parweez kiryana",
        "address": "Chak 63",
        "customerName": "Parweez",
        "phone": "0344-4689163",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_124",
        "name": "Hamza Kiryna",
        "address": "Chak 63",
        "customerName": "Hamza",
        "phone": "0302-8919860",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_125",
        "name": "Khalid",
        "address": "Chak 63",
        "customerName": "Khalid",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_126",
        "name": "Shoaib Akhtar",
        "address": "Chak 63",
        "customerName": "Shoaib",
        "phone": "0348-7900072",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_127",
        "name": "Tanveer Kiryana",
        "address": "Chak 63",
        "customerName": "Tanveer",
        "phone": "0305-1688363",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_128",
        "name": "Rana General Store",
        "address": "Chak 63",
        "customerName": "Munza Ahmad",
        "phone": "0341-3248433",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_129",
        "name": "Hassan Kiryana",
        "address": "Chak 63",
        "customerName": "Hasan",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_130",
        "name": "Mashallah Super Store",
        "address": "Chak 63",
        "customerName": "Alamgir",
        "phone": "0349-6885110",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_131",
        "name": "easy Paisa Shop",
        "address": "Chak 63",
        "customerName": "Muhammad Nawaz",
        "phone": "0340-7473933",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_132",
        "name": "Khan Hotel",
        "address": "Sargodha Road",
        "customerName": "Qamar",
        "phone": "0344-0643885",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_133",
        "name": "Waqas Kiryana",
        "address": "Sargodha Road",
        "customerName": "Waqas",
        "phone": "",
        "visitDay": "Monday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "SARGODHA ROAD",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_134",
        "name": "Mazhar Kiryana",
        "address": "Rasool Pur Pul",
        "customerName": "Mazhar Abbas",
        "phone": "0344-2838952",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_135",
        "name": "Haidri Kiryana",
        "address": "Rasool Pur Adda",
        "customerName": "Malik Irfan",
        "phone": "0342-4139368",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_136",
        "name": "Lajpal Kiryana",
        "address": "Rasool Pur Adda",
        "customerName": "Asif Sabzi Farosh",
        "phone": "0349-0009984",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_137",
        "name": "Allah Ho Kiryana",
        "address": "Abu Talib Chowk",
        "customerName": "Asad Waraich",
        "phone": "0342-7854635",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_138",
        "name": "Mansoor Kiryana",
        "address": "Abu Talib Chowk",
        "customerName": "Mansoor",
        "phone": "0347-9053097",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_139",
        "name": "Bukhari Kiryana",
        "address": "Abu Talib Chowk",
        "customerName": "fakhar Abbas",
        "phone": "0347-7937214",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_140",
        "name": "Malik General Store",
        "address": "pabar Wala Adda",
        "customerName": "Shahid Mushtaq",
        "phone": "0345-9726065",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_141",
        "name": "Sultan Kiryana",
        "address": "pabar Wala Adda",
        "customerName": "Mushtaq",
        "phone": "0345-8701214",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_142",
        "name": "Puntaji General Store",
        "address": "pabar Wala Adda",
        "customerName": "Tanveer",
        "phone": "0341-3060660",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_143",
        "name": "Nadeem Kiryana",
        "address": "Pabar Wala Adda",
        "customerName": "Nadeem Iqbal",
        "phone": "0345-4501414",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_144",
        "name": "kroria General Store",
        "address": "Pabar Wala Adda",
        "customerName": "Pervez",
        "phone": "0341-5817668",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_145",
        "name": "Bhatta Mobile",
        "address": "Pabar Wala Adda",
        "customerName": "Imran",
        "phone": "0349-7602645",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_146",
        "name": "Mukhtar Kiryana Store",
        "address": "Pabar Wala Adda",
        "customerName": "Mukhtar",
        "phone": "0342-0921414",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_147",
        "name": "Muzaffar Kiryana Store",
        "address": "Pabar Wala Adda",
        "customerName": "Muzaffar",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_148",
        "name": "Aasim Kiryana Store",
        "address": "Pabar Wala Adda",
        "customerName": "Aasim",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_149",
        "name": "Mahr Kiryana Store",
        "address": "Pabar Wala Adda",
        "customerName": "Musaddiq",
        "phone": "0347-9049116",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_150",
        "name": "Bahoo Kiryana Store",
        "address": "Asif Market",
        "customerName": "Muhammad Ahmed",
        "phone": "0349-0004218",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_151",
        "name": "sialvi Kiryana Store",
        "address": "Turbet Haji Shah",
        "customerName": "Arsalan Saith",
        "phone": "0349-6718574",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_152",
        "name": "Rana Amir Kiryana Store",
        "address": "Turbet Haji Shah",
        "customerName": "Aamir",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_153",
        "name": "mahr Faisal Kiryana Store",
        "address": "Bhamb",
        "customerName": "Faisal",
        "phone": "0345-6726508",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_154",
        "name": "Tahir Kiryana Store",
        "address": "Bhamb",
        "customerName": "Tahir",
        "phone": "0370-6192556",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_155",
        "name": "Imtiaz Kiryana Store",
        "address": "Bhamb",
        "customerName": "Imtiaz",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_156",
        "name": "Tayyab Malik Kiryana Store",
        "address": "Ali Town Bhamb",
        "customerName": "Tayyab",
        "phone": "0343-6793090",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_157",
        "name": "Owais General Store",
        "address": "Thana Mor",
        "customerName": "Owais",
        "phone": "0343-7741722",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_158",
        "name": "Asif Kiryana Store",
        "address": "Thana Mor",
        "customerName": "Asif",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_159",
        "name": "Umar Farooq Kiryana Store",
        "address": "Thana Mor",
        "customerName": "Farooq",
        "phone": "0346-2201387",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_160",
        "name": "Mahr Kiryana Store",
        "address": "Thana Mor",
        "customerName": "Samar Abbas",
        "phone": "0345-4940162",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_161",
        "name": "Saqib tuk Shop",
        "address": "Jamal Wala",
        "customerName": "Saqib",
        "phone": "0343-4819960",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_162",
        "name": "Nafees Kiryana Store",
        "address": "Pul Lalian",
        "customerName": "Nafees",
        "phone": "0349-4970624",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_163",
        "name": "Ghulam Raza Kiryana Store",
        "address": "Pindi Laal Murid",
        "customerName": "Ghulam Raza",
        "phone": "0343-5249621",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_164",
        "name": "Mujtaba Kiryana Store",
        "address": "Pindi Laal Murid",
        "customerName": "Mujtaba",
        "phone": "0341-3475728",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_165",
        "name": "khaleel Kiryana Store",
        "address": "Ari Wali Pul",
        "customerName": "Khalil",
        "phone": "0342-7575037",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_166",
        "name": "Munawar Kiryana Store",
        "address": "Bhaga",
        "customerName": "Mansoor",
        "phone": "0342-7474633",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_167",
        "name": "sanaullah Kiryana Store",
        "address": "Lo Khokhra Adda",
        "customerName": "Sanaullah",
        "phone": "0343-6348965",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_168",
        "name": "Anwar Kiryana Store",
        "address": "Lo Khokhra Adda",
        "customerName": "Anwar",
        "phone": "0345-1046578",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_169",
        "name": "Fayaz Tea Stall",
        "address": "Lo Khokhra Adda",
        "customerName": "Khayas",
        "phone": "0343-3814868",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_170",
        "name": "faizan Kiryana",
        "address": "Lo Khokhra Basti",
        "customerName": "Faizan",
        "phone": "0313-0827450",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_171",
        "name": "Tahir Kiryana",
        "address": "Lo Khokhra Basti",
        "customerName": "Tahir",
        "phone": "0340-6920885",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_172",
        "name": "Zafar Kiryana",
        "address": "Lote Wali Pul",
        "customerName": "Zafar",
        "phone": "0341-7446584",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_173",
        "name": "Akbar Shah Kiryana",
        "address": "Lote Wali Pul",
        "customerName": "Akbar",
        "phone": "0341-7446554",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_174",
        "name": "Haqbaho Kiryana",
        "address": "Meer Mor",
        "customerName": "Mukhtar",
        "phone": "0342-7954650",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_175",
        "name": "Feroz Khan Kiryana",
        "address": "Meer Mor",
        "customerName": "Feroz",
        "phone": "0346-0809280",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_176",
        "name": "Haji Sultan Kiryana Store",
        "address": "Meer Mor",
        "customerName": "Sultan",
        "phone": "0342-7701596",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_177",
        "name": "Irfan Khan Kiryana Store",
        "address": "Meer Mor",
        "customerName": "Irfan",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_178",
        "name": "Umair Kiryana",
        "address": "Chatta Road",
        "customerName": "Umair",
        "phone": "0315-3946076",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_179",
        "name": "Alhamd Super Store",
        "address": "Shareen Pul",
        "customerName": "Feroz Khan",
        "phone": "0345-4452716",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_180",
        "name": "Haji Lal Khan Store",
        "address": "Dadapul Hospital",
        "customerName": "Sanaullah",
        "phone": "0343-7065085",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_181",
        "name": "Farooq Kiryana Store",
        "address": "Dada Pul Chatta",
        "customerName": "Yaseen",
        "phone": "0345-1484092",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_182",
        "name": "Zubair Kiryana Store",
        "address": "Chatta Basti",
        "customerName": "Zubair",
        "phone": "0308-5353577",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_183",
        "name": "Hafiz Kiryana Store",
        "address": "Chhatta Basti",
        "customerName": "Mitho",
        "phone": "0345-0702031",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_184",
        "name": "Umair Kiryana Store",
        "address": "Chhatta Basti",
        "customerName": "umair",
        "phone": "",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_185",
        "name": "Ayaan Sweet",
        "address": "Qadirpur Pul",
        "customerName": "Tariq Khan",
        "phone": "0345-6395827",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_186",
        "name": "Al Madina Kiryana",
        "address": "Qadirpur Pul",
        "customerName": "Tasawwur Khan",
        "phone": "0348-7368026",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_187",
        "name": "Faisal General Store",
        "address": "Qadirpur Pul",
        "customerName": "Faisal Khan",
        "phone": "0344-4080603",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_188",
        "name": "Waseem General Store",
        "address": "Qadirpur Pul",
        "customerName": "Waseem Khan",
        "phone": "0344-1459136",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_189",
        "name": "Allahu Zaffar Kiryana Store",
        "address": "Qadirpur Basti",
        "customerName": "Zafar",
        "phone": "0344-7588756",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_190",
        "name": "Lajpal Mumtaz Khan Store",
        "address": "Jage Bas",
        "customerName": "Mumtaz Khan",
        "phone": "0345-7739868",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_191",
        "name": "Shoaib Karyana Store",
        "address": "Dokah",
        "customerName": "Shoaib",
        "phone": "0345-0313046",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_192",
        "name": "Zargham Shah Store",
        "address": "",
        "customerName": "Zargham",
        "phone": "0301-6614268",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_193",
        "name": "Haji Umar daraz Kiryana Store",
        "address": "",
        "customerName": "Umar Daraz",
        "phone": "0334-5314760",
        "visitDay": "Tuesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "PABAR ALA KOT",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_194",
        "name": "Qasim Tea Stall",
        "address": "Bismillah Mill",
        "customerName": "Saif",
        "phone": "0333-6540745",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_195",
        "name": "Hussaini Kiryana",
        "address": "Pabbar Wala Chowk",
        "customerName": "Foji Imran",
        "phone": "0349-2020727",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_196",
        "name": "Asif Kiryana",
        "address": "Murad Wala",
        "customerName": "Zubair",
        "phone": "0340-0455430",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_197",
        "name": "Lajpal Kiryana Store",
        "address": "Murad Phatak",
        "customerName": "Murtaza",
        "phone": "0345-4248478",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_198",
        "name": "Awan Kiryana Store",
        "address": "Unara",
        "customerName": "Arslan",
        "phone": "0345-5880438",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_199",
        "name": "Lajpal Super Store",
        "address": "Unara",
        "customerName": "Tanveer Awan",
        "phone": "0346-6401215",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_200",
        "name": "Qrodia Store",
        "address": "Unara",
        "customerName": "Irfan",
        "phone": "0348-0401269",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_201",
        "name": "Baba Kiryana Store",
        "address": "Unara",
        "customerName": "Ali Kharl",
        "phone": "0315-0727452",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_202",
        "name": "Chaudhry Ahmed Society",
        "address": "Phatak Mor Mandi",
        "customerName": "Ahmed",
        "phone": "0314-6376655",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_203",
        "name": "Habib Drink Corner",
        "address": "Phatak Mor Mandi",
        "customerName": "Habib Khan",
        "phone": "0349-4936717",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_204",
        "name": "Usman Kiryana",
        "address": "Phatak Mor Mandi",
        "customerName": "Usman Ahmed",
        "phone": "0346-8683269",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_205",
        "name": "Aamir Kiryana",
        "address": "Phatak Mor Mandi",
        "customerName": "Aamir Iqbal",
        "phone": "0343-5707494",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_206",
        "name": "Gondal Goli Toffee",
        "address": "Hussainabad",
        "customerName": "Zia",
        "phone": "0346-0664070",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_207",
        "name": "Irfan Kiryana",
        "address": "Hussainabad",
        "customerName": "Irfan",
        "phone": "0308-6696097",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_208",
        "name": "Sufi Kiryana",
        "address": "Kari Wala Road",
        "customerName": "Fauji Nasir Abbas",
        "phone": "0342-5092168",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_209",
        "name": "Fazal Kiryana",
        "address": "Kari Wala Road",
        "customerName": "Tasawwur Abbas",
        "phone": "0337-6182902",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_210",
        "name": "Iqbal Kiryana Store",
        "address": "Hussainabad",
        "customerName": "Javed Iqbal",
        "phone": "0313-5251725",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_211",
        "name": "Shehryar Kiryana",
        "address": "Hussainabad",
        "customerName": "Adeel Haider",
        "phone": "0344-1359984",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_212",
        "name": "Fauji  Kiryana",
        "address": "Kari Wala Road",
        "customerName": "Zeeshan Haider",
        "phone": "0348-2731378",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_213",
        "name": "Raza Kiryana",
        "address": "Kari Hussainabad",
        "customerName": "Muhammad Abbas",
        "phone": "0344-7809872",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_214",
        "name": "Fauji Rafiq Kiryana",
        "address": "Hussainabad",
        "customerName": "Rafiq",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_215",
        "name": "Ibrahim Kiryana",
        "address": "Hussainabad",
        "customerName": "Ibrahim",
        "phone": "0342-7781842",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_216",
        "name": "Nadeem Kiryana",
        "address": "Hussainabad",
        "customerName": "Nadeem",
        "phone": "0349-6112837",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_217",
        "name": "Hussain Kiryana",
        "address": "Hussainabad",
        "customerName": "Hussain",
        "phone": "0314-3846770",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_218",
        "name": "Muzammil Drink Corner",
        "address": "Hussainabad",
        "customerName": "Adnan",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_219",
        "name": "Kharal Kiryana Store",
        "address": "Hussainabad",
        "customerName": "Haider Kharl",
        "phone": "0315-6587921",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_220",
        "name": "Malik Kiryana",
        "address": "Hussainabad",
        "customerName": "Turbet Ali",
        "phone": "0343-7859338",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_221",
        "name": "Irfan Kiryana",
        "address": "Hussainabad",
        "customerName": "Farhan",
        "phone": "0304-2753276",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_222",
        "name": "Hafiz Kiryana",
        "address": "Hussainabad",
        "customerName": "Faizam Abbas",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_223",
        "name": "Shani Kiryana",
        "address": "Mozuwar Mana",
        "customerName": "Shani",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_224",
        "name": "Asif Kiryana",
        "address": "Mozuwa Mana",
        "customerName": "Asif",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_225",
        "name": "Ali Bhai kiryana Store",
        "address": "Phatak",
        "customerName": "Adnan",
        "phone": "0370-0770585",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_226",
        "name": "Khan Kiryana",
        "address": "Shahjiwna Road",
        "customerName": "Riyasat",
        "phone": "0316-9833735",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_227",
        "name": "Umar Daraz Kiryana",
        "address": "Shahjewna Road",
        "customerName": "Umar Daraz",
        "phone": "0347-4830255",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_228",
        "name": "Rehmat Kiryana",
        "address": "Wadan kroria Chak",
        "customerName": "Rehmat Ali",
        "phone": "0346-6065317",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_229",
        "name": "Al Rehman General Store",
        "address": "Wadan Chowk Gali",
        "customerName": "Muhammad Riaz",
        "phone": "0343-7934876",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_230",
        "name": "Ali General Store",
        "address": "Wadan Chowk Gali",
        "customerName": "Ali",
        "phone": "0349-3027326",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_231",
        "name": "Peer Bhai Kiryana",
        "address": "Wadan Pul",
        "customerName": "Shahid",
        "phone": "0341-7999541",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_232",
        "name": "Lajpal Qrodia",
        "address": "Dusehra Pul",
        "customerName": "Lajpal",
        "phone": "0347-7879657",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_233",
        "name": "Malik Kiryana",
        "address": "Dusehra",
        "customerName": "Muhammad Waqas",
        "phone": "0347-7879657",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_234",
        "name": "Munsha Kiryana",
        "address": "Dusehra Gali",
        "customerName": "Munsib Dar",
        "phone": "0345-4810805",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_235",
        "name": "Ghulam Mustafa Kiryana",
        "address": "Dusehra Gali",
        "customerName": "Ghulam Mustafa",
        "phone": "0326-1461032",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_236",
        "name": "Mubashir Kiryana",
        "address": "Dusehra Gali",
        "customerName": "Aamir",
        "phone": "0344-4700591",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_237",
        "name": "KHokhar Fruit Shop",
        "address": "Dusehra Gali",
        "customerName": "Hamra",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_238",
        "name": "Umar Kiryana",
        "address": "Dusehra Gali",
        "customerName": "Umar",
        "phone": "",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_239",
        "name": "Shoaib Kiryana",
        "address": "Dusera Gali",
        "customerName": "Shoaib Bakhtar",
        "phone": "0342-3410599",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_240",
        "name": "Asghar Kiryana Store",
        "address": "Dusehra Gali",
        "customerName": "Asghar",
        "phone": "0346-7284975",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_241",
        "name": "Farhad Mobile Shop",
        "address": "Dusehra Gali",
        "customerName": "Ustad Abbas",
        "phone": "0349-1775102",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_242",
        "name": "Shani Kiryana Store",
        "address": "Dusehra Gali",
        "customerName": "Ehsan",
        "phone": "0345-1047659",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_243",
        "name": "Sunara Kiryana Store",
        "address": "Dusehra Gali",
        "customerName": "Ghulam Abbas",
        "phone": "0343-4560172",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_244",
        "name": "Aon Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Moon Abbas",
        "phone": "0325-5399806",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_245",
        "name": "Bismillah Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Aamir Ali",
        "phone": "0305-5381136",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_246",
        "name": "Malik General Store",
        "address": "Panj Girain",
        "customerName": "Abbas",
        "phone": "0327-1817210",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_247",
        "name": "Mashallah General Store",
        "address": "Panj Girain",
        "customerName": "Malik Amjad",
        "phone": "0308-1551994",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_248",
        "name": "Hasnain Kiryana",
        "address": "Panj Girain",
        "customerName": "Hasnain",
        "phone": "0300-1315200",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_249",
        "name": "Malik Kiryana",
        "address": "Panj Girain",
        "customerName": "Ambar",
        "phone": "0306-1719590",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_250",
        "name": "Imran Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Umrani Haider",
        "phone": "0304-7585500",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_251",
        "name": "Pappu Pan Shop",
        "address": "Citi Mandi Chowk",
        "customerName": "Nouman",
        "phone": "0317-3430355",
        "visitDay": "Wednesday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "HUSSAINABAD WADAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_252",
        "name": "Al Safa Cish and Carry",
        "address": "Mor Mandi",
        "customerName": "Akhtar",
        "phone": "0340-9800980",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_253",
        "name": "Ashfaq Kiryana",
        "address": "Mor Mandi Pul",
        "customerName": "Ashfaq",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_254",
        "name": "Superior College",
        "address": "Mor Mandi Road",
        "customerName": "Ulfat",
        "phone": "0344-0863034",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_255",
        "name": "Haqbaho Kiryana Store",
        "address": "Rana Town",
        "customerName": "Shujaat Ali",
        "phone": "0345-7581079",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_256",
        "name": "School Mart",
        "address": "Mandi Road",
        "customerName": "Malik Shahid",
        "phone": "0318-7526100",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_257",
        "name": "Khizar Sweets",
        "address": "Mandi Mohar Wali",
        "customerName": "Haroon",
        "phone": "0348-7673023",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_258",
        "name": "pakeeza Sweets",
        "address": "Mohar Wali Road",
        "customerName": "Malik Tasawwur Abbas",
        "phone": "0342-3238873",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_259",
        "name": "Haqbaho Kiryana",
        "address": "Mohar Wali Road",
        "customerName": "Babar Khan",
        "phone": "0317-4554451",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_260",
        "name": "Kroria Kiryana",
        "address": "Mohar Wali Road",
        "customerName": "Waqar",
        "phone": "0341-1633031",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_261",
        "name": "Kamran Sweets",
        "address": "Mohar Wali Road",
        "customerName": "Kamran",
        "phone": "0340-7769668",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_262",
        "name": "Zam Zam Mart",
        "address": "Mohar Wali Road",
        "customerName": "Aamir Shehzad",
        "phone": "0309-0872830",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_263",
        "name": "Adnan Kiryana",
        "address": "Mohar Wali Road",
        "customerName": "Adnan Bhatti",
        "phone": "0343-6350467",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_264",
        "name": "Hafiz Kiryana Store",
        "address": "Mohar Wali Road",
        "customerName": "Asif Nawaz",
        "phone": "0347-7527278",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_265",
        "name": "Subhan Kiryana Store",
        "address": "Mohar Wali Road",
        "customerName": "Asif",
        "phone": "0344-0400192",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_266",
        "name": "CiviLian",
        "address": "Mohar Wali Road",
        "customerName": "Sheikh Muqeem",
        "phone": "0300-7592685",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 5,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_267",
        "name": "Akbar Kiryana",
        "address": "Mohar Wali Road Gali",
        "customerName": "Akbar",
        "phone": "0248-7674490",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_268",
        "name": "Mashallah Kiryana Store",
        "address": "Mohar Wali Road Gali",
        "customerName": "Junnaid",
        "phone": "0341-5431844",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_269",
        "name": "Hasnain Kiryana Store",
        "address": "Naya Thatta Pul",
        "customerName": "Hasnain",
        "phone": "0348-5074863",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_270",
        "name": "Zaib Trader",
        "address": "Naya Thatta Pul",
        "customerName": "Zeeshan Shah",
        "phone": "0312-8616222",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_271",
        "name": "Umar Daraz Kiryana",
        "address": "Naya Thatta Pul",
        "customerName": "Umar Farooq",
        "phone": "0340-0600157",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_272",
        "name": "Al Rehman Kiryana",
        "address": "Naya Thatta Pul Chowk",
        "customerName": "Babar",
        "phone": "0345-6963331",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_273",
        "name": "Mashallah Kiryana Store",
        "address": "Naya Thatta Pul",
        "customerName": "Aon",
        "phone": "0343-2763756",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_274",
        "name": "Baba Kiryana",
        "address": "Naya Thatta Pul Gali",
        "customerName": "Baba",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_275",
        "name": "Umar Daraz Qazi Kiryana",
        "address": "School ke sath",
        "customerName": "Umar Daraz",
        "phone": "0344-5145978",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_276",
        "name": "Haq Nawaz Kiryana",
        "address": "Ghazi Town",
        "customerName": "Haq Nawaz",
        "phone": "0301-5968760",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_277",
        "name": "Haqbaho Kiryana",
        "address": "Ghazi Town",
        "customerName": "Atif",
        "phone": "0317-0455368",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_278",
        "name": "Joiya Sweet Shop",
        "address": "Ghazi Town",
        "customerName": "Mumtaz",
        "phone": "0345-7471221",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_279",
        "name": "Hafiz Goli Toffee",
        "address": "Mandi City",
        "customerName": "Siddiq",
        "phone": "0340-1078533",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_280",
        "name": "Saleem Pan Shop",
        "address": "Mandi City",
        "customerName": "Saleem",
        "phone": "0345-3299447",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_281",
        "name": "Chand Kiryana",
        "address": "Mandi City",
        "customerName": "Chand",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_282",
        "name": "Shehzad Goli Toffee",
        "address": "Mandi City",
        "customerName": "Shehzad",
        "phone": "0311-6506630",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 4,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_283",
        "name": "Razaqia Sweets",
        "address": "Mandi City",
        "customerName": "Imdad Ali",
        "phone": "0341-4408410",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_284",
        "name": "Tahir kiryana Store",
        "address": "Mandi City",
        "customerName": "Tahir",
        "phone": "0345-7098608",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 4,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_285",
        "name": "Awais Kiryana Store",
        "address": "Mandi City",
        "customerName": "Owais",
        "phone": "0313-5581715",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_286",
        "name": "Almakkah",
        "address": "Mandi City",
        "customerName": "Al Makkah",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_287",
        "name": "Blue Kiryana",
        "address": "Mandi Citi",
        "customerName": "Blue",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_288",
        "name": "Sheikh Khalid Kiryana Store",
        "address": "Mandi Chowk",
        "customerName": "Khalil",
        "phone": "0311-7372700",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_289",
        "name": "Fauji Kiryana",
        "address": "Mandi Chowk Gali",
        "customerName": "Fauji",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_290",
        "name": "Chaudhry Kiryana",
        "address": "Mandi Chowk",
        "customerName": "Naveed Ahmed",
        "phone": "0315-8144942",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_291",
        "name": "Awan Kiryana Store",
        "address": "",
        "customerName": "Awan",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_292",
        "name": "Mansha Illah Kiryana Store",
        "address": "",
        "customerName": "Shahid",
        "phone": "",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_293",
        "name": "Razquia Sweets",
        "address": "",
        "customerName": "Nouman",
        "phone": "0344-7607903",
        "visitDay": "Thursday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "MOR MANDI SHAHJEWNA",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_294",
        "name": "Nusrat Kiryana",
        "address": "Waghra Chak",
        "customerName": "Waris Ali",
        "phone": "0349-7135741",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_295",
        "name": "Mursaleen Pump",
        "address": "Awan Chak",
        "customerName": "Nasir Ali",
        "phone": "0346-8261102",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_296",
        "name": "AB Kiryana",
        "address": "Panj Girain",
        "customerName": "AB",
        "phone": "0341-9536627",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_297",
        "name": "Hamza Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Zafar",
        "phone": "0344-7942124",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_298",
        "name": "Sultan Kiryana Store",
        "address": "Panj Girain",
        "customerName": "Sultan",
        "phone": "0344-7461693",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_299",
        "name": "Qamar Kiryana Store",
        "address": "Panj Girain Chowk",
        "customerName": "Faraz",
        "phone": "0300-2565822",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_300",
        "name": "Al Madina Kiryana Store",
        "address": "Panj Girain Chowk",
        "customerName": "Waqar Younis",
        "phone": "0346-4872891",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_301",
        "name": "Irfan Kiryana Store",
        "address": "Panj Girain Chowk",
        "customerName": "Imran",
        "phone": "0304-6503034",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_302",
        "name": "Akhtar Kiryana Store",
        "address": "Work",
        "customerName": "Munawar",
        "phone": "0306-3470818",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_303",
        "name": "Hussaini Kiryana Store",
        "address": "Kenchi Pul",
        "customerName": "Asghar Ali",
        "phone": "0347-7107090",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_304",
        "name": "Sajjad Kiryana Store",
        "address": "Kenchi Pul",
        "customerName": "Abdul Sattar",
        "phone": "0341-4941450",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_305",
        "name": "Aziz Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Malik Saeed",
        "phone": "0344-6006120",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_306",
        "name": "Imran Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Imran",
        "phone": "0315-6035860",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_307",
        "name": "Subhan Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Subhan",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_308",
        "name": "Nasir Kiryana Store",
        "address": "Ditta Choki Adda",
        "customerName": "Nasir",
        "phone": "0343-4425465",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_309",
        "name": "Alhasnain Kiryana Store",
        "address": "Ditta Choki",
        "customerName": "Arshad",
        "phone": "0334-6295913",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_310",
        "name": "Malik Kiryana Store",
        "address": "Ditta Choki",
        "customerName": "Munawar",
        "phone": "0300-1997230",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_311",
        "name": "Aftab Kiryana",
        "address": "Ditta Choki",
        "customerName": "Aftab",
        "phone": "0370-4293255",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_312",
        "name": "Imran Kiryana",
        "address": "Imam Kot Back",
        "customerName": "Imran",
        "phone": "0345-5941271",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_313",
        "name": "Fakhar Kiryana",
        "address": "Chhota Rata Road",
        "customerName": "Fakhar",
        "phone": "0346-4594387",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_314",
        "name": "One Ten Super Store",
        "address": "Chhota Rata Road",
        "customerName": "Asif",
        "phone": "0345-2495572",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_315",
        "name": "Al jannat Sweets",
        "address": "Chhota Rata Road",
        "customerName": "Arshad",
        "phone": "0348-6055829",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_316",
        "name": "Imran Mobile",
        "address": "Chhota Rata road",
        "customerName": "Imran",
        "phone": "0336-1702920",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_317",
        "name": "Aslam General Store",
        "address": "Chhota Rata Road",
        "customerName": "Aslam",
        "phone": "0331-6350999",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_318",
        "name": "Al imran General Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Imran",
        "phone": "0346-5220231",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_319",
        "name": "Sohail Kiryana Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Sohail",
        "phone": "0340-9474606",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_320",
        "name": "Shafa Kiryana",
        "address": "Chhota Rata",
        "customerName": "Shafa",
        "phone": "0348-6057009",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_321",
        "name": "Ghulam Yaseen Kiryana",
        "address": "Chhota Rata",
        "customerName": "Ghulam",
        "phone": "0341-5902368",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_322",
        "name": "Doctor Kiryana",
        "address": "chota Rata",
        "customerName": "M Fayaz",
        "phone": "0341-6944746",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_323",
        "name": "Fakhar Kiryana",
        "address": "chota Rata",
        "customerName": "Fakhar Yaseen",
        "phone": "0346-3008353",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_324",
        "name": "Habib Kiryana",
        "address": "chota Rata",
        "customerName": "Haseeb",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_325",
        "name": "Panjtani Nadeem Kiryans",
        "address": "Masjid Ke Peeche",
        "customerName": "Nadeem",
        "phone": "0345-9275177",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_326",
        "name": "Zafar Kiryana Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Zafar",
        "phone": "0342-8610749",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_327",
        "name": "Khaki Kiryana Store",
        "address": "Chhota Rata Chowk",
        "customerName": "Khaki",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_328",
        "name": "Qaim Abbas Pump",
        "address": "Sheikhan Road",
        "customerName": "Abbas",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_329",
        "name": "Malik Shopping Center",
        "address": "Rata Chowk Adda",
        "customerName": "Nadeem",
        "phone": "0341-4848376",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_330",
        "name": "Malik Kiryana Store",
        "address": "Rata Chowk Adda",
        "customerName": "Khawar",
        "phone": "0344-7533986",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_331",
        "name": "Al Madina Kiryana Store",
        "address": "Rata Chowk Adda",
        "customerName": "Safdar Abbas",
        "phone": "0345-1023224",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_332",
        "name": "Haji Sharif Kiryana Store",
        "address": "Bisma House Sheikhan Road",
        "customerName": "Ahmed",
        "phone": "0346-5777582",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_333",
        "name": "Liaqat Kiryana",
        "address": "Choki Muhammad Wali",
        "customerName": "Liaqat Ali",
        "phone": "0345-3626408",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_334",
        "name": "Al Hamd Kiryana",
        "address": "Sheikhan Adda",
        "customerName": "Ahmed Shehzad",
        "phone": "0340-5355881",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_335",
        "name": "Ameer Drink Corner",
        "address": "Sheikhan Adda",
        "customerName": "Ameer Khan",
        "phone": "0342-7472220",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_336",
        "name": "Tariq Saeed Goli Toffee",
        "address": "Sheikhan Adda",
        "customerName": "Junaid Ali",
        "phone": "0315-7071991",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_337",
        "name": "Tasawwur Kiryana Store",
        "address": "Sheikhan Adda",
        "customerName": "Tassuwar",
        "phone": "0345-6457837",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_338",
        "name": "Faisal Kiryana",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Faisal Abbas",
        "phone": "0326-1624142",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_339",
        "name": "Abdul Wahid",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Wahid",
        "phone": "0345-8685406",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_340",
        "name": "Waheed Kiryana Store",
        "address": "Sheikhan Bazaar Gali",
        "customerName": "Waheed",
        "phone": "0343-3565201",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 2,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_341",
        "name": "Baba Riaz Kiryana Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Aon Abbas",
        "phone": "0346-5823114",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_342",
        "name": "Asim Kiryana Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Aasim",
        "phone": "0344-4334313",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 4,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_343",
        "name": "Saqib Kiryana Store",
        "address": "Sheikhan Adda",
        "customerName": "Saqib",
        "phone": "0343-7910088",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_344",
        "name": "Al Jannat Sweets",
        "address": "Sheikhan Adda",
        "customerName": "Asad",
        "phone": "0346-8612516",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_345",
        "name": "Adeel Deendar Sweets",
        "address": "Sheikhan Adda",
        "customerName": "Rizwan",
        "phone": "0318-6749653",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_346",
        "name": "Al Jannat Super Store",
        "address": "Sheikhan Adda",
        "customerName": "Asghar",
        "phone": "0345-7580527",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_347",
        "name": "Zafar Cold Drink",
        "address": "Sheikhan Nukar",
        "customerName": "Zafar",
        "phone": "0343-8791537",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_348",
        "name": "Mazhar General Store",
        "address": "Sheikhan Bazaar",
        "customerName": "Mazhar",
        "phone": "0345-7580264",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 3,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_349",
        "name": "Sajid Wholesaler",
        "address": "Sheikhan Road",
        "customerName": "Sajid",
        "phone": "0344-7564238",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 5,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_350",
        "name": "Hafiz Kiryana Store",
        "address": "Sheikhan Road",
        "customerName": "Ghulam Shabbir",
        "phone": "0343-9502667",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_351",
        "name": "AB Kiryana",
        "address": "Adda Khoi",
        "customerName": "Fauji Akhtar",
        "phone": "0345-6806716",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_352",
        "name": "Hadi Kiryana",
        "address": "Adda Khoi",
        "customerName": "Hafiz Abish Raza",
        "phone": "0349-0808655",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_353",
        "name": "Chaudhry Kiryana",
        "address": "Adda Khoi",
        "customerName": "Sheraz Ahmed",
        "phone": "0341-0621017",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_354",
        "name": "Ghulam Cold Corner",
        "address": "Adda Khoi",
        "customerName": "Ghulam Ali",
        "phone": "0344-6155780",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_355",
        "name": "Asif Kiryana",
        "address": "Adda Khoi",
        "customerName": "Asif",
        "phone": "0342-4606395",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_356",
        "name": "Al Asf Sweet",
        "address": "Bara Rata",
        "customerName": "Asif",
        "phone": "0326-1229897",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_357",
        "name": "Zafar Kiryana",
        "address": "Bara Rata",
        "customerName": "Zafar",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_358",
        "name": "Wajid Kiryana",
        "address": "Bara Rata",
        "customerName": "Wajid",
        "phone": "0346-6500666",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_359",
        "name": "Khushhal Kiryana",
        "address": "Bara Rata",
        "customerName": "Adnan",
        "phone": "0341-4008020",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_360",
        "name": "Haji Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Umar",
        "phone": "0347-7341778",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_361",
        "name": "Aon Kiryana Store",
        "address": "Bara Rata",
        "customerName": "Aon Abbas",
        "phone": "",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 0,
        "taxMode": "filer",
        "creditBalance": 0
    },
    {
        "id": "shop_real_362",
        "name": "Khizar Hayat Kiryana Store",
        "address": "Rata Kalan",
        "customerName": "Khizar",
        "phone": "0342-7955780",
        "visitDay": "Saturday",
        "routeId": "r_chaudhary_trader",
        "subRouteName": "LALIYAN SHEKHAN",
        "salesman": "Arif Sanwal",
        "defaultDiscountPct": 1,
        "taxMode": "filer",
        "creditBalance": 0
    }
];
const DEFAULT_ROUTES = [
    {
        "id": "r_chaudhary_trader",
        "name": "Chaudhary Trader Main Beat",
        "salesman": "Arif Sanwal",
        "subRoutes": [
            {
                "id": "sr_mon",
                "name": "SARGODHA ROAD",
                "dayName": "Monday"
            },
            {
                "id": "sr_tue",
                "name": "PABAR ALA KOT",
                "dayName": "Tuesday"
            },
            {
                "id": "sr_wed",
                "name": "HUSSAINABAD WADAN",
                "dayName": "Wednesday"
            },
            {
                "id": "sr_thu",
                "name": "MOR MANDI SHAHJEWNA",
                "dayName": "Thursday"
            },
            {
                "id": "sr_sat",
                "name": "LALIYAN SHEKHAN",
                "dayName": "Saturday"
            },
            {
                "id": "sr_sun",
                "name": "SHAH JEWNA",
                "dayName": "Sunday"
            }
        ]
    }
];

let _cachedAppState = null;
let _saveDiskTimer = null;

function getAppStateFromStore() {
    if (_cachedAppState) return _cachedAppState;

    let state = null;
    if (fs.existsSync(dbManager.jsonFallbackPath)) {
        try {
            state = JSON.parse(fs.readFileSync(dbManager.jsonFallbackPath, 'utf8'));
        } catch (e) {}
    }
    if (!state) state = {};

    if (!Array.isArray(state.skus) || state.skus.length === 0) state.skus = [...DEFAULT_SKUS];
    if (!Array.isArray(state.shops) || state.shops.length === 0) state.shops = [...DEFAULT_SHOPS];
    if (!Array.isArray(state.routes) || state.routes.length === 0) state.routes = [...DEFAULT_ROUTES];
    if (!Array.isArray(state.salesmen) || state.salesmen.length === 0) {
        state.salesmen = [
            { id: "sales_01", name: "Salesman 1", routeId: "", phone: "", pin: "1234" },
            { id: "sales_02", name: "Salesman 2", routeId: "", phone: "", pin: "1234" }
        ];
    } else {
        state.salesmen.forEach(s => {
            if (s.name === "Ijaz") s.name = "Salesman 1";
            if (s.name === "Ali Raza") s.name = "Salesman 2";
        });
    }
    _cachedAppState = state;
    return _cachedAppState;
}


function saveAppStateToStore(state) {
    _cachedAppState = state;
    if (_saveDiskTimer) clearTimeout(_saveDiskTimer);
    _saveDiskTimer = setTimeout(() => {
        try {
            dbManager.writeJsonStore(_cachedAppState);
        } catch(e) {}
    }, 100);
}

function createAutoBackup(state) {
    const backupDir = path.join(BASE_DIR, 'Backups');
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

    const timeStr = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `ERP_Backup_${timeStr}.json`;
    const backupFilePath = path.join(backupDir, backupFileName);

    fs.writeFileSync(backupFilePath, JSON.stringify(state, null, 2), 'utf8');
    return backupFileName;
}

function handleHttpRequest(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    const pathname = (parsedUrl.pathname || '/').replace(/\/+$/, '') || '/';

    if (req.method === 'GET' && (!pathname.startsWith('/api/') && pathname !== '/')) {
        let filePath = path.join(BASE_DIR, pathname === '/salesman' ? 'salesman_app.html' : pathname);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes = {
                '.html': 'text/html; charset=utf-8',
                '.js': 'text/javascript',
                '.css': 'text/css',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.ico': 'image/x-icon'
            };
            res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
            fs.createReadStream(filePath).pipe(res);
            return;
        }
    }

    if (pathname === '/' || pathname === '/index.html' || pathname === '/pc') {
        const pcErpPath = path.join(BASE_DIR, 'index.html');
        if (fs.existsSync(pcErpPath)) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            fs.createReadStream(pcErpPath).pipe(res);
            return;
        }
    }

    if (pathname === '/salesman' || pathname === '/salesman_app.html') {
        const salesmanAppPath = path.join(BASE_DIR, 'salesman_app.html');
        if (fs.existsSync(salesmanAppPath)) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            fs.createReadStream(salesmanAppPath).pipe(res);
            return;
        }
    }

    if (pathname === '/api/sync/ping') {
        const localIps = getLocalIpAddresses();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: "online",
            serverName: "Chaudhary Trader ERP PC Sync Service",
            version: "2.5.0",
            timestamp: new Date().toISOString(),
            ipAddresses: localIps,
            primaryIp: localIps[0] ? localIps[0].address : "127.0.0.1",
            ports: PORTS
        }));
        return;
    }

    if (pathname === '/api/sync/salesmen') {
        const state = getAppStateFromStore();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            success: true,
            salesmen: state.salesmen || [],
            routes: state.routes || []
        }));
        return;
    }

    if (pathname === '/api/sync/latest-state') {
        const state = getAppStateFromStore();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            success: true,
            orders: state.orders || [],
            bills: state.bills || [],
            shops: state.shops || [],
            skus: state.skus || [],
            routes: state.routes || [],
            salesmen: state.salesmen || [],
            companies: state.companies || [],
            focSchemes: state.focSchemes || [],
            pickLists: state.pickLists || [],
            syncSessions: state.syncSessions || []
        }));
        return;
    }

    // SAFE CLOUD MERGE ENDPOINT
    // Browsers may have different local copies. NEVER replace the server's full sales/order arrays
    // with one browser's snapshot, otherwise two devices can overwrite each other every sync cycle.
    if ((pathname === '/api/sync/merge-state' || pathname === '/api/sync/update-master-data') && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const payload = JSON.parse(body || '{}');
                const state = getAppStateFromStore();

                const mergeByKeys = (existing, incoming, keys) => {
                    const out = Array.isArray(existing) ? [...existing] : [];
                    const index = new Map();
                    out.forEach((item, i) => {
                        for (const key of keys) {
                            const value = item && item[key];
                            if (value !== undefined && value !== null && value !== '') {
                                index.set(`${key}:${String(value)}`, i);
                                break;
                            }
                        }
                    });

                    for (const raw of (Array.isArray(incoming) ? incoming : [])) {
                        const item = raw && typeof raw === 'object' ? raw : null;
                        if (!item) continue;
                        let idx = -1;
                        for (const key of keys) {
                            const value = item[key];
                            if (value !== undefined && value !== null && value !== '' && index.has(`${key}:${String(value)}`)) {
                                idx = index.get(`${key}:${String(value)}`);
                                break;
                            }
                        }

                        if (idx === -1) {
                            idx = out.length;
                            out.push(item);
                        } else {
                            // Existing record wins unless incoming has an explicit newer modification time.
                            const oldItem = out[idx] || {};
                            const oldTime = Date.parse(oldItem.updatedAt || oldItem.modifiedAt || oldItem.createdDate || oldItem.createdAt || '') || 0;
                            const newTime = Date.parse(item.updatedAt || item.modifiedAt || item.createdDate || item.createdAt || '') || 0;
                            if (newTime >= oldTime && newTime > 0) {
                                out[idx] = { ...oldItem, ...item };
                            } else {
                                // Keep old values, but fill any missing fields from the incoming copy.
                                out[idx] = { ...item, ...oldItem };
                            }
                        }

                        for (const key of keys) {
                            const value = out[idx] && out[idx][key];
                            if (value !== undefined && value !== null && value !== '') index.set(`${key}:${String(value)}`, idx);
                        }
                    }
                    return out;
                };

                if (Array.isArray(payload.shops)) state.shops = mergeByKeys(state.shops, payload.shops, ['id']);
                if (Array.isArray(payload.skus) && payload.skus.length >= (state.skus ? state.skus.length : 0)) state.skus = payload.skus;
                if (Array.isArray(payload.routes)) state.routes = mergeByKeys(state.routes, payload.routes, ['id']);
                if (Array.isArray(payload.companies)) state.companies = mergeByKeys(state.companies, payload.companies, ['id']);
                if (Array.isArray(payload.orders)) {
                    state.orders = mergeByKeys(state.orders, payload.orders, ['uuid', 'id', 'orderNo']);
                    // Never allow a stale browser snapshot to roll a processed/confirmed order back to Draft.
                    const orderRank = (status) => {
                        const s = String(status || "Draft").toLowerCase();
                        // Cancelled/Voided is terminal and must never be resurrected by a stale Draft.
                        if (["cancelled", "canceled", "voided", "void"].includes(s)) return 4;
                        if (s === "confirmed") return 3;
                        if (["processed", "billed"].includes(s)) return 2;
                        if (["draft", "unprocessed", "pending", "submitted"].includes(s)) return 1;
                        return 1;
                    };
                    const incomingOrders = Array.isArray(payload.orders) ? payload.orders : [];
                    state.orders.forEach(existing => {
                        const incoming = incomingOrders.find(x => (x.uuid && existing.uuid && x.uuid === existing.uuid) || (x.orderNo && existing.orderNo && x.orderNo === existing.orderNo));
                        if (!incoming) return;
                        if (orderRank(existing.status) > orderRank(incoming.status)) {
                            // Existing cloud lifecycle is newer; preserve it.
                            existing.stockDeducted = existing.stockDeducted || incoming.stockDeducted || false;
                        }
                    });
                }
                if (Array.isArray(payload.bills)) {
                    state.bills = mergeByKeys(state.bills, payload.bills, ['uuid', 'id', 'billNo']);
                    const billRank = (status) => {
                        const s = String(status || "Open").toLowerCase();
                        if (["cancelled", "canceled", "void", "returned"].includes(s)) return 0;
                        if (["open", "pending"].includes(s)) return 1;
                        if (["confirmed", "delivered"].includes(s)) return 2;
                        return 1;
                    };
                    const incomingBills = Array.isArray(payload.bills) ? payload.bills : [];
                    state.bills.forEach(existing => {
                        const incoming = incomingBills.find(x => (x.uuid && existing.uuid && x.uuid === existing.uuid) || (x.billNo && existing.billNo && x.billNo === existing.billNo));
                        if (!incoming) return;
                        if (billRank(existing.deliveryStatus) > billRank(incoming.deliveryStatus)) {
                            existing.stockDeducted = existing.stockDeducted || incoming.stockDeducted || false;
                            existing.salesRecorded = existing.salesRecorded || incoming.salesRecorded || false;
                        }
                    });
                }
                if (Array.isArray(payload.pickLists)) state.pickLists = mergeByKeys(state.pickLists, payload.pickLists, ['id', 'pickListNo']);
                if (Array.isArray(payload.focSchemes)) state.focSchemes = mergeByKeys(state.focSchemes, payload.focSchemes, ['id']);

                state.lastCloudMergeAt = new Date().toISOString();
                saveAppStateToStore(state);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    merged: true,
                    counts: {
                        shops: (state.shops || []).length,
                        orders: (state.orders || []).length,
                        bills: (state.bills || []).length,
                        pickLists: (state.pickLists || []).length
                    }
                }));
            } catch(e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: e.message }));
            }
        });
        return;
    }



    if (pathname === '/api/sync/morning-download' && req.method === 'GET') {
        const salesmanId = parsedUrl.query.salesmanId || "sales_01";
        const deviceId = parsedUrl.query.deviceId || "Mobile_Device";
        const state = getAppStateFromStore();

        const salesman = (state.salesmen || []).find(s => s.id === salesmanId) || { id: salesmanId, name: "Ijaz", routeId: "r_jhang" };
        const assignedRoute = (state.routes || []).find(r => r.id === salesman.routeId || r.salesman.toLowerCase() === salesman.name.toLowerCase()) || state.routes[0];
        
        const allShops = Array.isArray(state.shops) ? state.shops : [];
        const masterSkus = (state.skus && state.skus.length > 0) ? state.skus : DEFAULT_SKUS;

        let assignedShops = allShops;
        if (assignedRoute && assignedRoute.id) {
            const rShops = allShops.filter(s => s.routeId === assignedRoute.id);
            if (rShops.length > 0) assignedShops = rShops;
        }


        const sessionObj = {
            syncId: `ses_${SyncEngine.generateUUID()}`,
            salesmanId: salesman.id,
            salesmanName: salesman.name,
            deviceId: deviceId,
            direction: "PC → Mobile (Morning Sync)",
            recordsCount: assignedShops.length + masterSkus.length,
            status: "Completed",
            createdAt: new Date().toISOString()
        };

        if (!state.syncSessions) state.syncSessions = [];
        state.syncSessions.unshift(sessionObj);
        saveAppStateToStore(state);

        const salesmanObj = (state.salesmen || []).find(s => s.id === salesmanId) || { id: salesmanId, name: "Salesman" };
        const routeObj = (state.routes || []).find(r => r.id === salesmanObj.routeId);

        let mtdGrams = 0;
        let mtdLaysGrams = 0;
        let mtdHashGrams = 0;
        let overallDistGrams = 0;
        let overallDistLaysGrams = 0;
        let overallDistHashGrams = 0;
        const now = new Date();
        const currentMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        (state.bills || []).forEach(b => {
            if (b.salesRecorded) {
                const billDate = b.billDate || b.date || "";
                const isMySalesman = (b.salesmanId === salesmanId || (b.salesman && b.salesman.toLowerCase() === salesmanId.toLowerCase()));
                if (billDate.startsWith(currentMonthStr)) {
                    (b.items || []).forEach(item => {
                        const sku = (state.skus || []).find(s => s.code === item.code) || {};
                        const brandStr = (sku.brand || item.brand || "").toLowerCase();
                        const compIdStr = (sku.companyId || item.companyId || "").toLowerCase();
                        const grams = sku.grams || item.grams || 0;
                        const pack = sku.pack || item.pack || 1;
                        const totalPacks = ((item.cartons || 0) * pack) + (item.units || 0);
                        const weight = (totalPacks * grams);

                        overallDistGrams += weight;
                        if (brandStr.includes("hash") || compIdStr === "hash") {
                            overallDistHashGrams += weight;
                        } else {
                            overallDistLaysGrams += weight;
                        }

                        if (isMySalesman) {
                            mtdGrams += weight;
                            if (brandStr.includes("hash") || compIdStr === "hash") {
                                mtdHashGrams += weight;
                            } else {
                                mtdLaysGrams += weight;
                            }
                        }
                    });
                }
            }
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            success: true,
            session: sessionObj,
            shops: allShops,
            skus: masterSkus,
            salesmen: state.salesmen || [],
            routes: state.routes || [],
            companies: state.companies || [],
            assignedSalesman: {
                id: salesmanObj.id,
                name: salesmanObj.name,
                phone: salesmanObj.phone || "",
                pin: salesmanObj.pin || "1234",
                routeId: salesmanObj.routeId || "",
                routeName: routeObj ? routeObj.name : "Assigned Route",
                mtdSalesKg: mtdGrams / 1000.0,
                mtdLaysKg: mtdLaysGrams / 1000.0,
                mtdHashKg: mtdHashGrams / 1000.0,
                overallDistMtdKg: overallDistGrams / 1000.0,
                overallDistLaysKg: overallDistLaysGrams / 1000.0,
                overallDistHashKg: overallDistHashGrams / 1000.0
            },
            serverOrders: state.orders || [],
            serverBills: state.bills || [],
            focSchemes: state.focSchemes || [],
            promotions: [
                { id: "p1", title: "Lays Buy 10 Ctns Get 1 Ctn Free", code: "LAYS_PROMO" }
            ],
            lastSyncTime: sessionObj.createdAt
        }));

        return;
    }

    if (pathname === '/api/sync/evening-upload' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const payload = JSON.parse(body);
                const salesmanId = payload.salesmanId || "sales_01";
                const deviceId = payload.deviceId || "Mobile_Device";
                const incomingShops = payload.shops || [];
                const incomingOrders = payload.orders || [];
                const incomingStockTxs = payload.stockTransactions || [];

                const state = getAppStateFromStore();
                const backupFile = createAutoBackup(state);

                let newOrdersAdded = 0;
                let stockTxsApplied = 0;
                let newShopsAdded = 0;

                if (!state.shops) state.shops = [];
                if (!state.orders) state.orders = [];
                if (!state.skus) state.skus = [];
                if (!state.bills) state.bills = [];
                if (!state.syncTransactions) state.syncTransactions = [];
                if (!state.stockTransactions) state.stockTransactions = [];

                // Merge incoming mobile shops
                incomingShops.forEach(shop => {
                    const exists = (state.shops || []).some(s => s.id === shop.id || (shop.name && s.name.toLowerCase() === shop.name.toLowerCase()));
                    if (!exists) {
                        state.shops.unshift(shop);
                        newShopsAdded++;
                    }
                });

                incomingStockTxs.forEach(tx => {
                    const existingTx = state.stockTransactions.find(t => t.uuid === tx.uuid);
                    if (!existingTx) {
                        state.stockTransactions.push(tx);
                        stockTxsApplied++;

                        const sku = (state.skus || []).find(s => String(s.code).trim() === String(tx.skuCode).trim());
                        if (sku) {
                            const pack = sku.pack || 12;
                            const reqUnits = ((tx.cartonsDelta || 0) * pack) + (tx.unitsDelta || 0);
                            const currentUnits = ((sku.stockCartons || 0) * pack) + (sku.stockUnits || 0);
                            const remainingUnits = Math.max(0, currentUnits - reqUnits);
                            sku.stockCartons = Math.floor(remainingUnits / pack);
                            sku.stockUnits = remainingUnits % pack;
                        }
                    }
                });

                incomingOrders.forEach(ord => {
                    const existingOrder = (state.orders || []).find(o => {
                        if (ord.uuid && o.uuid && o.uuid === ord.uuid) return true;
                        if (o.orderNo && ord.orderNo && o.orderNo === ord.orderNo) {
                            if (o.shopId === ord.shopId && Math.abs((o.netAmount || 0) - (ord.netAmount || 0)) < 2) return true;
                        }
                        return false;
                    });

                    if (!existingOrder) {
                        let finalNo = ord.orderNo || `ORD-MOB-${Date.now()}`;
                        let counter = 1;
                        while ((state.orders || []).some(o => o.orderNo === finalNo)) {
                            finalNo = `${ord.orderNo}-${counter++}`;
                        }
                        ord.orderNo = finalNo;

                        let totalCtns = 0;
                        let totalUnits = 0;
                        if (ord.items && Array.isArray(ord.items)) {
                            ord.items.forEach(item => {
                                totalCtns += (item.cartons || 0);
                                totalUnits += (item.units || 0);
                            });
                        }

                        ord.totalCartons = totalCtns;
                        ord.totalUnits = totalUnits;
                        ord.date = ord.date || ord.orderDate || new Date().toISOString().split('T')[0];
                        ord.plannedDelivery = ord.plannedDelivery || ord.deliveryDate || ord.date;
                        ord.routeName = ord.routeName || ord.route || "Territory Beat";
                        ord.status = "Draft";
                        ord.deliveryStatus = "Pending";
                        ord.stockDeducted = false;

                        state.orders.unshift(ord);
                        newOrdersAdded++;
                    }
                });

                const sessionObj = {
                    syncId: `ses_${SyncEngine.generateUUID()}`,
                    salesmanId: salesmanId,
                    salesmanName: payload.salesmanName || "Salesman",
                    deviceId: deviceId,
                    direction: "Mobile → PC (Evening Sync)",
                    recordsCount: incomingOrders.length + incomingStockTxs.length + newShopsAdded,
                    status: "Completed",
                    createdAt: new Date().toISOString(),
                    backupFile: backupFile
                };

                if (!state.syncSessions) state.syncSessions = [];
                state.syncSessions.unshift(sessionObj);
                saveAppStateToStore(state);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    syncId: sessionObj.syncId,
                    backupFile: backupFile,
                    newOrdersAdded: newOrdersAdded,
                    newShopsAdded: newShopsAdded,

                    stockTxsApplied: stockTxsApplied,
                    updatedSkus: state.skus,
                    timestamp: new Date().toISOString()
                }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
        return;
    }

    if (pathname === '/api/sync/import-emergency-file' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const reqObj = JSON.parse(body);
                const syncFileString = reqObj.fileContent;
                const unpacked = SyncEngine.unpackSyncPayload(syncFileString);

                const state = getAppStateFromStore();
                const backupFile = createAutoBackup(state);

                const salesmanId = unpacked.header.salesmanId;
                const incomingTxs = unpacked.transactions || [];

                let appliedCount = 0;
                if (!state.orders) state.orders = [];
                if (!state.stockTransactions) state.stockTransactions = [];
                if (!state.skus) state.skus = [];
                if (!state.shops) state.shops = [];

                incomingTxs.forEach(tx => {
                    if (tx.type === "ORDER") {
                        const ord = tx.data;
                        const existing = state.orders.find(o => o.orderNo === ord.orderNo || (ord.uuid && o.uuid === ord.uuid));
                        if (!existing) {
                            state.orders.unshift(ord);
                            appliedCount++;
                        }
                    } else if (tx.type === "STOCK_TRANSACTION") {
                        const stk = tx.data;
                        const existing = state.stockTransactions.find(s => s.uuid === stk.uuid);
                        if (!existing) {
                            state.stockTransactions.push(stk);
                            const sku = state.skus.find(s => s.code === stk.skuCode);
                            if (sku) {
                                sku.stockCartons = Math.max(0, (sku.stockCartons || 0) + (stk.cartonsDelta || 0));
                                sku.stockUnits = Math.max(0, (sku.stockUnits || 0) + (stk.unitsDelta || 0));
                            }
                            appliedCount++;
                        }
                    }
                });

                const returnSyncString = SyncEngine.packSyncPayload(salesmanId, unpacked.header.salesmanName, "PC_SERVER", "EMERGENCY_RETURN_EXPORT", [], {
                    skus: state.skus,
                    shops: state.shops,
                    timestamp: new Date().toISOString()
                });

                const sessionObj = {
                    syncId: unpacked.header.sessionId,
                    salesmanId: salesmanId,
                    salesmanName: unpacked.header.salesmanName,
                    deviceId: unpacked.header.deviceId,
                    direction: "Emergency File Import",
                    recordsCount: appliedCount,
                    status: "Completed",
                    createdAt: new Date().toISOString(),
                    backupFile: backupFile
                };
                if (!state.syncSessions) state.syncSessions = [];
                state.syncSessions.unshift(sessionObj);
                saveAppStateToStore(state);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    appliedRecords: appliedCount,
                    backupFile: backupFile,
                    returnSyncString: returnSyncString
                }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "Endpoint not found" }));
}

PORTS.forEach(port => {
    try {
        const srv = http.createServer(handleHttpRequest);
        srv.listen(port, '0.0.0.0', () => {
            console.log(`🚀 SYNC SERVER RUNNING ON PORT ${port}`);
        });
    } catch (e) {}
});
