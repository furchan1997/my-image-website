import { HashLink } from "react-router-hash-link";
import Logo from "./Logo";
import { useEffect, useState } from "react";

function Footer() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handkeResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handkeResize);

    return () => window.removeEventListener("resize", handkeResize);
  }, []);

  if (width > 500) {
    return (
      <div className="fixed-bottom bg-primary d-flex justify-content-between align-items-center px-2 ">
        <b className="text-orange">
          כל הזכיות שמורות <i class="bi bi-c-circle"></i>{" "}
          {new Date().getFullYear()}
        </b>
        <div className="d-flex gap-4">
          <i className="bi bi-envelope-at-fill text-orange">
            <b className="ms-1"> arielhodaya@gmail.com</b>
          </i>

          <a
            href="https://wa.me/972506595538"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp text-orange">
              <b className="me-1">שלחו וואטצאפ</b>
            </i>
          </a>
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
      </div>
    );
  }
}

export default Footer;
