const { findUserById, getUserBalance } = require("../models/User.js");

exports.getUserProfile = (req, res) => {
  findUserById(req.user.id, (err, user) => {
    if (err) return res.status(500).json({ message: "Error fetching user" });
    res.json(user);
  });
};

exports.getBalance = (req, res) => {
  const { user_id } = req.body;
  getUserBalance(user_id, (err, balance) => {
    if (err) return res.status(500).json({ message: "Error fetching balance" });
    res.json(balance);
    console.log(balance);
  });
};
