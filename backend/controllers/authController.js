const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const crypto = require("crypto");
const { use } = require("../routes/authRoutes");

// REGISTER USER
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("req.body", req.body);
    // Check if user exists
    const [existingUser] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Insert new user
    await db
      .promise()
      .query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
        name,
        email,
        password,
      ]);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// LOGIN USER
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fetch user from database
    const [users] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    if (users.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }
    let token = users[0].token;

    if (users[0].token == null) {
      token = jwt.sign(
        { email }, // Payload (you can include user ID, role, etc.)
        process.env.JWT_SECRET, // Secret key from .env
        { expiresIn: process.env.JWT_EXPIRES_IN } // Expiry time (e.g., 1h, 7d)
      );

      await db
        .promise()
        .query("UPDATE users SET token = ? WHERE email = ?", [token, email]);
    }

    if (users[0].password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res
      .status(200)
      .json({ message: "Login successful", token, user: users[0] });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
