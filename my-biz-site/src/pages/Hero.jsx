import React from "react";
import Logo from "../components/Logo";
import { HashLink } from "react-router-hash-link";

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
        <HashLink smooth to={"/#form"}>
          <a
            href="https://wa.me/972506595538"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-muted bg-orang hover-bg-blue text-center fw-bold"
          >
            מעוניין/ת באתר? בוא נתחיל 🚀
          </a>
        </HashLink>
      </div>

      <hr />
    </div>
  );
}

export default Hero;
