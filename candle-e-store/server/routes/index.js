const express = require("express");
const router = express.Router();

const catogiryRoutes = require("./category");
const BrandRoutes = require('./product');

router.use('/category', catogiryRoutes);
router.use('/brand', BrandRoutes);

module.exports = router;

