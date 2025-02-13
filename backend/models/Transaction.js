const db = require("../config/db.js");

// Create a new transaction
const createTransaction = (user_id, type, amount, callback) => {
  db.query(
    "INSERT INTO Transactions (user_id, type, amount) VALUES (?, ?, ?)",
    [user_id, type, amount],
    callback
  );
};

// Get all transactions of a user
const getUserTransactions = (user_id, callback) => {
  db.query("SELECT * FROM Transactions WHERE user_id = ?", [user_id], callback);
};

module.exports = { createTransaction, getUserTransactions };
