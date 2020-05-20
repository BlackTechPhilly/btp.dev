const express = require("express");
const { sendMsg } = require("../controllers/contactUs-controller");

const router = express.Router();

router.post("/sendMsg", sendMsg);

module.exports = router;
