import { Database } from 'sqlite3';

const db = new Database('./signups.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS signups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  )`);
});

db.close();