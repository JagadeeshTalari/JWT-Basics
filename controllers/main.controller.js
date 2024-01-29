// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

const jwt = require("jsonwebtoken");

const asyncWrapper = require("../middleware/asyncWrapper.middleware");
const { BadRequest, CustomAPIErrorHandler } = require("../errors");

// setup authentication so only the request with JWT can access the dashboard

const login = asyncWrapper(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new BadRequest(`Please provide email & password`));
  }
  const id = new Date().getDate();

  // try to keep payload small, better experience for user

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  //mongoose validation
  //JOI
  //controller validations (check in the controller)
  // res.send("Fake Login/Register/Signup");
  res.status(200).json({ msg: `user Created`, token: token });
});

const dashboard = asyncWrapper(async (req, res, next) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Here is your authorized data, Your lucky number is ${luckyNumber}`,
  });
});

module.exports = { login, dashboard };
