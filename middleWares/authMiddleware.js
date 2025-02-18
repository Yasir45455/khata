<<<<<<< HEAD
const jwt = require('jsonwebtoken');

const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); 

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  try {
    // Verify the token
    const decoded = jwt.verify(token, "12312312312312312",);
    req.adminId = decoded.adminId; 
    next(); 
  } catch (error) {
    return res.status(400).json({ error: 'Invalid or expired token.' });
  }
};

module.exports = authenticateAdmin;
=======
const jwt = require('jsonwebtoken');

const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); 

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  try {
    // Verify the token
    const decoded = jwt.verify(token, "12312312312312312",);
    req.adminId = decoded.adminId; 
    next(); 
  } catch (error) {
    return res.status(400).json({ error: 'Invalid or expired token.' });
  }
};

module.exports = authenticateAdmin;
>>>>>>> 6ed50995adf726b3e3cbc6b9367ce53028c4dee4
