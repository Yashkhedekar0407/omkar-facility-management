import React from "react";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <h4 className="footer-title">Omkar Facility</h4>
            <p className="footer-desc">
              We provide professional facility management services including
              personal training, gym instructors, equipment solutions, and
              recreational staff mainly for club houses.
            </p>

            <ul className="footer-services">
              <li>Personal Training</li>
              <li>Gym Instructor</li>
              <li>Equipment Sales & services</li>
              <li>Games Room Attendant</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <h5 className="footer-subtitle">Contact Us</h5>

            <p>📍 Jogeshwari,Mumbai, Maharashtra, India</p>
            <p>📞 +91 7021906580</p>
            <p>✉️ omkarfacilitymanagement@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-12 col-lg-4 mb-4">
            <h5 className="footer-subtitle">Quick Links</h5>

            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom text-center">
        <p>© 2026 Omkar Facility Management. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;