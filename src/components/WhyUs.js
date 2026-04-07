import React from "react";

const points = [
  {
    title: "Professional Staff",
    desc: "Highly trained and reliable team",
  },
  {
    title: "Flexible Services",
    desc: "Daily & monthly staffing options",
  },
  {
    title: "Trusted Partner",
    desc: "Preferred by residential societies",
  },
  {
    title: "End-to-End Solutions",
    desc: "Complete clubhouse management",
  },
];

function WhyUs() {
  return (
    <section className="whyus-section">
      <div className="container">
        <h2 className="whyus-title">Why Choose Us</h2>

        <div className="whyus-layout">
          
          {/* LEFT SIDE POINTS */}
          <div className="whyus-side left">
            {points.slice(0, 2).map((item, index) => (
              <div className="whyus-box" key={index}>
                <div className="icon"></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="whyus-center">
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
              alt="center"
            />
            
          </div>

          {/* RIGHT SIDE POINTS */}
          <div className="whyus-side right">
            {points.slice(2, 4).map((item, index) => (
              <div className="whyus-box" key={index}>
                <div className="icon"></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;