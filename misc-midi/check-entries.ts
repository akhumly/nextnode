import { Database } from 'sqlite3';

const db = new Database('./signups.db');

db.serialize(() => {
  db.all('SELECT * FROM signups', (err: Error | null, rows: Array<{ [key: string]: string | number | boolean }>) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log(rows);
  });
});

db.close();