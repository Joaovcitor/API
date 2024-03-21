"use strict";// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const pg = require('pg');

module.exports = {
  dialect: 'postgres',
  url: process.env.DATABASE_URL,
  // password: process.env.PASSWORD,
  // username: process.env.USERNAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialectModule: pg,
  timezone: 'America/Sao_Paulo',
};
