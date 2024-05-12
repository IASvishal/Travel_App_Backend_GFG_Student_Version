const express = require('express');
const router = express.Router();

const categoryHandler = require("../controllers/categoryController");

router.route("/")    //localhost:3500/api/categories
    .get(categoryHandler)

module.exports = router;