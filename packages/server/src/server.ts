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

console.log("Server restarted")

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
app.post('/git_hooks', async (req, res) => {
  // validation handler: validate user-agent, repository_id, host_source
  const body_data = req.body
  const headers = req.headers

  const git_hook = await pg_knex('git_hooks').insert(
    {
      headers: headers,
      raw_data: {"data": "data"}, //TODO: remove field
      body_data: body_data,
      sender_ip: headers["user-agent"]
    }
  );
  // route request body to action-specific handler: pull request, etc. 

  res.status(200).json("OK");
});

// Express server 
app.listen(process.env.SERVER_PORT);