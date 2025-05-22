const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

const dbConnect = () => {
  try {
    const db = mongoose.connect(MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    throw new Error("Error in connecting DB");
  }
};
module.exports = dbConnect;
