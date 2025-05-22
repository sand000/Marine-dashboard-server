const express = require("express");
const shipDetails = require("../controllers/shipcontroller");
const router = express.Router();

router.get("/ships/:name", shipDetails);

module.exports = router;
