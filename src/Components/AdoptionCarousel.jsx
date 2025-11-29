import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./AdoptionCarousel.css";

const cattle = [
  {
    id: 1,
    name: "Sushmita",
    type: "Cow",
    age: "7 years 2 months",
    injury: "Cancer",
    img: "/assets/adopt1.jpg",
    price: 1000
  },
  {
    id: 2,
    name: "Gauri",
    type: "Cow",
    age: "5 years 10 months",
    injury: "Leg Fracture",
    img: "/assets/adopt2.jpg",
    price: 1200
  },
  {
    id: 3,
    name: "Nandi",
    type: "Bull",
    age: "6 years",
    injury: "Weakness",
    img: "/assets/adopt3.jpg",
    price: 1500
  },
    {
    id: 5,
    name: "Sushmita",
    type: "Cow",
    age: "7 years 2 months",
    injury: "Cancer",
    img: "/assets/adopt1.jpg",
    price: 1000
  },
    {
    id: 6,
    name: "Sushmita",
    type: "Cow",
    age: "7 years 2 months",
    injury: "Cancer",
    img: "/assets/adopt1.jpg",
    price: 1000
  },
    {
    id: 7,
    name: "Sushmita",
    type: "Cow",
    age: "7 years 2 months",
    injury: "Cancer",
    img: "/assets/adopt1.jpg",
    price: 1000
  }
];

export default function AdoptionCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });

  const handlePayment = (name, monthlyAmount) => {
    const options = {
      key: "rzp_test_123456789", // Replace with your Razorpay key
      amount: monthlyAmount * 100,
      currency: "INR",
      name: "Mazi Guru Mauli Gomay Ashray",
      description: `Adoption Support for ${name}`,
      handler: function (response) {
        alert("Payment Successful! ID: " + response.razorpay_payment_id);
      },
      theme: { color: "#f5c242" },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="adopt-wrapper">
      <h2 className="adopt-title">Cattle You Can Adopt</h2>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {cattle.map((cow) => (
            <div className="embla__slide" key={cow.id}>
              <div className="adopt-card">
                
                <img src={cow.img} className="adopt-img" alt="" />

                <div className="adopt-content">
                  <h3 className="cow-name">{cow.name}</h3>

                  <p><strong>Type:</strong> {cow.type}</p>
                  <p><strong>Age:</strong> {cow.age}</p>
                  <p><strong>Condition:</strong> {cow.injury}</p>

                  <div className="price-box">
                    <span>₹{cow.price}/month</span>
                  </div>

                  <button
                    className="adopt-btn"
                    onClick={() => handlePayment(cow.name, cow.price)}
                  >
                    Adopt Monthly
                  </button>

                  <button
                    className="adopt-btn-secondary"
                    onClick={() => handlePayment(cow.name, cow.price * 12)}
                  >
                    Adopt Yearly
                  </button>

                  <button
                    className="adopt-btn-custom"
                    onClick={() => handlePayment(cow.name, 500)}
                  >
                    Custom Donation
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
