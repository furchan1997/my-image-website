require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const URL = process.env.CONNECTION_STRING_ATLAS;
const PORT = process.env.PORT || 3000;

const jobOffersRoute = require("../routers/jobOffers");
const adminRoute = require("../routers/adminAuth");

app.use((req, res, next) => {
  console.log("INCOMING REQUEST TO:", req.url);
  next();
});

app.use(express.json());
app.use(cors());

// API routes - חייבים לפני כל else routes
app.use("/api", adminRoute);
app.use("/api", jobOffersRoute);

// הגשת קבצי build של React - חייב להיות אחרי ה־API
app.use(express.static(path.join(__dirname, "../my-biz-site/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../my-biz-site/build", "index.html"));
});

// טיפול ב־404 (לא נמצא) - אחרי כל הנתיבים
app.use((req, res, next) => {
  res.status(404).json({
    message: "העמוד לא נמצא",
  });
});

// טיפול בשגיאות שרת
app.use((err, req, res, next) => {
  console.error("SERVER ERROR", err);
  res.status(500).json({
    message: "שגיאת רשת",
  });
});

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log("CONNECTED TO MONGO DB");
    app.listen(PORT, () => {
      console.log("CONNECTED TO SERVER:", PORT);
    });
  } catch (err) {
    console.error("Connection error:", err);
  }
}

connect();
