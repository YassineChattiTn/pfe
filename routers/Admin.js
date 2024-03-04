const express = require("express");
const router = express.Router();

const isAuth = require("../middleware/isAuth");

const { registerAdmin } = require("../controllers/Admin");

/**Admin registration */

router.post("/addAdmin", isAuth, registerAdmin);

module.exports = router;
