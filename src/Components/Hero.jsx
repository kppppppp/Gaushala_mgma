import React from "react";
import heroVideo from "./assets/hero.mp4";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">

      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Main Content */}
      <div className="hero-content">

        <h1 className="hero-title">माझी गुरु माऊली गोमय आश्रय</h1>

        <p className="hero-quote">
          “A Sacred Shelter for Rescued & Abandoned Cattle”
        </p>

        <p className="hero-subtext">
          We provide a safe, compassionate and spiritual environment for cows
          that have been abandoned, injured, or mistreated.  
          Join us in preserving love, dignity, and Indian cow heritage.
        </p>

        {/* Buttons */}
        <div>
          <button className="hero-btn hero-btn-primary">Sponsor a Cow</button>
          <button className="hero-btn hero-btn-secondary">Know More</button>
        </div>

        {/* Trust Badges */}
        <div className="hero-badges">
          <div className="hero-badge">80G Certified</div>
          <div className="hero-badge">12A Registered</div>
          <div className="hero-badge">Niti Aayog Listed</div>
          <div className="hero-badge">CSR Eligible</div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="hero-bottom-fade"></div>
    </div>
  );
}

export default Hero;
