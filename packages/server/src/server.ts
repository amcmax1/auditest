import express from "express";
import 'dotenv/config'
import pool from "../pgconfig";

require('dotenv').config()

const app = express();
app.use(express.json())

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