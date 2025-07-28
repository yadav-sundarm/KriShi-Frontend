import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div className="landing">
      <section className="hero">
        <h1>Krishi Reboot</h1>
        <p className="tagline">Smart Farming for Small Farmers</p>
        <p>Affordable crop protection & soil testing — anywhere, anytime.</p>
        <Link to="/products">
          <button className="cta">Explore Products</button>
        </Link>
      </section>

      <section className="highlights">
        <div className="highlight-card">
          <h3>☀️ AgriShield Dome</h3>
          <p>Foldable, solar-powered protection from rain & heat.</p>
        </div>
        <div className="highlight-card">
          <h3>🧪 Soil & Water Mini Kit</h3>
          <p>Instant pH and nutrient test — no lab needed.</p>
        </div>
      </section>

      <section className="value">
        <h2>Why Krishi Reboot?</h2>
        <ul>
          <li>✅ 30% higher yield</li>
          <li>✅ Portable & cost-effective</li>
          <li>✅ App + SMS alerts for easy use</li>
        </ul>
      </section>

      <section className="final-cta">
        <p>Join 10 lakh farmers in adopting smart farming.</p>
        <Link to="/products">
          <button className="cta">Get Started</button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
