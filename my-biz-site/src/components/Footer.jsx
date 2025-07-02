import { HashLink } from "react-router-hash-link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Footer() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handkeResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handkeResize);

    return () => window.removeEventListener("resize", handkeResize);
  }, []);

  if (width > 1200) {
    return (
      <div className="fixed-bottom bg-primary d-flex justify-content-between align-items-center px-2">
        {/* זכויות יוצרים */}
        <b className="text-orange">
          כל הזכויות שמורות <i className="bi bi-c-circle"></i>{" "}
          {new Date().getFullYear()}
        </b>

        {/* אימייל ווואטסאפ בצד אחד, עם רווח בין האייקונים */}
        <div className="d-flex gap-4 align-items-center">
          <i className="bi bi-envelope-at-fill text-orange">
            <b className="ms-1">arielhodaya@gmail.com</b>
          </i>

          <a
            href="https://wa.me/972506595538"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <i className="bi bi-whatsapp text-orange">
              <b className="me-1">שלחו וואטסאפ</b>
            </i>
          </a>

          {/* קישור לדף הצהרת נגישות */}
          <NavLink
            className="text-orange text-decoration-none"
            to="/Accessibility"
          >
            הצהרת נגישות
          </NavLink>

          {/* לוגו שמוביל לראש העמוד */}
        </div>

        <div>
          <HashLink to="/#hero" smooth>
            <Logo fontSize={"5"} />
          </HashLink>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-primary text-center py-3 d-flex flex-column align-items-center gap-2">
        <HashLink to="/#hero" smooth>
          <Logo fontSize={"2"} />
        </HashLink>

        <div className="text-orange">
          <i className="bi bi-c-circle"></i> כל הזכויות שמורות{" "}
          {new Date().getFullYear()}
        </div>

        <a
          href="mailto:arielhodaya@gmail.com"
          className="text-orange text-decoration-none d-flex align-items-center gap-1"
        >
          <i className="bi bi-envelope-at-fill me-1"></i>
          <span> arielhodaya@gmail.com</span>
        </a>

        <a
          href="https://wa.me/972506595538"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange text-decoration-none d-flex align-items-center gap-1"
        >
          <i className="bi bi-whatsapp"></i>
          <span>שלחו וואטסאפ</span>
        </a>
        <NavLink
          className={"text-orange  text-decoration-none"}
          to={"/Accessibility"}
        >
          הצהרת נגישות
        </NavLink>
      </div>
    );
  }
}

export default Footer;
