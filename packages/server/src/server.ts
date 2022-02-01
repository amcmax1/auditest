import express from "express";
import 'dotenv/config'
import pool from "../pgconfig";
require('dotenv').config()

// Express module configuration
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())

// Express endpoints 
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

// Express server 
app.listen(process.env.SERVER_PORT);