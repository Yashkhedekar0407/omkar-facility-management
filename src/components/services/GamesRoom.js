import React from "react";
import "./ServiceDetail.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import img from "../../assests/img6.jpg";
import GA1 from "../../assests/GA1.jpg";
import GA2 from "../../assests/GA2.jpg";
import GA3 from "../../assests/GA3.jpg";


function GamesRoom() {
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
          <h1>Game Room Attendant</h1>
          <p>Professional staff to manage and maintain game rooms.</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pt-gallery pt-container">
        <img src={GA1}/>
        <img src={GA2}/>
        <img src={GA3}/>
      </section>

      {/* CONTENT */}
      <section className="pt-container pt-content">
        <h2>About Game Room Service</h2>
        <p>
          We provide dedicated staff to manage clubhouse game rooms. Our
          attendants ensure smooth operation, maintain discipline, and assist
          residents in using game facilities.
        </p>

        <div className="pt-features">
          <div className="feature">🎮 Game Supervision</div>
          <div className="feature">🧹 Clean Maintenance</div>
          <div className="feature">👨‍💼 Professional Staff</div>
          <div className="feature">⏱ Timely Management</div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-cta">
        <h2>Manage Your Game Room Professionally</h2>
        <p>Hire trained staff for smooth operations.</p>
        <a href="/#contact" className="cta-btn">Contact Us</a>
      </section>

      <Footer />
    </>
  );
}

export default GamesRoom;