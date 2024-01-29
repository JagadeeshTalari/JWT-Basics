const express = require("express");
const router = express.Router();

//controllers
const { login, dashboard } = require("../controllers/main.controller");

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);

module.exports = router;
