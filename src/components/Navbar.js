import React, { useState, useEffect } from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">

        {/* 🔥 LOGO */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" className="logo-img" />
        </a>

        {/* 🔥 TOGGLE BUTTON */}
        <button
          className="navbar-toggler"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🔥 NAV MENU */}
        <div className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            {/* 🔥 SERVICES DROPDOWN */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => !isMobile && setDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setDropdownOpen(false)}
            >
              <a
                href="#services"
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  }
                }}
              >
                Services
              </a>

              <ul className={`dropdown-menu premium-dropdown ${dropdownOpen ? "show" : ""}`}>
                <li><Link className="dropdown-item" to="/personal-trainer" onClick={() => setDropdownOpen(false)}>Personal Training</Link></li>
                <li><Link className="dropdown-item" to="/gym-instructor" onClick={() => setDropdownOpen(false)}>Gym Intructor</Link></li>
                <li><Link className="dropdown-item" to="/equipment" onClick={() => setDropdownOpen(false)}>Gym Equipment sales & maintainence</Link></li>
                <li><Link className="dropdown-item" to="/game-room" onClick={() => setDropdownOpen(false)}>Games Attendend</Link></li>

              </ul>
            </li>

             <li className="nav-item">
              <a className="nav-link" href="#whyus">Why Us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#customers">Clients</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;