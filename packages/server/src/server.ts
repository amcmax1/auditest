import express from "express";
import 'dotenv/config'

require('dotenv').config()

const { Pool } = require('pg')

const app = express();
app.use(express.json())

const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

const pool = new Pool({
  connectionString: connectionString,
  ssl: isProduction,
})

app.get('/actions', (req, res) => {
  pool.query('SELECT author FROM git_actions', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

app.post('/githooks', (req, res) => {
  const action = req.body.stringify
  res.json(action);
});

app.listen(3333);