const db = require("../config/db.js");

// Find user by email
const findUserByEmail = (email, callback) => {
  db.query("SELECT * FROM Users WHERE email = ?", [email], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Find user by ID
const findUserById = (id, callback) => {
  db.query("SELECT * FROM Users WHERE id = ?", [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Create new user
const createUser = (name, email, hashedPassword, role, callback) => {
  db.query(
    "INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, role],
    callback
  );
};

// Update user balance
const updateUserBalance = (id, amount, callback) => {
  db.query(
    `INSERT INTO accounts (user_id, balance) VALUES (?, ?) 
     ON DUPLICATE KEY UPDATE balance = balance + ?`,
    [id, amount, amount],
    callback
  );
};

// Get user balance
const getUserBalance = (id, callback) => {
  db.query(
    "SELECT balance FROM accounts WHERE user_id = ?",
    [id],
    (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    }
  );
};

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
  updateUserBalance,
  getUserBalance,
};
