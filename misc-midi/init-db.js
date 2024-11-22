"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = require("sqlite3");
var db = new sqlite3_1.Database('./signups.db');
db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS signups (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    email TEXT NOT NULL\n  )");
});
db.close();
