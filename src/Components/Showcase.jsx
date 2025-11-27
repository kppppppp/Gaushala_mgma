import React from "react";
import "./showcase.css";

// Images
import img80g from "./assets/80g.jpg";
import imgNiti from "./assets/niti_ayog.jpg";
import imgCSR from "./assets/csr.jpg";

function Showcase() {
  return (
    <div className="container showcase-section py-5">

      <div className="row align-items-center">

        {/* LEFT — Certificates */}
        <div className="col-lg-9 col-md-8 text-center text-md mb-4 mb-md-0">
          <h2 className="showcase-title">Officially Registered & Certified</h2>

          <div className="row mt-4 justify-content-center justify-content-md-start">

            {/* 80G */}
            <div className="col-4 text-center">
              <a download>
                <div className="cert-box">
                  <img src={img80g} className="cert-img" alt="80G Certificate" />
                </div>
              </a>
              <p className="cert-label">80G Certificate</p>
            </div>

            {/* Niti Aayog */}
            <div className="col-4 text-center">
              <a download>
                <div className="cert-box">
                  <img src={imgNiti} className="cert-img" alt="Niti Aayog" />
                </div>
              </a>
              <p className="cert-label">Niti Aayog</p>
            </div>

            {/* CSR */}
            <div className="col-4 text-center">
              <a download>
                <div className="cert-box">
                  <img src={imgCSR} className="cert-img" alt="CSR Registered" />
                </div>
              </a>
              <p className="cert-label">CSR Registered</p>
            </div>

          </div>
        </div>

        {/* RIGHT — Ticklist */}
        <div className="col-lg-3 col-md-4 text-center text-md-start">
          <ul className="tick-list">
            <li>80G Certified</li>
            <li>CSR Registered</li>
            <li>Niti Aayog Listed</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Showcase;
