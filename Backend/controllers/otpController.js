const crypto = require('crypto');
const sendMail = require('../services/mailer');

const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
};

const sendOTP = async (email) => {
  const otp = generateOTP();
  
  // Store OTP in the database or cache (e.g., Redis) with an expiration time

  // Send OTP email
  const subject = 'Your OTP Code';
  const text = `Your OTP code is ${otp}`;
  await sendMail(email, subject, text);
  
  return otp;
};

module.exports = { sendOTP };
