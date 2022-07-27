const express = require("express");
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const app = express();

app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);

app.listen(
  process.env.PORT,
  console.log(`app is runnig on port ${process.env.PORT}`)
);
