import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbarr">
      <a href="#rights" className="nav-icon icon1 ">
        LGBTQ Rights
      </a>
      <a href="#lgbtq" className="nav-icon icon2">
        LGBTQ+
      </a>
      <a href="#pride" className="nav-icon icon3">
        Pride
      </a>
      <a href="#equality" className="nav-icon icon4">
        Equality
      </a>
      <a href="#coming" className="nav-icon icon5">
        Coming out stories
      </a>
    </div>
  );
}

export default Navbar;
