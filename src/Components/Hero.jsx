import React from "react";
import heroVideo from "./assets/hero.mp4";
import "./Hero.css";
import { ShieldCheck, CheckCircle } from "lucide-react";

function Hero() {
  return (
    <section className="hero-container" id="hero">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        webkit-playsinline="true"
        x5-video-player-type="h5"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <h1 className="hero-title">माझी गुरु माऊली गोमय आश्रय</h1>

        <p className="hero-quote">
          “A Sacred Shelter for Rescued & Abandoned Cattle”
        </p>

        <p className="hero-subtext">
          We provide a safe, compassionate and spiritual home for cows
          that have been abandoned, injured, or mistreated.  
          Join us in preserving love, dignity & Indian cow heritage.
        </p>

        {/* Buttons */}
        <div className="hero-btn-box">
          <button className="hero-btn hero-primary">Sponsor a Cow</button>
          <button className="hero-btn hero-secondary">Know More</button>
        </div>

        {/* Trust Badges */}
        <div className="hero-badges">
          <div className="hero-badge"><ShieldCheck size={18}/> 80G Certified</div>
          <div className="hero-badge"><ShieldCheck size={18}/> 12A Registered</div>
          <div className="hero-badge"><CheckCircle size={18}/> Niti Aayog Listed</div>
          <div className="hero-badge"><CheckCircle size={18}/> CSR Eligible</div>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="hero-fade"></div>
    </section>
  );
}

export default Hero;
