const mongoose = require("mongoose");
const joi = require("joi");
const { phoneRegex } = require("../regex/rejexSchema");

const jobOffersSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },

  phone: { type: Number, required: true, minlength: 9, maxlength: 11 },

  // סוג האתר
  websiteType: {
    type: String,
    enum: [
      "protolioSite", // אתר תדמית
      "landingPage", // דף נחיתה
      "onlineStore", // חנות מקוונת
      "mobileApp", //אפליקציה לנייד
      "bookingSystem", //מערכת הזמנות
      "complexSystem", // מערכת מורכבת
      "other", // אחר
    ],
    required: true,
  },

  otherSiteType: {
    type: String,
    default: "",
  },

  // מטרת הפרויקט
  goalOfProject: {
    type: String,
    enum: [
      "arketingAndBranding", // שיווק ומיתוג
      "increasingSales", // הגדלת מכירות
      "customerService", // שירות לקוחות
      "creatingCommunity", // יצירת קהילה
    ],
    required: true,
  },

  otherGoleProject: {
    type: String,
    default: "",
  },

  // קהל היעד
  targetAudience: {
    type: [String],
    enum: [
      "18-30", // צעירים
      "31-51", // מבוגרים
      "businessesAndOrganizations", // עסקים וארגונים
      "general", // כללי
    ],
    required: true,
  },

  // תכונות ופיצ'רים חשובים
  features: {
    type: [String],
    enum: [
      "cms", // מערכת לניהול תוכן
      "paymentSystem", // מערכת תשלום
      "socialIntegration", //אינטרגרציה עם רשתות חברתיות
      "forum", // פורום או קהילה
      "blog", // בלוג או חדשות
    ],
    required: true,
  },

  // אתר מועדף
  exampleFavoriteSite: {
    type: String,
    minlength: 0,
    maxlength: 200,
  },

  // תקציב משוער
  budget: {
    type: String,
    enum: [
      "800-1,500",
      "1,500-3,500",
      "5,000-10,000",
      "10,000-15,000",
      "15,000-30,000",
      "+30,000",
    ],
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (val) => val.toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" }), // מציג את התאריך בפורמט מקומי
    set: (val) => new Date(val), // מבצע המרה בעת שמירת התאריך
  },
});

const jobOffers = mongoose.model("JobOffer", jobOffersSchema, "jobOffers");

// סכמת ג'וי עבור ולידציה
function validateJobOffer(obj) {
  const schema = joi.object({
    fullName: joi.string().min(2).max(20).required(),
    phone: joi.string().min(9).max(11).required(),
    websiteType: joi.alternatives(
      joi.string(),
      joi.array().items(joi.string())
    ),
    otherSiteType: joi.string().min(2).max(20).allow(""),
    goalOfProject: joi.alternatives(
      joi.string(),
      joi.array().items(joi.string())
    ),
    otherGoleProject: joi.string().min(2).max(20).allow(""),
    targetAudience: joi.array().items(joi.string()).min(1).required(),
    features: joi.array().items(joi.string()).min(1).required(),
    exampleFavoriteSite: joi.string().min(2).max(200).allow(""),
    budget: joi.alternatives(joi.string(), joi.array().items(joi.string())),
  });

  return schema.validate(obj);
}

module.exports = {
  jobOffers,
  validateJobOffer,
};
