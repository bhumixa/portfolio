const express = require("express");
const router = express.Router();

const catogiryRoutes = require("./category");

router.use('/category', catogiryRoutes);

module.exports = router;

