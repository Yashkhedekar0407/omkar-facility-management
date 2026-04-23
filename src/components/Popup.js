import React, { useEffect, useState } from "react";
import "./Popup.css";
import popupImage from "../assests/omkar-ad.jpeg"; // your image

function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000); // ⏱️ 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup-content">

        {/* ❌ Close Button */}
        <span className="close-btn" onClick={() => setShow(false)}>
          &times;
        </span>

        {/* 🖼️ Image */}
        <img src={popupImage} alt="10 Years Celebration" />

      </div>
    </div>
  );
}

export default Popup;