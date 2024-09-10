const express = require('express');
const router = express.Router();
const { sendOTP } = require('../../controllers/otpController');

router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    await sendOTP(email);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
});

module.exports = router;
