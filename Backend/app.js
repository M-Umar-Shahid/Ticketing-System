require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Import cors

const connectDB = require("./config/connection");
const mainRouter = require('./routes/mainRouter');
const authRouter = require("./routes/authRoutes/authRouter")
const adminRouter = require("./routes/adminRoutes/adminRouter")
const uploadRouter = require("./routes/servicesRoutes/uploadRouter")
const otpVerificationRoutes = require("./routes/servicesRoutes/otpVerificationRoutes")
const otpRoutes = require("./routes/servicesRoutes/otpRoutes")

const app = express();

// Connect to the database
connectDB();

// CORS configuration
app.use(cors()); // Enable CORS for all origins

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', mainRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/upload', uploadRouter);
app.use('/otp', otpRoutes);
app.use('/otp-verification', otpVerificationRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Get the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
