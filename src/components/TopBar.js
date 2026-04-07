import React, { useEffect, useState } from "react";

const quotes = [
  "💪 Transform Your Body Today",
  "🏋️ Hire Certified Trainers",
  "🔥 20% OFF on Personal Training",
  "⚡ Start Your Fitness Journey Now"
];

function TopBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbar">
      <div className="topbar-content">
        <span>{quotes[index]}</span>

        <div className="topbar-actions">
          <a href="tel:+919876543210">📞 Call</a>
          <a href="https://wa.me/919876543210" target="_blank">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;