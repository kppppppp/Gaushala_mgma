import React, { useEffect, useRef } from "react";
import "./ShelterStats.css";

import cowsImg from "./assets/cow.png";
import bullsImg from "./assets/bulls.png";
import calvesImg from "./assets/calves.jpg";

function ShelterStats() {
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;

    const animateCounter = (el) => {
      const target = +el.getAttribute("data-target");

      const startCounting = () => {
        let count = 0;

        const speed = 40; // LOWER = slower (you can adjust)

        const update = () => {
          if (count < target) {
            count += 1;
            el.innerText = count + "+";
            setTimeout(update, speed);
          } else {
            el.innerText = target + "+";

            // Restart after 2 seconds
            setTimeout(() => {
              startCounting();
            }, 2000);
          }
        };

        update();
      };

      startCounting();
    };

    counters.forEach((counter) => animateCounter(counter));
  }, []);

  return (
    <div className="container shelter-section py-5">
  <div className="row align-items-center">

    {/* LEFT CONTENT */}
    <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
      
      <h2 className="shelter-title">We Currently Shelter</h2>

      <p className="shelter-subtext">
        Providing a safe and nurturing home for abandoned, injured and rescued cattle.
      </p>

      <ul className="shelter-list">
        <li>
          <span className="count" data-target="85" ref={(el) => countersRef.current[0] = el}>0+</span>
          Cows
        </li>

        <li>
          <span className="count" data-target="30" ref={(el) => countersRef.current[1] = el}>0+</span>
          Bulls
        </li>

        <li>
          <span className="count" data-target="17" ref={(el) => countersRef.current[2] = el}>0+</span>
          Calves
        </li>
      </ul>

      <p className="desc-text">
        These animals receive proper medical care, nutritious food, and a peaceful
        environment where they can live with dignity.
      </p>

      <button className="support-btn">💛 Support Our Shelter</button>
    </div>

    {/* IMAGE COLLAGE */}
    <div className="col-lg-6 col-md-6">
      <div className="image-grid">
        <img src={cowsImg} alt="Cows" className="grid-img" />
        <img src={bullsImg} alt="Bulls" className="grid-img" />
        <img src={calvesImg} alt="Calves" className="grid-img" />
      </div>
    </div>

  </div>
</div>


  
  );
}

export default ShelterStats;
