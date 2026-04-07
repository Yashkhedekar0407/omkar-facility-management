import React from "react";
import "./ServiceDetail.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import img from "../../assests/img4.jpg";
import GI1 from "../../assests/GI1.jpg";
import GI2 from "../../assests/GI2.jpg";
import GI3 from "../../assests/GI3.jpg";


function GymInstructor() {
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
          <h1>Gym Instructor Services</h1>
          <p>Professional instructors to manage and guide gym members.</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pt-gallery pt-container">
        <img src={GI1}/>
        <img src={GI2}/>
        <img src={GI3}/>
      </section>

      {/* CONTENT */}
      <section className="pt-container pt-content">
        <h2>About Our Gym Instructor Service</h2>
        <p>
          We provide experienced gym instructors on a monthly basis to ensure
          smooth gym operations in clubhouses. Our instructors assist members,
          maintain discipline, and ensure proper use of equipment.
        </p>

        <div className="pt-features">
          <div className="feature">🏋️ Equipment Guidance</div>
          <div className="feature">📋 Daily Monitoring</div>
          <div className="feature">👨‍🏫 Member Assistance</div>
          <div className="feature">✅ Professional Staff</div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-cta">
        <h2>Need a Gym Instructor?</h2>
        <p>We provide trained professionals for your society gym.</p>
        <a href="/#contact" className="cta-btn">Contact Us</a>
      </section>

      <Footer />
    </>
  );
}

export default GymInstructor;