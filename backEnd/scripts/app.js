require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const URL = process.env.CONNECTION_STRING_ATLAS;
const PORT = process.env.PORT;
console.log("PORT from ENV:", PORT);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const jobOffersRoute = require("../routers/jobOffers");
const adminRoute = require("../routers/adminAuth");

app.use(express.json());
app.use(cors());

// API routes
try {
  app.use("/api/admin", adminRoute);
} catch (err) {
  console.error("Error in /api/admin:", err);
}

try {
  app.use("/api/offers", jobOffersRoute);
} catch (err) {
  console.error("Error in /api/offers:", err);
}

// 404 - צריך להיות אחרי כל הנתיבים
app.use((req, res, next) => {
  res.status(404).json({
    message: "העמוד לא נמצא",
  });
});

// טיפול בשגיאות
app.use((err, req, res, next) => {
  console.error("SERVER ERROR", err);
  res.status(500).json({
    message: "שגיאת רשת",
  });
});

if (!PORT) {
  throw new Error("Missing PORT environment variable");
}

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log("CONNECTED TO MONGO DB");
    app.listen(PORT, () => {
      console.log("CONNECTED TO SERVER:", PORT);
      // printRoutes();
    });
  } catch (err) {
    console.error("Connection error:", err);
  }
}

connect();
