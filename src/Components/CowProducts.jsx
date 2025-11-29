import React from "react";
import "./CowProducts.css";

export default function CowProducts() {
  return (
    <section className="products-section">
      <div className="container products-inner">

        {/* TITLE */}
        <h2 className="products-title">
          Production of Natural Cow-Based Products
        </h2>

        <p className="products-subtitle">
          We manufacture traditional and chemical-free products made from cow dung, 
          cow urine, and ghee. These products support the goshala financially and 
          promote natural living.
        </p>

        <div className="products-grid">

          {/* LEFT COLUMN */}
          <div className="product-box">
            <h3 className="product-heading">Wellness & Home Care</h3>
            <ul className="product-list">
              <li>Cow Ghee</li>
              <li>Tooth Powder</li>
              <li>Soap, Handwash, Shampoo</li>
              <li>Incense Sticks, Phenyl</li>
              <li>Foot Pads</li>
              <li>Pain-Relief & Hair Oils</li>
            </ul>
          </div>

          {/* RIGHT COLUMN */}
          <div className="product-box">
            <h3 className="product-heading">Special Cow-Based Products</h3>
            <ul className="product-list">
              <li>Cow-Dung Wood Logs</li>
              <li>Souvenir Gobar Bricks</li>
              <li>35+ Cow-Urine Extracts (incl. anti-radiation chip)</li>
              <li>Natural Farming Solutions (e.g., Phulitraj)</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
