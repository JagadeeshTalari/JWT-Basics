const jwt = require("jsonwebtoken");
const CustomAPIErrorHandler = require("../errors/customAPIErrorHandler");

const authenticationMiddleware = async (req, res, next) => {
  //   console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new CustomAPIErrorHandler(`No token provided`, 401)); //authorization error
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    next(new CustomAPIErrorHandler(`Not authorized to access the route`, 401));
  }
};

module.exports = authenticationMiddleware;
