import './App.css';
import Navbar from "./components/Navbar";
//import Hero from "./components/Hero";
import HeroNew from "./components/HeroNew";
import Services from "./components/Services";
import About from "./components/About";
import Feedback from './components/Feedback';
import BMI from './components/BMI';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Clients from './components/Clients';
import WhyUs from './components/WhyUs';
import Customers from './components/Customers';

import { Routes, Route } from "react-router-dom";

import PersonalTrainer from './components/services/PersonalTrainer';
import GymInstructor from './components/services/GymInstructor';
import GymEquipment from './components/services/GymEqipment';
import GamesRoom from './components/services/GamesRoom';

import ScrollToTop from "./components/ScrollToTop";
import ScrollToSection from './components/ScrollToSection';

import Popup from './components/Popup';


/* ✅ HOME PAGE COMPONENT (your current structure) */
function HomePage() {
  return (
    <>
     <Popup/>
      <section id="hero">
        <HeroNew />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="whyus">
        <WhyUs />
      </section>

      <section id="customers">
        <Customers />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="feedback">
        <Feedback />
      </section>

      <section id="client">
        <Clients />
      </section>

      <section id="bmi">
        <BMI />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

/* ✅ MAIN APP */
function App() {
  return (
    <>
    
      <ScrollToTop/>
      <ScrollToSection/>
    
      <Navbar /> {/* Navbar always visible */}

      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* SERVICE PAGES */}
        <Route path="/personal-trainer" element={<PersonalTrainer />} />
        <Route path="/gym-instructor" element={<GymInstructor />} />
        <Route path="/equipment" element={<GymEquipment />} />
        <Route path="/game-room" element={<GamesRoom />} />
      </Routes>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/917021906580"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default App;
