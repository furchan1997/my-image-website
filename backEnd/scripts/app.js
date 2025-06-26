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
const { log } = require("console");

app.use((req, res, next) => {
  console.log("INCOMING REQUEST TO:", req.url);
  next();
});

app.use(express.json());
app.use(cors());

// API routes - חייבים לפני כל else routes
app.use("/api/admin", adminRoute);
app.use("/api/offers", jobOffersRoute);

const dist = path.join(__dirname, "..", "..", "my-biz-site/dist");

// // הגדרת Express לשרת קבצים סטטיים מהתיקייה 'dist' של הפרונט
// app.use(express.static(dist));

// // כל בקשה אחרת תשלח את קובץ ה-index.html (SPA)
// app.get("*", (req, res) => {
//   res.sendFile(path.join(dist, "index.html"));
// });

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

// אחרי כל הגדרת ה routes ו middleware
function printRoutes() {
  if (!app._router) {
    console.log("No routes defined yet.");
    return;
  }

  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      // routes registered directly on the app
      console.log(middleware.route.path);
    } else if (middleware.name === "router" && middleware.handle.stack) {
      // router middleware
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          console.log(handler.route.path);
        }
      });
    }
  });
}

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log("CONNECTED TO MONGO DB");
    app.listen(PORT, () => {
      console.log("CONNECTED TO SERVER:", PORT);
      printRoutes();
    });
  } catch (err) {
    console.error("Connection error:", err);
  }
}

connect();
