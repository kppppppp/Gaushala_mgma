import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./AdoptionFlow.css";

const cattle = [
  {
    id: 1,
    name: "Sushmita",
    type: "Cow",
    age: "7 years 2 months",
    img: "/assets/cow1.jpg",
    price: 1000
  },
  {
    id: 2,
    name: "Gauri",
    type: "Cow",
    age: "5 years 10 months",
    img: "/assets/cow2.jpg",
    price: 1200
  },
  {
    id: 3,
    name: "Nandi",
    type: "Bull",
    age: "6 years",
    img: "/assets/cow3.jpg",
    price: 1500
  }
];

export default function AdoptionFlow() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });
  const [cart, setCart] = useState(null);
  const [paymentSS, setPaymentSS] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleAddToCart = (cow, priceType) => {
    let amount = cow.price;
    if (priceType === "yearly") amount = cow.price * 12;
    if (priceType === "custom") amount = 500;

    setCart({ ...cow, selectedAmount: amount });
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="adopt-flow">

      {/* SECTION TITLE */}
      <h2 className="adopt-title">Cattle You Can Adopt</h2>

      {/* CAROUSEL */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">

          {cattle.map((cow) => (
            <div key={cow.id} className="embla__slide">
              <div className="cow-card">

                <img src={cow.img} className="cow-img" />

                <div className="cow-body">
                  <h3>{cow.name}</h3>
                  <p><b>Age:</b> {cow.age}</p>

                  <div className="btn-group">
                    <button onClick={() => handleAddToCart(cow, "monthly")}>
                      Adopt Monthly ₹{cow.price}
                    </button>

                    <button onClick={() => handleAddToCart(cow, "yearly")}>
                      Yearly ₹{cow.price * 12}
                    </button>

                    <button onClick={() => handleAddToCart(cow, "custom")}>
                      Custom Donation
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* CART SECTION */}
      {cart && !submitted && (
        <div className="cart-box">
          <h2>Adoption Cart</h2>

          <div className="cart-item">
            <img src={cart.img} className="cart-img" />
            <div>
              <h3>{cart.name}</h3>
              <p>Amount Selected: <b>₹{cart.selectedAmount}</b></p>
            </div>
          </div>

          {/* FORM */}
          <form className="adopt-form" onSubmit={handleSubmit}>

            <input placeholder="Full Name" required />
            <input placeholder="Email" type="email" required />
            <input placeholder="Phone Number" required />
            <input placeholder="City" required />

            {/* QR SCANNER */}
            <div className="qr-box">
              <h3>Scan & Pay</h3>
              <img src="/assets/gpay-qr.png" className="qr-img" />
              <p>UPI ID: <b>yourupi@oksbi</b></p>
            </div>

            {/* PAYMENT SCREENSHOT */}
            <div className="upload-box">
              <label>Upload Payment Screenshot</label>
              <input
                type="file"
                accept="image/*"
                required
                onChange={(e) => setPaymentSS(e.target.files[0])}
              />
            </div>

            <button className="submit-btn">Submit & Get Certificate</button>
          </form>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {submitted && (
        <div className="success-popup">
          <h2>🎉 Thank You for Adopting!</h2>
          <p>Your adoption is recorded.  
          A confirmation and certificate will be emailed.</p>
        </div>
      )}

    </div>
  );
}
