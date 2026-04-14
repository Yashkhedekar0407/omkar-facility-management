import React, { useState, useEffect } from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const goHomeTop = () => {
  setNavOpen(false);
  setDropdownOpen(false);

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 50);
};


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
        <Link className="navbar-brand" to="/" onClick={goHomeTop}>
          <img src={logo} alt="logo" className="logo-img" />
        </Link>

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
              <Link className="nav-link" to="/" onClick={goHomeTop}>Home</Link>
            </li>

            {/* 🔥 SERVICES DROPDOWN */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => !isMobile && setDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setDropdownOpen(false)}
            >
              <Link
                to="/#services"
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  }
                }}
              >
                Services
              </Link>

              <ul className={`dropdown-menu premium-dropdown ${dropdownOpen ? "show" : ""}`}>
                <li><Link className="dropdown-item" to="/personal-trainer"
                 onClick={() =>{ setDropdownOpen(false);
                  setNavOpen(false);
                 }}>Personal Training</Link></li>
                <li><Link className="dropdown-item" to="/gym-instructor" onClick={() =>{ setDropdownOpen(false);
                  setNavOpen(false);
                 }}>Gym Intructor</Link></li>
                <li><Link className="dropdown-item" to="/equipment" onClick={() =>{ setDropdownOpen(false);
                  setNavOpen(false);
                 }}>Gym Equipment sales & maintainence</Link></li>
                <li><Link className="dropdown-item" to="/game-room" onClick={() =>{ setDropdownOpen(false);
                  setNavOpen(false);
                 }}>Games Attendend</Link></li>

              </ul>
            </li>

          <li className="nav-item">
            <Link className="nav-link" to="/#whyus">Why Us</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/#customers">Clients</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/#about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/#contact">Contact</Link>
          </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;