const express = require("express");
const router = express.Router();
const checkAdminPassword = require("../middleware/checkAdminPassword");

router.post("/auth", checkAdminPassword, (req, res) => {
  try {
    res.status(200).json({ message: "Authorized." });
  } catch (err) {
    res.status(500).json({ message: "שגיאת שרת" });
  }
});

module.exports = router;
