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
      <section className="pt-content container">
        <h2>About Game Room Service</h2>
        <p>
          Our trained staff provide comprehensive supervision and management of clubhouse game rooms, ensuring smooth and efficient daily operations. From overseeing gaming activities to maintaining discipline within the space, our team ensures a safe, organized, and enjoyable environment for all members. We conduct routine equipment inspections and upkeep to ensure all gaming facilities remain in excellent working condition, reducing downtime and enhancing user experience.

In addition to equipment maintenance, our staff manage structured activity schedules, ensuring fair usage and proper coordination of recreational facilities. We also offer prompt and responsive member assistance, addressing queries, guiding users, and maintaining a welcoming atmosphere. With a strong focus on professionalism, cleanliness, and operational efficiency, our services are designed to enhance the overall quality and engagement of clubhouse recreational areas, creating a well-managed and enjoyable experience for residents.
        </p>




  {/* 🔹 Premium Benefits Section */}
<div className="container my-5">
  <div className="row g-4">

    {/* Key Benefits */}
    <div className="col-lg-6">
      <div className="card border-0 shadow-lg h-100 rounded-4">
        <div className="card-body p-4">

          <h4 className="fw-bold mb-4 text-dark">
            <span className="me-2">✨</span>Key Benefits
          </h4>

          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <span className="text-success me-2">✔</span>
              <span>Improved facility management</span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <span className="text-success me-2">✔</span>
              <span>Safe and organized environment</span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <span className="text-success me-2">✔</span>
              <span>Better member satisfaction</span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <span className="text-success me-2">✔</span>
              <span>Reduced equipment damage</span>
            </li>
            <li className="d-flex align-items-start">
              <span className="text-success me-2">✔</span>
              <span>Efficient daily operations</span>
            </li>
          </ul>

        </div>
      </div>
    </div>

    {/* Who Can Benefit */}
    <div className="col-lg-6">
      <div className="card border-0 shadow-lg h-100 rounded-4">
        <div className="card-body p-4">

          <h4 className="fw-bold mb-4 text-dark">
            <span className="me-2">🏢</span>Who Can Benefit?
          </h4>

          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <span className="text-primary me-2">✔</span>
              <span>Residential Societies</span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <span className="text-primary me-2">✔</span>
              <span>Clubhouses</span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <span className="text-primary me-2">✔</span>
              <span>Sports Complexes</span>
            </li>
            <li className="d-flex align-items-start">
              <span className="text-primary me-2">✔</span>
              <span>Recreational Centers</span>
            </li>
          </ul>

        </div>
      </div>
    </div>

  </div>
</div>


        <div className="pt-features">
          <div className="feature">
  <span>🎮</span>
  <h4>Game Supervision</h4>
  <p>Professional supervision to ensure safe, organized, and enjoyable gaming activities for all members.</p>
</div>

<div className="feature">
  <span>🧹</span>
  <h4>Clean Maintenance</h4>
  <p>Regular cleaning and upkeep to maintain a hygienic and well-organized recreational environment.</p>
</div>

<div className="feature">
  <span>👨‍💼</span>
  <h4>Professional Staff</h4>
  <p>Trained and experienced staff delivering reliable management and quality service support.</p>
</div>

<div className="feature">
  <span>⏱</span>
  <h4>Timely Management</h4>
  <p>Efficient scheduling and operations to ensure smooth and timely management of all activities.</p>
</div>
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