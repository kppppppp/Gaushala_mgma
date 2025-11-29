import React, { useEffect, useRef } from 'react';
import "./body.css";
import cows from "./assets/cows.jpg";

function Body() {

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="body-container fade-section" ref={sectionRef} id="about">

      {/* Golden Vertical Accent */}
      <div className="gold-accent"></div>

      {/* Title */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12">
          <h1 className="section-title">
            Who We Are
          </h1>

          <div className="title-underline"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="row align-items-center justify-content-center main-content">

        {/* Text */}
        <div className="col-lg-7 col-md-11 col-12 text-section">
          <div className="text-glass">
            <h2>Mazi Mauli Gomay Ashray, Tanger</h2>

            <p>
              Mazi Mauli Gomay Ashray is a certified and registered Goshala (Cow Sanctuary),
              located in Village Tanger of Dapoli Taluka, District Ratnagiri.
            </p>

            <p>
              Our seva is rooted in compassion — we rescue, feed, heal, and protect abandoned,
              injured, and old cows with dignity and devotion.
            </p>

            <p>
              With your support, we continue our mission of preserving the spiritual and cultural
              heritage of Indian cattle.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="col-lg-4 col-md-10 col-12 mt-4 mt-lg-0 text-center">
          <img src={cows} alt="Cows" className="who-img premium-shadow" />
        </div>

      </div>

    </section>
  );
}

export default Body;
