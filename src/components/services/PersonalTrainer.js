import React from "react";
import "./ServiceDetail.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import img2 from "../../assests/img2.jpg";
import pt2 from "../../assests/pt2.jpg";
import pt3 from "../../assests/pt3.jpg";
import pt1 from "../../assests/GI.jpg";

function PersonalTrainer() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-hero" style={{
    background: `url(${img2}) center/cover no-repeat`,
  }}>
        <div className="pt-overlay">
          <h1>Personal Trainer Services</h1>
          <p>
            Professional, certified trainers to help residents achieve their
            fitness goals with personalized guidance.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pt-gallery pt-container">
               <img src={pt1}/>
               <img src={pt2}/>
               <img src={pt3}/>
      </section>

      {/* CONTENT */}
      <section className="pt-content container">
        <h2>About Our Personal Training</h2>
        <p>
          We provide certified personal trainers on a daily basis for clubhouses
          and residential societies. Our trainers focus on personalized fitness,
          proper techniques, and consistent results.
        </p>

        <div className="pt-features">
          <div className="feature">
            <span>💪</span>
            <h4>Personalized Training</h4>
            <p>Customized workouts based on individual fitness goals.</p>
          </div>

          <div className="feature">
            <span>📅</span>
            <h4>Daily Availability</h4>
            <p>Flexible trainer availability as per your requirement.</p>
          </div>

          <div className="feature">
            <span>🏋️</span>
            <h4>Professional Guidance</h4>
            <p>Focus on correct form, safety, and performance.</p>
          </div>

          <div className="feature">
            <span>✅</span>
            <h4>Certified Trainers</h4>
            <p>Experienced and well-trained professionals.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-cta">
        <h2>Upgrade Your Clubhouse Fitness Experience</h2>
        <p>Hire certified personal trainers for your society today.</p>
        <a href="/#contact" className="cta-btn">Contact Us</a>
      </section>

      <Footer />
    </>
  );
}

export default PersonalTrainer;