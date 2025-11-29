import React, { useState, useMemo } from "react";
import "./AdoptionCarousel.css";

/*
  Mock payment flow:
  - This file computes coverage % / days covered
  - Replace mockPayment() with real payment gateway integration
*/

export default function AdoptionModal({ item, onClose }) {
  const defaultMonthly = item.monthlyCost || 7500;
  const [mode, setMode] = useState("monthly"); // monthly | yearly | custom
  const [amount, setAmount] = useState(defaultMonthly);
  const [recurring, setRecurring] = useState(false); // whether user wants monthly subscription

  // derived values
  const coverage = useMemo(() => {
    return Math.min(100, Math.round((amount / defaultMonthly) * 100));
  }, [amount, defaultMonthly]);

  const daysCovered = useMemo(() => {
    return Math.max(0, Math.round((amount / defaultMonthly) * 30));
  }, [amount, defaultMonthly]);

  const onSelectPlan = (plan) => {
    setMode(plan);
    if (plan === "monthly") setAmount(defaultMonthly);
    if (plan === "yearly") setAmount(Math.round(defaultMonthly * 12 * 0.9)); // 10% discount
    if (plan === "custom") setAmount(defaultMonthly);
  };

  const mockPayment = async () => {
    // Replace with real gateway code (Razorpay / Stripe Checkout / PayU)
    // Send item.id and amount to backend to create order if required.
    alert(`Mock payment\nAdopting: ${item.name}\nAmount: ₹${amount}\nRecurring: ${recurring}`);
    onClose();
  };

  return (
    <div className="modal-wrap" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card" role="document">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        <div className="modal-hero" style={{ backgroundImage: `url(${item.image})` }} />

        <div className="modal-body">
          <h3>{item.name} — {item.type}</h3>
          <p className="muted">{item.age} • {item.notes}</p>

          <div className="plans">
            <button className={`plan ${mode === "monthly" ? "active" : ""}`} onClick={() => onSelectPlan("monthly")}>
              Monthly ₹{defaultMonthly.toLocaleString()}
            </button>
            <button className={`plan ${mode === "yearly" ? "active" : ""}`} onClick={() => onSelectPlan("yearly")}>
              Yearly (10% off) ₹{Math.round(defaultMonthly * 12 * 0.9).toLocaleString()}
            </button>
            <button className={`plan ${mode === "custom" ? "active" : ""}`} onClick={() => onSelectPlan("custom")}>
              Custom
            </button>
          </div>

          <div className="amount-row">
            <label>Amount (₹)</label>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
            />
          </div>

          <div className="impact">
            <div>Coverage: <strong>{coverage}%</strong></div>
            <div>Days Covered: <strong>{daysCovered} days</strong></div>
            <div className="muted">This shows how your contribution helps this animal's monthly care.</div>
          </div>

          <div className="recurring-row">
            <label>
              <input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.target.checked)} />
              &nbsp;Make this a monthly recurring donation
            </label>
          </div>

          <div className="modal-actions">
            <button className="btn primary" onClick={mockPayment}>Pay ₹{amount.toLocaleString()}</button>
            <button className="btn outline" onClick={() => { navigator.clipboard?.writeText(window.location.href); alert("Link copied!"); }}>Share</button>
          </div>

        </div>
      </div>
    </div>
  );
}
