import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./body.css";
import cows from "./assets/cows.jpg";

function Body() {
  return (
    <div className="body-container">

      {/* Golden Side Accent */}
      <div className="left-accent"></div>

      {/* Heading */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12">
          <h1 className="section-title" data-aos="fade-down">
            Who We Are
          </h1>
          <div className="title-underline" data-aos="zoom-in"></div>
        </div>
      </div>

      {/* Content */}
      <div className="row align-items-center justify-content-center main-content">

        {/* Left Section */}
        <div
          className="col-lg-7 col-md-10 col-12 text-section"
          data-aos="fade-right"
        >
          <h2>Mazi Mauli Gomay Ashray, Tanger</h2>

          <p>
            Mazi Mauli Gomay Ashray is a certified and registered Goshala (Cow Sentry),
            located in Village Tanger of Dapoli Taluka, District Ratnagiri.  
            Our mission is to protect, nurture and serve cows with devotion.
          </p>
        </div>

        {/* Right Image */}
        <div
          className="col-lg-4 col-md-10 col-12 text-center mt-4 mt-lg-0"
          data-aos="fade-left"
        >
          <img src={cows} alt="Cows" className="who-img premium-shadow" />
        </div>

      </div>

    </div>
  );
}

export default Body;
