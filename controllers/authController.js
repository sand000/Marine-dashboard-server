  const User = require("../models/userSchema");
  const bcrypt = require("bcryptjs");
  const jwt = require("jsonwebtoken");
  const JWT_SECRET = process.env.JWT_SECRET;

  const registerUser = async (req, res) => {
    const { name, age, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res
          .status(409)
          .json({ success: false, message: "User already exists. Please login." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, age, email, password: hashedPassword });
      await newUser.save();

      return res.status(201).json({ success: true, message: "User created successfully" });
    } catch (error) {
      console.error("Registration error:", error.message);
      return res
        .status(500)
        .json({ success: false, message: "User registration failed", error: error.message });
    }
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const matchedUser = await User.findOne({ email });

      if (!matchedUser) {
        res.status(404).json({ message: "No user found" });
      }
      const isUserMatched = await bcrypt.compare(password, matchedUser.password);

      if (!isUserMatched) {
        res.status(404).json({ message: "Invalid Credentials" });
      }
      const jwtToken = jwt.sign({ id: matchedUser._id, email: matchedUser.email }, JWT_SECRET, {
        expiresIn: "7d",
      });
      if (!jwtToken) {
        res.status(400).json({ message: "Error generating token" });
      }
      res.status(200).json({
        message: "User Logged in successfully",
        data: {
          token: jwtToken,
          user: {
            name: matchedUser.name,
            email: matchedUser.email,
          },
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Invalid credentials" });
    }
  };
  module.exports = { registerUser, login };
