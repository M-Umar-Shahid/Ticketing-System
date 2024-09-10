const express = require('express');
const router = express.Router();
const verifyOTPController = require('../../controllers/otpVerificationController');

router.post('/verify-otp', verifyOTPController);

module.exports = router;
