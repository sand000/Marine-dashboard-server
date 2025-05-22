const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  const { name, age, email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(200).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser = new User({ name, age, email, password: hashedPassword });
    await newUser.save();
    console.log("user", newUser);

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log("errorr", error.message);
    res.status(201).json({ message: "User registration failed", error: error.message });
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
    const jwtToken = jwt.sign({ matchedUser }, JWT_SECRET, { expiresIn: "7d" });
    if (!jwtToken) {
      res.status(400).json({ message: "Error generating token" });
    }
    res.status(200).json({
      message: "User Logged in successfully",
      data: {
        token: jwtToken,
        user: {
          name: "Sandhya",
          email: "sandhya@example.com",
        },
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Invalid credentials" });
  }
};
module.exports = { registerUser, login };
