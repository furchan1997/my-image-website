import React from "react";
import Logo from "../components/Logo";

function Hero() {
  return (
    <div id="hero">
      <Logo fontSize={"1"} />
      <h2 className="text-secondary">
        היי, אני אריאל בן אור 👋
        <br /> מפתח אתרים ואפליקציות שעוזר לעסקים לבלוט ברשת
      </h2>
      <p className="text-muted">
        בונה אתרים מרשימים, מהירים ורספונסיביים שמביאים לקוחות.
      </p>
      <div className="d-flex justify-content-center">
        <button className="btn text-muted bg-orang hover-bg-blue w-25 text-center fw-bold">
          דברו איתי
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Hero;
