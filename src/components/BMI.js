import React, { useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = height / 100; // cm → meter
    const bmiValue = (weight / (h * h)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setStatus("Normal");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  // 🔥 WhatsApp integration
  const handleWhatsApp = () => {
    const text = `Hello, my BMI is ${bmi}. I want guidance for ${status} condition.`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bmi-section py-5">
      <div className="container text-center">

        <h2 className="bmi-title">Check Your BMI</h2>
        <p className="bmi-subtitle">
          Know your fitness level instantly
        </p>

        <div className="bmi-card">

          {/* Inputs */}
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6">
              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>

          {/* Button */}
          <button onClick={calculateBMI} className="bmi-btn mt-3">
            Calculate BMI
          </button>

          {/* Result */}
          {bmi && (
            <div className="bmi-result mt-4">
              <h4>Your BMI: {bmi}</h4>
              <p className={`bmi-status ${status.toLowerCase()}`}>
                {status}
              </p>

              <button
                className="bmi-whatsapp-btn"
                onClick={handleWhatsApp}
              >
                Get Trainer on WhatsApp
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default BMI;