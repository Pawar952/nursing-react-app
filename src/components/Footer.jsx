import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="footer">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}
      <div className="footer-container">

        {/* =========================================
            ABOUT
        ========================================= */}
        <div className="footer-about">

          <div className="footer-logo">
            <img
              src="/images/logo.png"
              alt="GNM College of Nursing Logo"
            />
          </div>

          <h2>GNM College of Nursing</h2>

          <p>
            Empowering students with quality nursing education, practical
            clinical training and professional values to serve society
            with compassion.
          </p>

          {/* Social Icons */}
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

            <a href="https://www.youtube.com/@Belhekar_Group_of_Institutes" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>

          </div>

        </div>


        {/* =========================================
            QUICK LINKS
        ========================================= */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">
            <i className="fa-solid fa-angle-right"></i>
            Home
          </Link>

          <Link to="/about">
            <i className="fa-solid fa-angle-right"></i>
            About Us
          </Link>

          <Link to="/director-message">
            <i className="fa-solid fa-angle-right"></i>
            Director's Message
          </Link>

          <Link to="/principal-message">
            <i className="fa-solid fa-angle-right"></i>
            Principal's Message
          </Link>

          <Link to="/academics">
            <i className="fa-solid fa-angle-right"></i>
            Academics
          </Link>

          <Link to="/hospital">
            <i className="fa-solid fa-angle-right"></i>
            Hospital
          </Link>

        </div>


        {/* =========================================
            IMPORTANT LINKS
        ========================================= */}
        <div className="footer-links">

          <h3>Important Links</h3>

          <Link to="/admissions">
            <i className="fa-solid fa-angle-right"></i>
            Admissions
          </Link>

          <Link to="/fee-structure">
            <i className="fa-solid fa-angle-right"></i>
            Fee Structure
          </Link>

          <Link to="/gallery">
            <i className="fa-solid fa-angle-right"></i>
            Gallery
          </Link>

          <Link to="/notices">
            <i className="fa-solid fa-angle-right"></i>
            Notices
          </Link>

          <Link to="/infrastructure">
            <i className="fa-solid fa-angle-right"></i>
            Infrastructure
          </Link>

          <Link to="/contact">
            <i className="fa-solid fa-angle-right"></i>
            Contact Us
          </Link>

        </div>


        {/* =========================================
            CONTACT
        ========================================= */}
        <div className="footer-contact">

          <h3>Contact Us</h3>

          {/* Address */}
          <div className="contact-item">

            <span className="contact-icon">
              <i className="fa-solid fa-location-dot"></i>
            </span>

            <p>
              GNM College of Nursing,
              <br />
              Bhanashiware, Shevgaon Road, Newasa,
              <br />
              Taq - Newasa,
              <br />
              Dist - Ahmednagar, 414609
              <br />
              Maharashtra, India
            </p>

          </div>


          {/* Phone */}
          <div className="contact-item">

            <span className="contact-icon">
              <i className="fa-solid fa-phone"></i>
            </span>

            <p>
              +91 9876543210
            </p>

          </div>


          {/* Email */}
          <div className="contact-item">

            <span className="contact-icon">
              <i className="fa-solid fa-envelope"></i>
            </span>

            <p>
             contact@belhekarnursing.edu.in
              
            </p>

          </div>

        </div>

      </div>


      {/* =========================================
          NEWSLETTER + MAP SECTION
      ========================================= */}
      <div className="footer-extra-section">

        {/* =========================================
            NEWSLETTER
        ========================================= */}
        <div className="newsletter-box">

          <div className="newsletter-icon">
            <i className="fa-solid fa-envelope-open-text"></i>
          </div>

          <div className="newsletter-content">

            <span className="newsletter-label">
              STAY CONNECTED
            </span>

            <h3>Stay Updated With Us</h3>

            <p>
              Subscribe to receive college updates, admission notices
              and important announcements.
            </p>

            <form
              className="newsletter-form"
              onSubmit={handleSubscribe}
            >

              <div className="newsletter-input-wrapper">

                <i className="fa-solid fa-envelope"></i>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

              <button type="submit">
                Subscribe
                <i className="fa-solid fa-paper-plane"></i>
              </button>

            </form>


            {/* Subscribe Message */}
            {message && (
              <div className="subscribe-message">
                <i className="fa-solid fa-circle-check"></i>
                {message}
              </div>
            )}


            {/* Newsletter Points */}
            <div className="newsletter-points">

              <span>
                <i className="fa-solid fa-check"></i>
                College Updates
              </span>

              <span>
                <i className="fa-solid fa-check"></i>
                Admission Notices
              </span>

              <span>
                <i className="fa-solid fa-check"></i>
                Important News
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            GOOGLE MAP
        ========================================= */}
        <div className="location-box">

          <div className="location-heading">

            <div className="location-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <div>
              <span>FIND US</span>
              <h3>Our Location</h3>
            </div>

          </div>


          {/* Map */}
          <div className="footer-map">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30089.663124831906!2d74.956817!3d19.4896897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb3da80fc4496f%3A0x720ba113691c3428!2sMH%20SH%2044%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1790811603897!5m2!1sen!2sin"
              title="GNM College of Nursing Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>


          {/* Map Bottom */}
          <div className="map-bottom">

            <div className="map-address">

              <i className="fa-solid fa-location-dot"></i>

              <p>
                GNM College of Nursing,
                <br />
                Bhanashiware, Shevgaon Road,
                <br />
                Newasa, Maharashtra - 414609
              </p>

            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=GNM%20College%20of%20Nursing%2C%20Bhanashiware%2C%20Shevgaon%20Road%2C%20Newasa%2C%20Maharashtra%20414609"
              target="_blank"
              rel="noopener noreferrer"
              className="open-map-btn"
            >
              Open in Maps
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM FOOTER
      ========================================= */}
      <div className="footer-bottom">

        {/* Copyright */}
        <p>
          © 2026 <strong>GNM College of Nursing</strong>.
          All Rights Reserved.
        </p>


        {/* Bottom Links */}
        <div className="bottom-links">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>


        {/* Developer */}
        <div className="developer-info">

          <span>
            Designed &amp; Developed with
          </span>

          <div className="developer-brand">

            <img
              src="/images/weblogo.jpg"
              alt="Websums Software Logo"
              className="footer-weblogo"
            />

            <span>
              Websums Software ❤️
            </span>

          </div>

        </div>

      </div>


      {/* =========================================
          BACK TO TOP
      ========================================= */}
      <button
        className="back-to-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

    </footer>
  );
}

export default Footer;