import React, { useEffect, useRef } from "react";
import "./ShelterStats.css";

import cowsImg from "./assets/cow.png";
import bullsImg from "./assets/bulls.png";
import calvesImg from "./assets/calves.jpg";

function ShelterStats() {
  const countersRef = useRef([]);
  const sectionRef = useRef(null);

  // Counter animation
  useEffect(() => {
    const counters = countersRef.current;

    counters.forEach((counter) => {
      let target = parseInt(counter.dataset.target);
      let count = 0;

      const step = () => {
        count += 1;
        counter.innerText = count + "+";

        if (count < target) {
          requestAnimationFrame(step);
        } else {
          counter.innerText = target + "+";
        }
      };

      requestAnimationFrame(step);
    });
  }, []);

  // Fade-in animation
  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("visible");
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="shelter-wrapper fade-section" ref={sectionRef} id="shelter">

      {/* Gold Accent */}
      <div className="gold-left"></div>

      <div className="container py-5">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="glass-card">

              <h2 className="shelter-title">We Currently Shelter</h2>

              <p className="shelter-subtext">
                More than just a shelter — a peaceful home where every rescued life is nurtured.
              </p>

              <ul className="shelter-list">

                <li>
                  <span
                    className="count"
                    data-target="85"
                    ref={(el) => (countersRef.current[0] = el)}
                  >
                    0+
                  </span>
                  🐄 Cows
                </li>

                <li>
                  <span
                    className="count"
                    data-target="30"
                    ref={(el) => (countersRef.current[1] = el)}
                  >
                    0+
                  </span>
                  🐂 Bulls
                </li>

                <li>
                  <span
                    className="count"
                    data-target="17"
                    ref={(el) => (countersRef.current[2] = el)}
                  >
                    0+
                  </span>
                  🐮 Calves
                </li>

              </ul>

              <p className="desc-text">
                These cattle receive proper food, medical treatment, safety and unconditional love — all supported by kind-hearted donors.
              </p>

              <button className="support-btn">💛 Support Our Shelter</button>

            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6 col-md-6">
            <div className="image-grid">
              <img src={cowsImg} className="grid-img" alt="Cows" />
              <img src={bullsImg} className="grid-img" alt="Bulls" />
              <img src={calvesImg} className="grid-img full" alt="Calves" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ShelterStats;
