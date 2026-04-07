import React from "react";
import "./ServiceDetail.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import img from "../../assests/img5.jpg";
import GE1 from "../../assests/GE1.jpg";
import GE2 from "../../assests/GE2.jpg";
import GE3 from "../../assests/GE3.jpg";


function GymEquipment() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="pt-hero"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img}) center/cover no-repeat`,
        }}
      >
        <div className="pt-overlay">
          <h1>Gym Equipment & AMC</h1>
          <p>Branded equipment with complete maintenance support.</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pt-gallery pt-container">
        <img src={GE1}/>
        <img src={GE2}/>
        <img src={GE3}/>
      </section>

      {/* CONTENT */}
      <section className="pt-container pt-content">
        <h2>About Equipment & AMC</h2>
        <p>
          We supply high-quality branded gym equipment along with Annual
          Maintenance Contracts (AMC). This ensures your clubhouse gym stays
          fully functional without downtime.
        </p>

        <div className="pt-features">
          <div className="feature">🏋️ Branded Equipment</div>
          <div className="feature">🔧 Regular Maintenance</div>
          <div className="feature">⚡ Quick Repairs</div>
          <div className="feature">📅 AMC Support</div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-cta">
        <h2>Upgrade Your Gym Setup</h2>
        <p>Get premium equipment with maintenance support.</p>
        <a href="/#contact" className="cta-btn">Contact Us</a>
      </section>

      <Footer />
    </>
  );
}

export default GymEquipment;