import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import StatsBar from "./StatsBar";
import "./Hero.css";
import heroVideo from "../assests/Hero.mp4";

function Hero() {
  return (
    <div className="hero-wrapper">

      {/* 🎉 Badge */}
    {/*  <div className="anniversary-badge">
        🎉 10 Years of Excellence
      </div>*/}

      {/* 🎥 Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content container">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Omkar <span>Facility Management Services</span>
        </motion.h1>

        {/* 🎉 Highlight Line */}
        <motion.h2
          className="hero-anniversary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ⭐ Celebrating <span>10 Years</span> of Excellence ⭐
        </motion.h2>

        <p className="hero-subtitle">
          Delivering reliable and high-quality facility services tailored for
          modern clubhouses, corporates and residential communities in Mumbai/Pune.
        </p>

        {/* Typing */}
        <TypeAnimation
          sequence={[
            "Trusted for 10 Years 🏆",
            2000,
            "Delivering Excellence Since 2016 🚀",
            2000,
            "Your Facility, Our Responsibility 🔧",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="hero-typing"
        />

        {/* Buttons */}
        <div className="hero-buttons">
         

    
        </div>
      </div>

      {/* Stats */}
      <StatsBar />
    </div>
  );
}

export default Hero;