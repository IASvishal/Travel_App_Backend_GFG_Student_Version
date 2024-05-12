const express = require('express');

const signupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");

const router = express.Router();

router.route("/register") //localhost:3500/api/auth/register
    .post(signupHandler)

    router.route("/login") //localhost:3500/api/auth/login
        .post(loginHandler)
                
    module.exports = router;
