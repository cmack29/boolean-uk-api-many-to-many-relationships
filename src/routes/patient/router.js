const express = require("express");
const router = express.Router()

const { addPatient } = require("./controller")

router.post("/", addPatient)

module.exports = router;