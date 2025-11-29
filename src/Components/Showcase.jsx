import React, { useEffect, useRef } from "react";
import "./showcase.css";

import img80g from "./assets/80g.jpg";
import imgNiti from "./assets/niti_ayog.jpg";
import imgCSR from "./assets/csr.jpg";

function Showcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) el.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="showcase-section fade-section" ref={sectionRef} id="certifications">

      {/* Golden Sidebar Accent */}
      <div className="gold-accent-side"></div>

      <div className="container py-5">
        <div className="row align-items-center">

          {/* LEFT — Certificates */}
          <div className="col-lg-9 col-md-8 mb-4">

            <h2 className="showcase-title">
              Official Trust Certifications
            </h2>

            <p className="showcase-sub">
              We are fully registered, verified and compliant under Indian Government norms.
            </p>

            <div className="row mt-4 gy-3 justify-content-center justify-content-md-start">

              {/* 80G */}
              <div className="col-4 text-center">
                <a download>
                  <div className="cert-frame">
                    <img src={img80g} className="cert-img" alt="80G" />
                  </div>
                </a>
                <p className="cert-label">80G Certificate</p>
              </div>

              {/* Niti Aayog */}
              <div className="col-4 text-center">
                <a download>
                  <div className="cert-frame">
                    <img src={imgNiti} className="cert-img" alt="Niti Aayog" />
                  </div>
                </a>
                <p className="cert-label">Niti Aayog</p>
              </div>

              {/* CSR */}
              <div className="col-4 text-center">
                <a download>
                  <div className="cert-frame">
                    <img src={imgCSR} className="cert-img" alt="CSR" />
                  </div>
                </a>
                <p className="cert-label">CSR Registered</p>
              </div>

            </div>
          </div>

          {/* RIGHT — Trust Points */}
          <div className="col-lg-3 col-md-4 text-center text-md-start trust-box">
            <h3 className="trust-title">Why You Can Trust Us</h3>

            <ul className="tick-list">
              <li>80G Certified for Tax Benefits</li>
              <li>CSR Eligible Organisation</li>
              <li>Niti Aayog Registered</li>
              <li>100% Transparent Donations</li>
              <li>Government Verified Reports</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Showcase;
