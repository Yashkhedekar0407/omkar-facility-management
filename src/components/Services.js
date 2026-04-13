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
      desc: "Get expert guidance from certified personal trainers offering customized fitness training programs tailored to your goals. Whether you want weight loss, muscle gain, or strength training, our gym trainers help you achieve results safely and effectively.",
      img: GI,
      path: "/personal-trainer",
    },
    {
      title: "Gym Instructor",
      desc: "Certified gym instructors for society clubhouses in Mumbai delivering personalized fitness training, structured workout programs, and expert guidance. Our professionals ensure strict gym discipline, proper equipment management, and accurate daily member records, creating a safe and well-organized fitness environment.",
      img: PT,
      path: "/gym-instructor",
    },
    {
      title: "Gym Equipment & AMC",
      desc: "We offer premium branded equipment with full maintenance support, including installation, routine servicing, timely repairs, and expert guidance to ensure smooth operation, durability, and maximum performance at all times.",
      img: GE,
      path: "/equipment",
    },
    {
      title: "Game Room Attendant",
      desc: "Trained staff oversee clubhouse game rooms, delivering seamless operations, routine equipment upkeep, structured activity management, and responsive member assistance to maintain a professional, organized, and engaging recreational environment.",
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