const jwt = require('jsonwebtoken');
const AuthorizationError = require('../errors/AuthorizationError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  const secret = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';
  if (!token) {
    return next(new AuthorizationError('Ошибка авторизации'));
  }

  let payload;
  try {
    payload = jwt.verify(token, secret);
  } catch (err) {
    return next(new AuthorizationError('Необходима авторизация'));
  }
  req.user = payload;

  return next();
};
