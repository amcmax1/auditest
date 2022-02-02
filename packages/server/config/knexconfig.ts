import 'dotenv/config'
require('dotenv').config()

const pg_knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE
    }
  });

  export default pg_knex;