const router = require("express").Router();
const serviceRoutes = require("./serviceRoutes");
const zipcodeRoutes = require("./zipcodeRoutes");

// Service routes
router.use("/service", serviceRoutes);

// ZipCode routes
router.use("/location", zipcodeRoutes);

module.exports = router;
