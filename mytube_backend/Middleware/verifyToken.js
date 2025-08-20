// middlewares/verifyToken.js
import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  // Token is usually sent as: Authorization: Bearer <token>
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token,"secretkey"); 
    req.userId = decoded.id; 
    next(); // ✅ 
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}