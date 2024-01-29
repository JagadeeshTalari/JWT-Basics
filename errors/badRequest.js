const CustomAPIErrorHandler = require("./customAPIErrorHandler");

class BadRequest extends CustomAPIErrorHandler {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequest;
