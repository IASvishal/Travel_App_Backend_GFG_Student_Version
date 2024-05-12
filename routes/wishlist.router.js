const express = require('express');

const verifyUser = require("../middleware/verifyuser")

const wishlistController = require("../controllers/wishlistContoller")
const {createWishlistHandler, deleteWishlistHandler, getWishlistHandler} = wishlistController;
const router = express.Router();


router.route("/")
    .post(verifyUser, createWishlistHandler)

router.route("/:id")
    .delete(verifyUser, deleteWishlistHandler)

router.route("/")
    .get(verifyUser, getWishlistHandler)

module.exports = router;