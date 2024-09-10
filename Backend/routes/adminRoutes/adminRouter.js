const express = require('express');
const router = express.Router();
const  {registerAgent}  = require('../../controllers/adminController');
const authMiddleware = require('../../middleware/authMiddleware');
const roleMiddleware = require('../../middleware/roleMiddleware');

// Only admins can access this route
router.post('/register-agent', authMiddleware, roleMiddleware('Admin'), registerAgent);

module.exports = router;
