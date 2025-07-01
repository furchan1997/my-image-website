const express = require("express");
const router = express.Router();
const { jobOffers, validateJobOffer } = require("../models/jobOffers");
const checkAdminPassword = require("../middleware/checkAdminPassword");

// יצירת הצעה חדשה על ידיי לקוחות
router.post("/", async (req, res) => {
  try {
    const { error } = validateJobOffer(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const offer = await new jobOffers({ ...req.body }).save();
    res.status(201).json({ offer });
  } catch (err) {
    console.error("POST / - Error:", err);
    res.status(500).json({ message: "שגיאת שרת" });
  }
});

// קבלת כל הצעות העבודה
router.get("/admin", checkAdminPassword, async (req, res) => {
  console.log("Received GET request on /api/offers");

  try {
    const offers = await jobOffers.find({}, {});
    console.log("Received GET request on /api/offers");

    if (!offers || offers.length === 0) {
      return res.status(404).json({
        message: "No offers found.",
      });
    }

    res.status(200).json({
      message: "The offers:",
      data: offers,
    });
  } catch (err) {
    console.error("GET /admin - Error:", err);
    res.status(500).json({ message: "שגיאת שרת" });
  }
});

// קבלת הצעת עבודה ספציפית
router.get("/admin/:id", checkAdminPassword, async (req, res) => {
  try {
    const offer = await jobOffers.findOne({ _id: req.params.id });

    if (!offer) {
      return res.status(404).json({ message: "Offer not found." });
    }

    res.status(200).json({
      message: "The offer:",
      data: offer,
    });
  } catch (err) {
    console.error("GET /admin/:id - Error:", err);
    res.status(500).json({ message: "שגיאת שרת" });
  }
});

// מחיקת הצעת עבודה ספציפית
router.delete("/admin/:id", checkAdminPassword, async (req, res) => {
  try {
    const offer = await jobOffers.deleteOne({ _id: req.params.id });

    if (!offer || offer.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "Offer not found or already deleted." });
    }

    res.status(200).json({
      message: "Offer is deleted.",
      data: offer,
    });
  } catch (err) {
    console.error("DELETE /admin/:id - Error:", err);
    res.status(500).json({ message: "שגיאת שרת" });
  }
});

// מחיקת כל הצעות העבודה
router.delete("/admin", checkAdminPassword, async (req, res) => {
  try {
    const offers = await jobOffers.deleteMany({});

    if (offers.deletedCount === 0) {
      return res.status(404).json({ message: "No offers found." });
    }

    res.status(200).json({
      message: "Offers are deleted:",
      data: offers,
    });
  } catch (err) {
    console.error("DELETE /admin - Error:", err);
    res.status(500).json({ message: "שגיאת שרת" });
  }
});

console.log("JobOffers router created");

module.exports = router;
