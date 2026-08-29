const path = require('path');
const fs = require('fs');

class DatabaseManager {
    constructor(baseDir = __dirname, logger = null) {
        this.baseDir = path.resolve(baseDir);
        this.dbDir = path.join(this.baseDir, 'Database');
        this.dbPath = path.join(this.dbDir, 'ERP.db');
        this.jsonFallbackPath = path.join(this.dbDir, 'ERP_fallback.json');
        this.logger = logger;
        this.db = null;
        this.isSqliteAvailable = false;
        this.init();
    }

    ensureDirs() {
        if (!fs.existsSync(this.dbDir)) {
            fs.mkdirSync(this.dbDir, { recursive: true });
        }
        const subDirs = ['Backups', 'Logs', 'Reports', 'Exports', 'Imports', 'Settings', 'Assets', 'Temp', 'Updates'];
        subDirs.forEach(sub => {
            const dir = path.join(this.baseDir, sub);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        });
    }

    init() {
        this.ensureDirs();
        try {
            const sqlite3 = require('sqlite3').verbose();
            this.db = new sqlite3.Database(this.dbPath);
            this.isSqliteAvailable = true;

            this.db.serialize(() => {
                this.db.run("PRAGMA journal_mode = WAL;");
                this.db.run("PRAGMA foreign_keys = ON;");
                this.createTables();
            });

            if (this.logger) this.logger.info(`SQLite Database initialized at ${this.dbPath}`);
        } catch (err) {
            this.isSqliteAvailable = false;
            if (this.logger) this.logger.warn(`SQLite native module unavailable, using filesystem JSON storage mode: ${err.message}`);
            this.initJsonFallback();
        }
    }

    initJsonFallback() {
        if (!fs.existsSync(this.jsonFallbackPath)) {
            const initialData = {
                companies: [],
                skus: [],
                routes: [],
                shops: [],
                bills: [],
                orders: [],
                pickLists: [],
                orderLogs: [],
                settings: {}
            };
            fs.writeFileSync(this.jsonFallbackPath, JSON.stringify(initialData, null, 2), 'utf8');
        }
    }

    readJsonStore() {
        try {
            this.initJsonFallback();
            const raw = fs.readFileSync(this.jsonFallbackPath, 'utf8');
            return JSON.parse(raw);
        } catch (e) {
            return { companies: [], skus: [], routes: [], shops: [], bills: [], orders: [], pickLists: [], orderLogs: [], settings: {} };
        }
    }

    writeJsonStore(data) {
        try {
            fs.writeFileSync(this.jsonFallbackPath, JSON.stringify(data, null, 2), 'utf8');
        } catch (e) {
            if (this.logger) this.logger.error('Failed writing JSON store fallback', e);
        }
    }

    createTables() {
        if (!this.db) return;

        const tablesDDL = [
            `CREATE TABLE IF NOT EXISTS companies (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                tax_mode TEXT,
                description TEXT,
                is_system INTEGER DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );`,
            `CREATE TABLE IF NOT EXISTS skus (
                code TEXT PRIMARY KEY,
                company_id TEXT,
                category_type TEXT,
                brand TEXT,
                desc TEXT,
                price_point REAL,
                grams REAL,
                pack INTEGER,
                tp_rate REAL,
                mrp REAL,
                stock_cartons INTEGER DEFAULT 0,
                stock_units INTEGER DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );`,
            `CREATE TABLE IF NOT EXISTS routes (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                salesman TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );`,
            `CREATE TABLE IF NOT EXISTS shops (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                route_id TEXT,
                customer_name TEXT,
                phone TEXT,
                visit_day TEXT,
                tax_mode TEXT,
                default_discount_pct REAL DEFAULT 4,
                credit_balance REAL DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );`,
            `CREATE TABLE IF NOT EXISTS bills (
                bill_no TEXT PRIMARY KEY,
                company_id TEXT,
                shop_id TEXT,
                shop_name TEXT,
                route_name TEXT,
                salesman TEXT,
                date TEXT,
                delivery_date TEXT,
                tax_mode TEXT,
                global_disc_pct REAL,
                delivery_status TEXT,
                sales_recorded INTEGER DEFAULT 0,
                is_void INTEGER DEFAULT 0,
                payment_type TEXT,
                total_cartons INTEGER,
                total_units INTEGER,
                total_weight_kg REAL,
                total_basic REAL,
                total_disc REAL,
                total_adwh REAL,
                net_amount REAL,
                order_no TEXT,
                pick_list_no TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );`,
            `CREATE TABLE IF NOT EXISTS bill_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                bill_no TEXT,
                code TEXT,
                desc TEXT,
                brand TEXT,
                category_type TEXT,
                company_id TEXT,
                cartons INTEGER,
                units INTEGER,
                pack INTEGER,
                tp_rate REAL,
                basic_amount REAL,
                disc_amount REAL,
                amount REAL,
                weight_kg REAL,
                total_packets INTEGER,
                FOREIGN KEY(bill_no) REFERENCES bills(bill_no) ON DELETE CASCADE
            );`,
            `CREATE TABLE IF NOT EXISTS orders (
                order_no TEXT PRIMARY KEY,
                company_id TEXT,
                shop_id TEXT,
                shop_name TEXT,
                route_name TEXT,
                salesman TEXT,
                date TEXT,
                status TEXT,
                net_amount REAL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );`,
            `CREATE TABLE IF NOT EXISTS pick_lists (
                pick_list_no TEXT PRIMARY KEY,
                date TEXT,
                orders_count INTEGER,
                bill_nos_json TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );`,
            `CREATE TABLE IF NOT EXISTS order_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                action TEXT,
                user_name TEXT,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                details TEXT
            );`,
            `CREATE TABLE IF NOT EXISTS settings (
                key TEXT PRIMARY KEY,
                value_json TEXT,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );`
        ];

        tablesDDL.forEach(sql => {
            this.db.run(sql, (err) => {
                if (err && this.logger) this.logger.error(`Error creating table SQL: ${sql}`, err);
            });
        });
    }

    all(query, params = []) {
        return new Promise((resolve, reject) => {
            if (!this.isSqliteAvailable) return resolve([]);
            this.db.all(query, params, (err, rows) => {
                if (err) reject(err);
                else resolve(rows || []);
            });
        });
    }

    run(query, params = []) {
        return new Promise((resolve, reject) => {
            if (!this.isSqliteAvailable) return resolve({ lastID: 0, changes: 0 });
            this.db.run(query, params, function(err) {
                if (err) reject(err);
                else resolve({ lastID: this.lastID, changes: this.changes });
            });
        });
    }
}

module.exports = DatabaseManager;
