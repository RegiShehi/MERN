const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  // const authHeader = req.headers.authorization;

  // if (authHeader) {
  //   const token = authHeader.split(' ')[1];

  //   try {
  //     const decoded = jwt.verify(token, config.get('jwtSecret'));

  //     req.user = decoded.user;
  //     next();
  //   } catch (error) {
  //     res.status(401).json({ msg: 'Token is not valid' });
  //   }
  // } else {
  //   return res.status(401).json({ msg: 'No token, authorization denied' });
  // }

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
