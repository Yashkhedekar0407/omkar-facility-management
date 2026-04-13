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
      <section className="pt-content container">
        <h2>About Our Gym Instructor Service in Mumbai/Pune</h2>
        <p>
          Our professional gym instructors in Mumbai/Pune provide expert fitness training, personalized workout plans, and proper exercise guidance to help you achieve your health and fitness goals. Whether you aim for weight loss, muscle building, or strength improvement, our certified instructors ensure safe and effective training techniques tailored to your fitness level.

With a focus on discipline, consistency, and correct posture, our gym instructors help reduce the risk of injury while maximizing results. We also assist in maintaining gym equipment, ensuring a clean and organized workout environment for a better fitness experience.

Choose our experienced gym instructors in Mumbai/Pune for reliable, result-driven fitness training and take a step towards a healthier, stronger, and more active lifestyle.
        </p>

       <div className="pt-features">
          <div className="feature">
            <span>🏋️</span> 
            <h4>Equipment Guidance</h4> 
            <p>Proper guidance on safe and effective use of gym equipment for optimal workout results.</p>
          </div>

          <div className="feature">
            <span>📋</span> 
            <h4>Daily Monitoring</h4>
            <p>Regular tracking of member activities and progress to ensure consistency and improved performance.</p> 
          </div>

          <div className="feature">
            <span>👨‍🏫</span> 
            <h4>Member Assistance</h4> 
            <p>Dedicated support and guidance to help members follow correct workout routines and achieve fitness goals.</p>
          </div>

           <div className="feature">
            <span>✅</span> 
            <h4>Professional Staff</h4>
            <p>Skilled and certified gym instructors delivering reliable and high-quality fitness training services</p> 
          </div>
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