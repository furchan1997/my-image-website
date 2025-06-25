import { HashLink } from "react-router-hash-link";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="fixed-bottom bg-primary d-flex justify-content-between align-items-center px-2 ">
      <b className="text-orange">
        {" "}
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
}

export default Footer;
