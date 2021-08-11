import { Button } from "react-bootstrap";
import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <h1 className="prider">PRIDER</h1>
      </div>
      <div className="header-right">
        <a href="#" className="header-icon">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" className="header-icon">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a href="#" className="header-icon">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="#" className="header-icon">
          <i class="fab fa-facebook-square"></i>
        </a>
        {/* <button className="header-btn">Support Us</button> */}
        <Button variant="warning" className="header-btn">
          Support Us
        </Button>
      </div>
    </div>
  );
}

export default Header;
