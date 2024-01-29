const express = require("express");
const router = express.Router();

//controllers
const { login, dashboard } = require("../controllers/main.controller");
const authenticationMiddleware = require("../middleware/auth.middleware");

router.route("/dashboard").get(authenticationMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
