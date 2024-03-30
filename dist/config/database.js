"use strict";// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  dialect: 'postgres', // Especifique o dialeto do banco de dados aqui
  url: process.env.DATABASE_URL,
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
  timezone: 'America/Sao_Paulo',
};
