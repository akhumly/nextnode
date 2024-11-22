"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = require("sqlite3");
var db = new sqlite3_1.Database('./signups.db');
db.serialize(function () {
    db.all('SELECT * FROM signups', function (err, rows) {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(rows);
    });
});
db.close();
