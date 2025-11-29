import React, { useState, useRef, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./AdoptionFlow.css";

const cattleData = [
  { id: 1, name: "Sushmita", type: "Cow", age: "7 yrs 2 mo", img: "/assets/cow1.jpg", price: 1000 },
  { id: 2, name: "Gauri", type: "Cow", age: "5 yrs 10 mo", img: "/assets/cow2.jpg", price: 1200 },
  { id: 3, name: "Nandi", type: "Bull", age: "6 yrs", img: "/assets/cow3.jpg", price: 1500 },
  { id: 4, name: "Radha", type: "Cow", age: "4 yrs 3 mo", img: "/assets/cow4.jpg", price: 900 },
  { id: 5, name: "Krishna", type: "Calf", age: "1 yr", img: "/assets/cow5.jpg", price: 700 }
];

export default function AdoptionFlow() {
  const [filter, setFilter] = useState("All");
  const filteredCattle =
    filter === "All" ? cattleData : cattleData.filter((c) => c.type === filter);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3500 })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const cartRef = useRef(null);
  const [cart, setCart] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [paymentSS, setPaymentSS] = useState(null);

  const handleAddToCart = (cow, type) => {
    let amount = cow.price;
    if (type === "yearly") amount = cow.price * 12;
    if (type === "custom") amount = 500;

    setCart({ ...cow, selectedAmount: amount });

    setTimeout(() => {
      cartRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="adopt-wrapper">

      <h2 className="adopt-title">
        Adopt a Cow <span className="gold-dot">•</span> Give a Life of Dignity
      </h2>

      {/* FILTER BAR */}
      <div className="filter-bar">
        {["All", "Cow", "Bull", "Calf"].map((type) => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* CAROUSEL */}
      <div className="carousel-container">
        <button className="slider-btn left" onClick={scrollPrev}>❮</button>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">

            {filteredCattle.map((cow) => (
              <div key={cow.id} className="embla__slide">
                <div className="cow-card">

                  <img src={cow.img} className="cow-img" />

                  <div className="cow-body">
                    <h3>{cow.name}</h3>
                    <p className="meta">{cow.type} • {cow.age}</p>

                    <button className="gold-btn" onClick={() => handleAddToCart(cow, "monthly")}>
                      Adopt Monthly — ₹{cow.price}
                    </button>

                    <button className="gold-btn" onClick={() => handleAddToCart(cow, "yearly")}>
                      Yearly — ₹{cow.price * 12}
                    </button>

                    <button className="gold-btn alt" onClick={() => handleAddToCart(cow, "custom")}>
                      Custom Donation
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        <button className="slider-btn right" onClick={scrollNext}>❯</button>
      </div>

      {/* CART SECTION */}
      {cart && !submitted && (
        <div className="cart-area" ref={cartRef}>
          <h3 className="cart-title">Your Adoption Summary</h3>

          <div className="cart-row">
            <img src={cart.img} className="cart-img" />
            <div>
              <h4>{cart.name}</h4>
              <p className="cart-amount">
                Selected Amount: <span>₹{cart.selectedAmount}</span>
              </p>
            </div>
          </div>

          <form className="adopt-form" onSubmit={handleSubmit}>
            <input placeholder="Full Name" required />
            <input placeholder="Email" type="email" required />
            <input placeholder="Phone Number" required />
            <input placeholder="City" required />

            <div className="payment-section">
              <div className="qr-box">
                <h4>Scan & Pay</h4>
                <img src="/assets/gpay-qr.png" className="qr-img" />
                <p>UPI ID: <b>yourupi@oksbi</b></p>
              </div>

              <div className="bank-box">
                <h4>Bank Transfer</h4>
                <p>Account: MGMA Gaushala Trust</p>
                <p>Acc No: 12345678900011</p>
                <p>IFSC: SBIN0000400</p>
                <p>Branch: Ratnagiri</p>
              </div>
            </div>

            <label>Upload Payment Screenshot</label>
            <input type="file" accept="image/*" required onChange={(e)=>setPaymentSS(e.target.files[0])} />

            <button className="submit-btn">Submit & Receive Certificate</button>
          </form>
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {submitted && (
        <div className="success-box">
          <h3>🎉 Adoption Successful</h3>
          <p>Your certificate will be emailed shortly.</p>
        </div>
      )}
    </div>
  );
}
