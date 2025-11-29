import React, { useEffect, useRef } from "react";
import "./AdoptionSection.css";
import feedImg from "./assets/cows.jpg";

export default function AdoptionSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("visible");
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="adopt" className="adopt-wrapper fade-section">
      
      {/* GOLD LEFT BAR */}
      <div className="gold-bar"></div>

      <div className="container adopt-container">

        {/* HEADER */}
        <div className="text-center mb-4">
          <h2 className="adopt-title">How You Can Adopt & Support</h2>
          <p className="adopt-intro">
            Your contribution helps us feed, treat and protect rescued cattle.
            Sponsorship ensures that every animal lives with dignity, love and care.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="row align-items-center">

          {/* LEFT IMAGE BLOCK */}
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="premium-img-box">
              <img src={feedImg} className="premium-img" alt="Cow care" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-6">
            <div className="glass-info">

              <h3 className="info-title">Your Adoption Covers</h3>

              <ul className="gold-list">
                <li>Nutritious fodder and healthy feeding</li>
                <li>Clean and hygienic shelter spaces</li>
                <li>Continuous fresh drinking water</li>
                <li>Regular veterinary visits and medicines</li>
                <li>Daily care from trained caretakers</li>
              </ul>

              <div className="cost-box">
                <p><strong>Average Monthly Care Cost:</strong></p>
                <h3 className="cost-amount">₹7,500</h3>
                <p className="small-note">(Including food, medicine & maintenance)</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
