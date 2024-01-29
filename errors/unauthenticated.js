const CustomAPIErrorHandler = require("./customAPIErrorHandler");

class UnauthenticatedError extends CustomAPIErrorHandler {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnauthenticatedError;
