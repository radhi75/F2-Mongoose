const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
