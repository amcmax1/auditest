import express from "express";
import 'dotenv/config'
import { pg_knex } from "../config"
require('dotenv').config()

//TODO: create db script for table initial creation or migrations
//TODO: create endpoint to store raw git hooks
//TODO: create validation layer for endpoints
//TODO: set up router
//TODO: set up pull request handler
//TODO: set up dockerfile for web app
//TODO: create client connection handlers 
//TODO: create data grid component on client

// Express module configuration
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())

// Base Level API V1 Endpoints
app.get('/actions', async (req, res) => {
  const result = await pg_knex
      .select()
      .from('git_actions')
  res.json({
      actions: result
  });
  console.log(result)
});

// Git WebHooks endpoint
app.post('/githooks', (req, res) => {
  // validate headers: action type, origin, repository
  // send payload to hooks handler to store raw webhook post payload with headers into git_hooks table
  const action = req.body.stringify
  // route to action specific handler
  res.status(200).json(action);
});

// Express server 
app.listen(process.env.SERVER_PORT);