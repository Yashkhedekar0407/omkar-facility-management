import React from "react";
import { useNavigate } from "react-router-dom";
import PT from "../assests/PT.jpg";
import GI from "../assests/GI.jpg";
import GE from "../assests/GE.jpg";
import GA from "../assests/GA.jpg";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Personal Trainer",
      desc: "Certified trainers available daily for personalized fitness guidance.",
      img: GI,
      path: "/personal-trainer",
    },
    {
      title: "Gym Instructor",
      desc: "Professional instructors for smooth gym operations.",
      img: PT,
      path: "/gym-instructor",
    },
    {
      title: "Gym Equipment & AMC",
      desc: "Branded equipment with complete maintenance support.",
      img: GE,
      path: "/equipment",
    },
    {
      title: "Game Room Attendant",
      desc: "Dedicated staff to manage clubhouse game rooms.",
      img: GA,
      path: "/game-room",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Professional facility solutions for modern clubhouses
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              onClick={() => navigate(service.path)}
            >
              {/* IMAGE */}
              <div className="service-image">
                <img src={service.img} alt={service.title} />
                <div className="overlay"></div>
              </div>

              {/* CONTENT */}
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="read-more">View Details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;