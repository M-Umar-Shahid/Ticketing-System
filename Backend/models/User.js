const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Customer', 'Agent'], default: 'Customer' },
  city: { type: String, required: false }, // Optional city field
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


const User = mongoose.model('User', userSchema);
module.exports = User;
