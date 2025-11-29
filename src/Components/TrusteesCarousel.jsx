import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./TrusteesCarousel.css";

const trustees = [
  {
    name: "Shashikant Sahadev Bagul",
    role: "Chairman",
    img: "/assets/team1.jpg",
  },
  {
    name: "Madhukar Sahadev Bagul",
    role: "Secretary",
    img: "/assets/team2.jpg",
  },
  {
    name: "Sushila Shashikant Bagul",
    role: "Treasurer",
    img: "/assets/team3.jpg",
  },
  {
    name: "Mayuri Madhukar Bagul",
    role: "Member",
    img: "/assets/team4.jpg",
  },
  {
    name: "Shashikant Prakash Bagul",
    role: "Member",
    img: "/assets/team5.jpg",
  },
  {
    name: "Kavita Kailas Shedge",
    role: "Member",
    img: "/assets/team6.jpg",
  },
  {
    name: "Smita Sandeep Shedge",
    role: "Member",
    img: "/assets/team7.jpg",
  },
];

export default function TrusteesCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <section className="trustees-section">
      <h2 className="trustees-title">Our Board of Trustees</h2>

      <div className="trustees-embla" ref={emblaRef}>
        <div className="trustees-container">
          {trustees.map((t, i) => (
            <div className="trustee-card" key={i}>
              <div className="trustee-image-wrap">
                <img src={t.img} className="trustee-img" alt={t.name} />
              </div>

              <div className="trustee-info">
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
