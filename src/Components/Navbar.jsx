import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import logo from "./assets/logo.png";
import { Home, Info, Images, Phone } from "lucide-react";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  const navItems = [
    { label: "Home", icon: <Home size={20} />, link: "#" },
    { label: "About Us", icon: <Info size={20} />, link: "#about" },
    { label: "Adopt a Life", icon: <Images size={20} />, link: "#adopt" },
    { label: "Donate", icon: <Images size={20} />, link: "#donate" },
    { label: "Contact", icon: <Phone size={20} />, link: "#contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg premium-navbar shadow-sm">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Logo" className="nav-logo" />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className={`collapse navbar-collapse ${expanded ? "show-menu" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {navItems.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a
                  className="nav-link d-flex align-items-center gap-2 premium-nav-link"
                  href={item.link}
                  onClick={closeMenu}
                >
                  {item.icon} {item.label}
                </a>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
