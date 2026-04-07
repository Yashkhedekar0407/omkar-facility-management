import React from "react";
import aboutImg from "../assests/banner.png";

function About() {
  return (
    <section className="about-section py-5">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-img-wrapper">
              <img src={aboutImg} alt="About Us" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">

            <h2 className="about-title">About Us</h2>

            <p className="about-desc">
              Omkar Facility Management Services provides professional and
              reliable solutions including personal training, gym instructors,
              equipment services, and recreational staff. We are committed to
              delivering quality services with a customer-first approach.
            </p>

            {/* MISSION */}
            <div className="about-box">
              <h5>🎯 Our Mission</h5>
              <p>
                To deliver high-quality facility and fitness services that
                enhance customer satisfaction and operational efficiency.
              </p>
            </div>

            {/* VISION */}
            <div className="about-box">
              <h5>🚀 Our Vision</h5>
              <p>
                To become a trusted leader in facility management by maintaining
                excellence, innovation, and long-term client relationships.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;