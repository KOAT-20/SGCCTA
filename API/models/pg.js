const nameApp = 'pg';
const pg = require('pg');
const config = require('../config/config.js');
const connectionString = config.postgres;
const pool = new pg.Pool(connectionString);
const debug = require('debug')(nameApp);

const query = (Pgquery, callback) => {
  const start = Date.now();
  return pool.query(Pgquery, (err, res) => {
    const duration = Date.now() - start;
    debug('executed query', { Pgquery, duration });
    callback(err, res);
  });
};

module.exports = {
  query,
};
