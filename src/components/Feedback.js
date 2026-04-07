import React, { useEffect } from "react";
import { Carousel } from "bootstrap";

const feedbacks = [
  {
    name: "Rahul Sharma",
    text: "Excellent service! Trainers are highly professional and supportive.",
  },
  {
    name: "Priya Mehta",
    text: "Very satisfied with gym equipment quality and maintenance service.",
  },
  {
    name: "Amit Verma",
    text: "Reliable and punctual staff. Highly recommended for facility management.",
  },
];

function Feedback() {

  // 🔥 FIX: manually start carousel (important for React)
  useEffect(() => {
    const element = document.querySelector("#feedbackCarousel");

    if (element) {
      new Carousel(element, {
        interval: 3000,
        ride: "carousel",
        pause: false,
        wrap: true
      });
    }
  }, []);

  return (
    <section className="feedback-section py-5">
      <div className="container text-center">

        <h2 className="mb-4">What Our Clients Say</h2>

        <div
          id="feedbackCarousel"
          className="carousel slide carousel-fade"
        >
          <div className="carousel-inner">

            {feedbacks.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="feedback-card">
                  <p className="feedback-text">“{item.text}”</p>
                  <h6 className="feedback-name">— {item.name}</h6>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Feedback;