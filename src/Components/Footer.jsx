import React from "react";
import "./Footer.css";
import logo from "./assets/logo.png"; 
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND COLUMN WITH LOGO */}
        <div className="footer-col">
          <img src={logo} alt="Gaushala Logo" className="footer-logo" />

          <h3 className="footer-title">Mazi Guru Mauli Gomay Ashray</h3>
          <p className="footer-text">
            A sacred shelter for rescued, abandoned and injured cattle.
            We serve with devotion and preserve the Indian cow heritage.
          </p>

          <div className="trust-badges">
            <span>80G Certified</span>
            <span>12A Registered</span>
            <span>Niti Aayog Listed</span>
            <span>CSR Eligible</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4 className="footer-sub">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#adopt">Adopt a Cow</a></li>
            <li><a href="#products">Cow-Based Products</a></li>
            <li><a href="#team">Trustees</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4 className="footer-sub">Support Us</h4>
          <p className="footer-text">Even a small help protects a sacred life.</p>
          <a href="#adopt" className="footer-btn">Donate / Adopt Now</a>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-col">
          <h4 className="footer-sub">Contact</h4>

          <p className="footer-info"><MapPin size={18}/> Village Tanger, Tal. Dapoli, Dist. Ratnagiri</p>
          <p className="footer-info"><Phone size={18}/> +91 7011152799</p>
          <p className="footer-info"><Mail size={18}/> mgmgaushala@gmail.com</p>

          <div className="footer-social">
            <a href="#"><Facebook size={20}/></a>
            <a href="#"><Instagram size={20}/></a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2025 Mazi Guru Mauli Gomay Ashray. All Rights Reserved.</p>
        <p className="developer">Designed by <span>Krish Panchal</span></p>
      </div>

    </footer>
  );
}
