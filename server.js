require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;

//cors
app.use(cors());

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connecting to mongoose
mongoose.connect(process.env.DATABASE_URL, () => {
  console.log(`connected to MongoDB 📀`);
});

//connecting to routes

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} 🚀`);
});
