const express = require("express");
const { getUserProfile, getBalance } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", getUserProfile);
router.post("/balance", getBalance);

module.exports = router;
