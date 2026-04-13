import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, message, hiddenField } = form;

    /* 🔒 BOT CHECK */
    if (hiddenField) {
      return;
    }

    /* 🔒 VALIDATION */
    if (!name || !phone || !service || !message) {
      alert("Please fill all fields");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    /* 🔒 RATE LIMIT (1 submission per session) */
    if (localStorage.getItem("contactSubmitted")) {
      alert("You have already submitted once!");
      return;
    }

    /* 🔥 FORMAT MESSAGE */
    const text = `Hello, I am ${name}
📞 Phone: ${phone}
📌 Service: ${service}
📝 Message: ${message}`;

    const encodedText = encodeURIComponent(text);

    /* 🔥 WHATSAPP URL */
    const whatsappURL = `https://api.whatsapp.com/send?phone=917021906580&text=${encodedText}`;

    /* OPEN WHATSAPP */
    window.open(whatsappURL, "_blank");

    /* SAVE FLAG */
    localStorage.setItem("contactSubmitted", "true");

    /* RESET FORM */
    setForm({
      name: "",
      phone: "",
      service: "",
      message: "",
      hiddenField: ""
    });
  };

  return (
    <section className="contact-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Get in touch with us for any service or inquiry
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">

            {/* Form */}
            <form className="contact-form" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
                onChange={handleChange}
              />

              {/* Service Dropdown */}
              <select
                name="service"
                required
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option>Personal Training</option>
                <option>Gym Instructor</option>
                <option>Gym Equipment</option>
                <option>Games Room Attendant</option>
              </select>

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                onChange={handleChange}
              ></textarea>

              <button type="submit">
                Send via WhatsApp
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;