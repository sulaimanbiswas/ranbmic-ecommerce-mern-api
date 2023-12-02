const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const db = mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = dbConnect;
