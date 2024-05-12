const express = require('express');
const router = express.Router();

const singlehotelHandler = require("../controllers/singleHotelController");
///localhost:3500/api/hotels/123456789dbsic

router.route("/:id")
    .get(singlehotelHandler)

module.exports = router;