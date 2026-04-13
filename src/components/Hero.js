import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// 🎥 Add video in assets folder
import heroVideo from "../assests/Hero.mp4";

function Hero() {
  return (
    <div className="hero-wrapper">

      {/* 🎥 VIDEO BACKGROUND */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* 🔥 OVERLAY */}
      <div className="hero-overlay"></div>

      {/* 🔥 CONTENT */}
      <div className="hero-content container">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Omkar Facility Management Services
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Delivering reliable and high-quality facility services tailored for modern clubhouses and residential communities in Mumbai/Pune.
        </motion.p>

        {/* 🔥 TYPING QUOTES */}
        <TypeAnimation
          sequence={[
            "Push yourself beyond limits 💪",
            2000,
            "Discipline beats motivation 🔥",
            2000,
            "Train hard, stay strong 🏋️",
            2000,
            "Fitness is a lifestyle 🏃",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="hero-typing"
        />

        {/* 🔥 BUTTONS */}
        <div className="hero-buttons">

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="hero-btn secondary"
            onClick={() => {
      document.getElementById("services").scrollIntoView({
        behavior: "smooth",
      });
    }}
          >
            
            Our Services
          </motion.button>
        </div>

      </div>
    </div>
  );
}

export default Hero;