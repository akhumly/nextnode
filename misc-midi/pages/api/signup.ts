// pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

sqlite3.verbose();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    const db = new sqlite3.Database('./signups.db');
    db.run('INSERT INTO signups (name, email) VALUES (?, ?)', [name, email], function (err) {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json({ message: 'Sign-up successful' });
    });

    db.close();
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}