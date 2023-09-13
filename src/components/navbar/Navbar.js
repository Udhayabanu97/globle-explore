import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [onclickMenu, setOnclickMenu] = useState(false);

  return (
    <>
      <nav>
        <h5 className="logo text-success">
          <span className="text-danger">G</span>lobe
          <span className="text-danger"> E</span>xplore
        </h5>
        <ul
          className={onclickMenu ? "nav-toggler" : "list-items"}
          onClick={() => setOnclickMenu(false)}
        >
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/about" className="about">
            About
          </Link>
          <Link to="/contact" className="contact">
            Contact
          </Link>
          <Link to="/terms" className="terms">
            Legal Info
          </Link>
          <Link to="/privacy" className="privacy">
            Privacy Policy
          </Link>
        </ul>

        <button
          className="res-icon"
          onClick={() => setOnclickMenu(!onclickMenu)}
        >
          {onclickMenu ? <ImCross /> : <FaBars />}
        </button>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
