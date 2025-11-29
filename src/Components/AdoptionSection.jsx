import React, { useEffect, useRef } from "react";
import "./AdoptionSection.css";
import feedImg from "./assets/cows.jpg";

export default function AdoptionSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add("is-visible");
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="adopt-section">
      <div className="container adopt-inner">
        
        {/* Header */}
        <div className="adopt-top text-center">
          <h2 className="adopt-title">How You Can Adopt?</h2>
          <p className="adopt-intro">
            Support a rescued cattle by sponsoring its monthly or annual care —
            including food, medical treatment, shelter upkeep, and daily
            maintenance. Your kindness restores life and dignity.
          </p>
        </div>

        <div className="adopt-body">

          {/* Left Image */}
          <div className="adopt-left">
            <div className="img-card">
              <img src={feedImg} alt="Cows grazing" className="feed-img" />
            </div>
          </div>

          {/* Right Content */}
          <div className="adopt-right">
            <h3 className="adopt-subtitle">We ensure:</h3>

            <ul className="ensure-list">
              <li>Nutritious fodder & proper feeding</li>
              <li>Clean & hygienic shelter sheds</li>
              <li>Continuous fresh water supply</li>
              <li>Regular veterinary care & medicines</li>
              <li>Daily attention from trained caretakers</li>
            </ul>

            <div className="cost-box">
              <strong>Average monthly care cost per animal:</strong>
              <span> ₹7,500</span>
              <p>(Funded through donations and product sales)</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
