const express = require('express');
const router = express.Router();
const {loginUser,signUpUser} = require('../../controllers/authController');

router.post('/signup',signUpUser);
router.post('/login',loginUser );
module.exports = router;
