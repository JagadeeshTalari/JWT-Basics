const jwt = require("jsonwebtoken");
const { CustomAPIErrorHandler, UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  //   console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new UnauthenticatedError(`No token provided`)); //authorization error
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    next(new UnauthenticatedError(`Not authorized to access the route`));
  }
};

module.exports = authenticationMiddleware;
