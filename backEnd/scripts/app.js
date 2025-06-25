require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const URL = process.env.CONNECTION_STRING_ATLAS; // תיקון כאן
const PORT = 3000;

const jobOffersRoute = require("../routers/jobOffers");
const adminRoute = require("../routers/adminAuth");

app.use(express.json());
app.use(cors());
app.use("/api", adminRoute);
app.use("/api", jobOffersRoute);

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.originalUrl);
  next();
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "העמוד לא נמצא",
  });
});

app.use((err, req, res, next) => {
  console.log("SERVER ERROR", err);
  res.status(500).json({
    message: "שגיאת רשת",
  });
});

connect();

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log("CONNECT TO MONGO DB");
    app.listen(PORT, () => {
      console.log("CONECT TO SERVER: ", PORT);
    });
  } catch (err) {
    console.log("there is a error", err);
  }
}
