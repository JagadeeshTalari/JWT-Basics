// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

const CustomAPIErrorHandler = require("../errors/customAPIErrorHandler");
const asyncWrapper = require("../middleware/asyncWrapper.middleware");

// setup authentication so only the request with JWT can access the dashboard

const login = asyncWrapper(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(
      new CustomAPIErrorHandler(`Please provide email & password`, 400)
    );
  }
  //mongoose validation
  //JOI
  //controller validations (check in the controller)
  res.send("Fake Login/Register/Signup");
});

const dashboard = asyncWrapper(async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello Jagadeesh`,
    secret: `Here is your authorized data, Your lucky number is ${luckyNumber}`,
  });
});

module.exports = { login, dashboard };
