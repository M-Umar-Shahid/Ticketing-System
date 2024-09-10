const jwt = require('jsonwebtoken');

// Middleware to authenticate the token
const authMiddleware = (req, res, next) => {
  // Get the token from the header (usually in 'Authorization' header)
  const token = req.header('Authorization');

  // Check if no token is provided
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access Denied. No token provided.'
    });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // Split if it's in the format 'Bearer TOKEN'
    req.user = decoded; // Attach the user info to the request object
    next(); // Move on to the next middleware/route handler
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid token.'
    });
  }
};

module.exports = authMiddleware;
