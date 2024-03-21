// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
// const pg = require('pg');

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: 'postgres://default:2Krw1kndQGNv@ep-aged-moon-a4d47ga0-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
});

pool.connect((err) => {
  if (err) throw err;
  console.log('FUNCIONOU ESSA BUCETA');
});
