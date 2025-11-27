import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import logo from "./assets/logo.png";
import { Home, Info, Images, Phone } from "lucide-react";
function Navbar(){
    return(
 <nav className="navbar navbar-expand-lg bg-light shadow-lg d-flex align-items-center">

      <div className="container">

        {/* Logo + Title */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "195px", width:"350px", marginRight: "0px" , objectFit: "cover" }}
          />
    
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

           <li className="nav-item">
  <a className="nav-link d-flex align-items-center gap-2" href="#">
    <Home size={20} /> Home
  </a>
</li>

<li className="nav-item">
  <a className="nav-link d-flex align-items-center gap-2" href="body-container">
    <Info size={20} /> About Us
  </a>
</li>

<li className="nav-item">
  <a className="nav-link d-flex align-items-center gap-2" href="#adopt">
    <Images size={20} /> Adopt a Life
  </a>
</li>

<li className="nav-item">
  <a className="nav-link d-flex align-items-center gap-2" href="#donate">
    <Images size={20} /> Donate
  </a>
</li>

<li className="nav-item">
  <a className="nav-link d-flex align-items-center gap-2" href="#contact">
    <Phone size={20} /> Contact
  </a>
</li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;