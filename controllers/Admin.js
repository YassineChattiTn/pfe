const Admin = require("../models/Admin");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**add an admin */

const registerAdmin = async (req, res) => {
  try {
    data = req.body;
    admin = new Admin(data);
    salt = bcrypt.genSaltSync(10);
    cryptedPassword = bcrypt.hashSync(data.password, salt);
    admin.password = cryptedPassword;
    savedAdmin = await admin.save();
    res.status(200).send(savedAdmin);
  } catch (error) {
    console.log(error);
    console.log("error while creating an admin");
    res.status(400).send(error);
  }
};

module.exports = {
  registerAdmin,
};
