const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db;
// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST, // Clever Cloud MySQL Host
//   user: process.env.DB_USER, // Clever Cloud MySQL User
//   password: process.env.DB_PASSWORD, // Clever Cloud MySQL Password
//   database: process.env.DB_NAME, // Clever Cloud MySQL Database Name
//   port: process.env.DB_PORT,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// connection.connect((err) => {
//   if (err) {
//     console.error(" MySQL Connection Failed:", err);
//     return;
//   }
//   console.log(" Connected to Clever");
// });

// module.exports = connection;
