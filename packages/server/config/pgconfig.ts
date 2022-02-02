import 'dotenv/config'
require('dotenv').config()

const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

const pool = new Pool({
  connectionString: connectionString,
  ssl: isProduction,
})

export default pool;