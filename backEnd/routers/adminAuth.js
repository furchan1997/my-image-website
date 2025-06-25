const express = require("express");
const router = express.Router();
const checkAdminPassword = require("../middleware/checkAdminPassword");

router.post("/admin/auth", checkAdminPassword, (req, res) => {
  res.status(200).json({ message: "Authorized." });
});

module.exports = router;
