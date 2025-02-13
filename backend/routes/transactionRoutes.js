const express = require("express");
const {
  deposit,
  withdraw,
  transactions,
} = require("../controllers/transactionController");
const authMiddleware = require("../middleware/authMiddleware");
const { getBalance } = require("../controllers/userController");

const router = express.Router();

router.post("/deposit", deposit);
router.post("/withdraw", withdraw);
router.post("/history", transactions);
router.post("/balance", getBalance);

module.exports = router; // ✅ Use CommonJS export
