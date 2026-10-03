// Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the server.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>
            Contact Our <span>College</span>
          </h1>

          <p className="contact-description">
            Have questions about admissions, courses, fees or campus
            facilities? Our team is here to help you with all the
            information you need.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div>
                <h3>Visit Us</h3>
                <p>
                  GNM College of Nursing, Bhanashiware,
                  Shevgaon Road, Newasa, Tq - Newasa,
                  Dist - Ahmednagar, 414609 Maharashtra, India
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <h3>Call Us</h3>
                <a href="tel:+919876543210">
                  +91 9876543210
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>

              <div>
                <h3>Email Us</h3>

                <a href="mailto:1174office@msbte.ac.in">
                  contact@belhekarnursing.edu.in
                </a>
                
              </div>
            </div>

          </div>

          {/* SOCIAL MEDIA */}
          {/* <div className="contact-social">

            <h3>Follow Us</h3>

            <div className="social-icons">

              <a href="https://www.facebook.com/BELHEKAREDUCATIONALCAMPUS/" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="https://www.instagram.com/belhekar_clg_bhanshiware?igsh=OTIzNHhub2I3MG91" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="https://www.linkedin.com/login/?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fschool%2Fsulochana-belhekar-samajik-%26-bahuuddesheeya-shiksh%2Fabout%2F" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a href="https://api.whatsapp.com/send/?phone=917276461710&text&type=phone_number&app_absent=0" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>

            </div>

          </div> */}

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-box">

          <div className="form-heading">
            <span>ENQUIRY FORM</span>

            <h2>
              Send an <strong>Enquiry</strong>
            </h2>

            <p>
              Fill out the form below and our team will get back
              to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="input-group">
                <label>Your Name</label>

                <div className="input-box">
                  <i className="fa-regular fa-user"></i>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Phone Number</label>

                <div className="input-box">
                  <i className="fa-solid fa-phone"></i>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

            </div>

            <div className="input-group">
              <label>Email Address</label>

              <div className="input-box">
                <i className="fa-regular fa-envelope"></i>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>

              <div className="input-box">
                <i className="fa-solid fa-heading"></i>

                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Your Message</label>

              <div className="input-box textarea-box">
                <i className="fa-regular fa-message"></i>

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="send-btn">
              <span>Send Message</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>

            <p className="form-security">
              <i className="fa-solid fa-shield-halved"></i>
              Your information is safe and secure with us.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;