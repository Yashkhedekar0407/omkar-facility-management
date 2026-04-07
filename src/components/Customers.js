import React, { useState } from "react";

const societies = [
  { name: "The Reserve", location: "Worli" },
  { name: "Rajat Dhavalgiri", location: "Vile Parle" },
  { name: "Shivam Centrium", location: "Andheri" },
  { name: "Green Wooda", location: "Andheri" },
  { name: "Runwal Elina", location: "Andheri" },
  { name: "Romell Aether", location: "Goregaon" },
  { name: "Lalani Grandeur", location: "Malad" },
  { name: "Raj Splendour", location: "Vikhroli" },
  { name: "Alpine Sarova", location: "Kandivali" },
  { name: "Challengers", location: "Kandivali" },
  { name: "Samarpan Exotica", location: "Borivali" },
  { name: "Parinee Adney", location: "" },
  { name: "Sethia Sea View", location: "Goregaon" },
];

function Customers() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? societies : societies.slice(0, 8);

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="clients-title">Our Clients</h2>
        <p className="clients-subtitle">
          Trusted by premium societies across Mumbai
        </p>

        <div className="clients-grid">
          {visible.map((item, index) => (
            <div className="client-card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <h3>{item.name}</h3>
                  <p>{item.location}</p>
                </div>

                <div className="card-back">
                  <p>We manage clubhouse services here</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="show-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Clients"}
        </button>
      </div>
    </section>
  );
}

export default Customers;