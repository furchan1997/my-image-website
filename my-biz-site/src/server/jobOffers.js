import axios from "axios";
import { httpService } from "../server/httpService";

// שמירת משתנה זמני בזכרון עבור שימוש בערך עתידי
let adminPassword = null;

// פונקציית התחברות: השמה של המשתנה הזמני אל הערך שעתיד לבוא כפרמטר בפונקציה שהיא בעצם הסיסמא
// הגדרת ההדידר הדיפולטיבי עבור סיסמא לסיסמא שתבוא כערך בהמשך לפונקציה הזו
// בקשה לשקרת עבור התחברות, הסיסמא כבר מוגדרת בהידר, ולא שולחים כלום בגוף הבקשה
async function signIn(password) {
  adminPassword = password;
  axios.defaults.headers.common["x-admin-password"] = password;
  return await httpService.post("api/admin/auth", null);
}

// פוקנציית התנתקות: מחזירים את המשתנה הזמני למצב חסר ערך (מנקים את הערך בעצם) ומוחקים את מה שהיה קיים בהידר שזה הסיסמא
async function logout() {
  adminPassword = null;
  delete axios.defaults.headers.common["x-admin-password"];
}

async function getJobOffer() {
  return await httpService.get("/api/offers/admin");
}

async function deleteOffer(ID) {
  return httpService.delete(`/api/offers/admin/${ID}`);
}

async function createOffer(offer) {
  const response = await httpService.post("/api/offers/", offer);
  return response;
}

export const jobOfferService = {
  getJobOffer,
  signIn,
  logout,
  deleteOffer,
  createOffer,
};
