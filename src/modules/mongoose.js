const mongoose = require("mongoose");
const users = require("../models/UserModel");

async function mongo() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.error("MONGOERROR:", error + "");
  }
}

module.exports = mongo;
