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
        <img src={GE1} alt="img"/>
        <img src={GE2} alt="img"/>
        <img src={GE3} alt="img"/>
      </section>

      {/* CONTENT */}
      <section className="pt-content container">
        <h2>About Equipment & AMC</h2>
        <p>
         Upgrade your fitness facility with our high-quality gym equipment solutions in Mumbai. We provide premium fitness equipment along with complete installation, maintenance, and technical support services to ensure smooth and efficient operations. Whether you are setting up a new gym or upgrading an existing one, we deliver reliable and long-lasting equipment tailored to your requirements.

We also offer comprehensive and non-comprehensive AMC (Annual Maintenance Contract) services, ensuring regular servicing, preventive maintenance, and quick troubleshooting support to keep your equipment in optimal working condition with minimal downtime.
        </p>

        <div className="pt-features">
          <div className="feature">
            <span>🏋️</span>
              <h4>Branded Equipment</h4>
              <p>High-quality, durable fitness equipment from trusted brands for long-lasting performance.</p>
          </div>
          <div className="feature">
             <span>🔧</span>
             <h4>Regular Maintenance</h4>
              <p>Scheduled servicing to ensure smooth operation and extend the lifespan of gym equipment.</p>
          </div>
          <div className="feature">
             <span>⚡</span>
            <h4>Quick Repairs</h4>
            <p>Fast troubleshooting and repair services to minimize downtime and maintain efficiency.</p>
          </div>
          <div className="feature">
            <span>📅</span>
             <h4>AMC Support</h4>
             <p>Comprehensive and non-comprehensive AMC plans for reliable maintenance and technical support.</p>
          </div>
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