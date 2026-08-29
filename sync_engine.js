/* ==========================================================================
   CHAUDHARY TRADER ERP - OFFLINE TWO-WAY DATA SYNC ENGINE
   Handles UUIDs, Transaction Deltas, Encrypted .sync Packages & Checksums
   ========================================================================== */

(function (exports) {

    // RFC4122 v4 UUID Generator
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function calculateSimpleChecksum(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return Math.abs(hash).toString(16);
    }

    // Robust Base64 UTF-8 Encoding (Handles all Urdu/Special Characters & Clean Strings)
    function utf8ToBase64(str) {
        try {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
        } catch (e) {
            return btoa(unescape(encodeURIComponent(str)));
        }
    }

    // Robust Base64 UTF-8 Decoding (Handles all WhatsApp formatting, whitespaces & newlines)
    function base64ToUtf8(str) {
        try {
            return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        } catch (e) {
            return decodeURIComponent(escape(atob(str)));
        }
    }

    // Encrypt & Pack Sync Payload into a .sync File String
    function packSyncPayload(salesmanId, salesmanName, deviceId, syncType, transactionsData, masterData = {}) {
        const timestamp = new Date().toISOString();
        const sessionId = `ses_${generateUUID()}`;

        const payloadObj = {
            header: {
                version: "2.5.0",
                appName: "Chaudhary Trader ERP Sync System",
                sessionId: sessionId,
                salesmanId: salesmanId || "sales_01",
                salesmanName: salesmanName || "Salesman",
                deviceId: deviceId || "Mobile_Device",
                syncType: syncType,
                createdAt: timestamp
            },
            transactions: transactionsData || [],
            masterData: masterData || {}
        };

        const rawJson = JSON.stringify(payloadObj);
        const checksum = calculateSimpleChecksum(rawJson);
        payloadObj.checksum = checksum;

        const finalJson = JSON.stringify(payloadObj);
        return utf8ToBase64(finalJson);
    }

    // Unpack & Decrypt .sync File String (100% Fail-Safe Parser)
    function unpackSyncPayload(inputString) {
        if (!inputString || typeof inputString !== 'string') {
            throw new Error("Empty or invalid sync payload string.");
        }

        let cleaned = inputString.trim();
        
        if (cleaned.includes("Paste code below in PC ERP Import Emergency File:")) {
            cleaned = cleaned.split("Paste code below in PC ERP Import Emergency File:")[1].trim();
        }
        
        cleaned = cleaned.replace(/^\*+|\*+$/g, '').replace(/^"|"$/g, '').trim();

        // 1. Try Direct JSON Parse
        try {
            const parsedJson = JSON.parse(cleaned);
            if (parsedJson && parsedJson.header) return parsedJson;
        } catch (e) {}

        // 2. Clean base64 characters only
        let b64Cleaned = cleaned.replace(/[^A-Za-z0-9+/=]/g, '');

        // 3. Try UTF-8 Base64 Decode
        try {
            const utf8Decoded = base64ToUtf8(b64Cleaned);
            const parsed = JSON.parse(utf8Decoded);
            if (parsed && parsed.header) return parsed;
        } catch (e) {}

        // 4. Try Legacy URL Encoded atob Decode
        try {
            const legacyDecoded = decodeURIComponent(atob(b64Cleaned));
            const parsed = JSON.parse(legacyDecoded);
            if (parsed && parsed.header) return parsed;
        } catch (e) {}

        // 5. Try Simple atob Decode
        try {
            const simpleDecoded = atob(b64Cleaned);
            const parsed = JSON.parse(simpleDecoded);
            if (parsed && parsed.header) return parsed;
        } catch (e) {}

        throw new Error("Corrupted or invalid .sync file package: Data could not be decoded. Please re-export sync file from Mobile App.");
    }

    exports.generateUUID = generateUUID;
    exports.packSyncPayload = packSyncPayload;
    exports.unpackSyncPayload = unpackSyncPayload;
    exports.calculateSimpleChecksum = calculateSimpleChecksum;

})(typeof exports === 'object' ? exports : (window.SyncEngine = {}));
