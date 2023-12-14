const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection Successful to database");
  } catch (error) {
    console.log("Failed to connect to database");
  }
};

module.exports = connectDB;
