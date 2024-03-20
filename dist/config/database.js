// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  url: process.env.DATA_URL,
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
