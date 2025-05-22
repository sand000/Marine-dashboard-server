const express = require("express");
const shipDetails = require("../controllers/shipcontroller");
const authMiddleware = require("../middlewares/authMiddeware");
const router = express.Router();

router.get("/ships/:name", authMiddleware, shipDetails);

module.exports = router;
