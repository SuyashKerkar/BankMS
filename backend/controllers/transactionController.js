const {
  createTransaction,
  getUserTransactions,
} = require("../models/Transaction.js");
const { updateUserBalance, getUserBalance } = require("../models/User.js");

exports.deposit = (req, res) => {
  const { amount, user_id } = req.body;
  // const user_id = req.user.id;

  createTransaction(user_id, "deposit", amount, (err) => {
    if (err) return res.status(500).json({ message: "Deposit failed" });

    updateUserBalance(user_id, amount, (err) => {
      if (err)
        return res.status(500).json({ message: "Failed to update balance" });
      res.json({ message: "Deposit successful" });
    });
  });
};

exports.withdraw = (req, res) => {
  const { user_id, amount } = req.body;

  getUserBalance(user_id, (err, result) => {
    if (err || result.balance < amount)
      return res.status(400).json({ message: "Insufficient balance" });

    createTransaction(user_id, "withdrawal", amount, (err) => {
      if (err) return res.status(500).json({ message: "Withdrawal failed" });

      updateUserBalance(user_id, -amount, (err) => {
        if (err)
          return res.status(500).json({ message: "Failed to update balance" });
        res.json({ message: "Withdrawal successful" });
      });
    });
  });
};

exports.transactions = (req, res) => {
  const { user_id } = req.body;
  getUserTransactions(user_id, (err, transactions) => {
    if (err)
      return res.status(500).json({ message: "Error fetching transactions" });
    res.json({ transactions });
  });
};

exports.getBalance = (req, res) => {
  const { user_id } = req.body;
  getUserBalance(user_id, (err, balance) => {
    if (err) return res.status(500).json({ message: "Error fetching balance" });
    res.json({ balance });
  });
};
