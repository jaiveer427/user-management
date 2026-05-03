const dotenc = require('dotenv').config();
const mysql = require('mysql2');

//console.log(process.env.DB_USER)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "userdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
//console.log(pool);

module.exports = pool.promise();
