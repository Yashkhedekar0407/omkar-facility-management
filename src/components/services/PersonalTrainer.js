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
               <img src={pt1} alt="img1"/>
               <img src={pt2} alt="img2"/>
               <img src={pt3} alt="img3"/>
      </section>

      {/* CONTENT */}
      <section className="pt-content container">
        <h2>About Our Personal Training Service in Mumbai/Pune</h2>
        <p>
         Achieve your fitness goals with our professional personal trainer services in Mumbai/Pune. Our certified gym trainers provide customized fitness training programs tailored to your body type, lifestyle, and goals. Whether you are looking for weight loss, muscle gain, strength training, or overall fitness improvement, we ensure safe, effective, and result-driven workouts.

Our personal training sessions include one-on-one coaching, personalized workout plans, and continuous motivation to help you stay consistent and achieve faster results. With expert guidance and proper techniques, we help reduce the risk of injury while maximizing your performance.

We offer flexible training options at your home, gym, or preferred location, making it convenient for you to stay fit without disrupting your schedule. Choose our experienced personal trainers in Mumbai and take the first step towards a healthier and stronger lifestyle.
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