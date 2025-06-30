import React from "react";
import Logo from "../components/Logo";

function Hero() {
  return (
    <div id="hero">
      <Logo fontSize={"1"} />
      <h2 className="text-secondary">
        היי, שמי אריאל בן אור 👋
        <br />
        מפתח אתרים ואפליקציות שמייצר תוצאות לעסקים
      </h2>
      <p className="text-muted">
        אני עוזר לעסקים לבלוט ברשת בעזרת אתרים מעוצבים, מהירים, ומותאמים לנייד –
        שמביאים יותר לקוחות ומגדילים מכירות.
      </p>
      <div className="d-flex justify-content-center">
        <button className="btn text-muted bg-orang hover-bg-blue w-50 text-center fw-bold">
          צרו קשר 🚀
        </button>
      </div>

      <hr />
    </div>
  );
}

export default Hero;
