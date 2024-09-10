const mongoose = require('mongoose');

// MongoDB connection URI (replace with your actual connection string)
const MONGO_URI = process.env.MONGODB_URL;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI,);
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
