import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-sm px-4 fixed-top">
      <HashLink smooth to="/#hero" className="">
        <Logo fontSize={"3"} />
      </HashLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between "
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <HashLink smooth className="nav-link text-main" to={"/#services"}>
              שירותים{" "}
            </HashLink>
          </li>
          <li className="nav-item ">
            <HashLink smooth className="nav-link text-main" to={"/#portfolio"}>
              תיק עבודות
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-link text-main" to={"/#my-offer"}>
              איך זה עובד
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-link text-main" to={"/#about"}>
              אודות
            </HashLink>
          </li>
        </ul>

        <div className="d-flex">
          <HashLink smooth to={"/#form"}>
            <button className="btn text-muted me-2 bg-orang hover-bg-primary">
              קבל/י הצעת מחיר
            </button>
          </HashLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
