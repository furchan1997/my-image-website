const express = require("express");
const router = express.Router();
const checkAdminPassword = require("../middleware/checkAdminPassword");

router.post("/auth", checkAdminPassword, (req, res) => {
  res.status(200).json({ message: "Authorized." });
});
console.log("Admin router created");

module.exports = router;
