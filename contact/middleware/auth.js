const jwt = require('jsonwebtoken');
const config = require('config');

// next means just move on to the next piece of middleware
module.exports = function (req, res, next) {
  // Get token header
  const token = req.header('x-auth-token');

  // check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No tokenm authorization denied' })
  }

  // if there is toke we verify
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' })
  }
}

