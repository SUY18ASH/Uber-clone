const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post('/register', [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname").isLength({ min : 3}).withMessage("First name must contain atleast 3 characters"),
    body("password").isLength({ min : 6}).withMessage("Password must contain atleast 6 characters")
], userController.registerUser
);

router.post('/login', [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min : 6}).withMessage("Password must contain atleast 6 characters")
], userController.loginUser
);

module.exports = router;