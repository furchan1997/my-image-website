const express = require("express");
const router = express.Router();
const { jobOffers, validateJobOffer } = require("../models/jobOffers");
const checkAdminPassword = require("../middleware/checkAdminPassword");

// יצירת הצעה חדשה על ידיי לקוח
router.post("/offers", async (req, res) => {
  const { error } = validateJobOffer(req.body);

  if (error) {
    res.status(400).json({
      message: error.details[0].message,
    });
    return;
  }

  const offer = await new jobOffers({ ...req.body }).save();
  res.status(201).json({
    offer,
  });
});

// קבלת כל הצעות העבודה
router.get("/offers/admin", checkAdminPassword, async (req, res) => {
  const offers = await jobOffers.find({}, {});

  if (!offers) {
    res.status(404).json({
      message: "offers not found.",
    });
    return;
  }

  if (offers.length === 0) {
    res.status(404).json({
      message: "No offers yet",
    });
    return;
  }

  res.status(200).json({
    message: "The offers:",
    data: offers,
  });
});

// קבלת הצעת עבודה ספציפית
router.get("/offers/admin/:id", checkAdminPassword, async (req, res) => {
  const offer = await jobOffers.findOne({ _id: req.params.id });

  if (!offer) {
    res.status(404).json({
      message: "offer not found.",
    });
    return;
  }

  res.status(200).json({
    message: "The offer:",
    data: offer,
  });
});

// מחיקת הצעת עבודה ספציפית
router.delete("/offers/admin/:id", checkAdminPassword, async (req, res) => {
  const offer = await jobOffers.deleteOne({ _id: req.params.id });

  if (!offer) {
    res.status(404).json({
      message: "Offer not found.",
    });
    return;
  }

  if (offer.deletedCount === 0) {
    res.status(400).json({
      message: "Offer has already been deleted.",
    });
    return;
  }

  res.status(200).json({
    message: "Offer is deleted.",
    data: offer,
  });
});

// מחיקת כל הצעות העבודה
router.delete("/offers/admin", checkAdminPassword, async (req, res) => {
  const offers = await jobOffers.deleteMany({});

  if (offers.deletedCount === 0) {
    return res.status(404).json({ message: "No offer found." });
  }

  res.status(200).json({
    message: "Offers are delated:",
    data: offers,
  });
});

module.exports = router;
