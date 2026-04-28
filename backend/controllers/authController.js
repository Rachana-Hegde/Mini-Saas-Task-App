const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');

// SIGNUP
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    // Check if user already exists
    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await db.User.create({
      email,
      password: hashedPassword
    });

    res.status(201).json({
      id: user.id,
      email: user.email
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Signup failed" });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send token
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Login failed" });
  }
};