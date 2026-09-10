
import "./Footer.css";

function Footer() {
  return (
    <>

      <footer className="footer">

        <div className="container footer-grid">


          {/* Footer About */}
          <div className="footer-about">

            <div className="footer-logo">

              <div className="logo-icon">
                <i className="fa-solid fa-user-nurse"></i>
              </div>

              <h3>
                COLLEGE OF NURSING
              </h3>

            </div>

            <p>
              Empowering future healthcare professionals
              through quality nursing education,
              clinical excellence and compassionate care.
            </p>


            <div className="footer-social">

              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

            <a href="#about">
              About Us
            </a>

            <a href="#courses">
              Programs
            </a>

            <a href="#admission">
              Admissions
            </a>

            <a href="#infrastructure">
              Infrastructure
            </a>

            <a href="#gallery">
              Gallery
            </a>

          </div>


          {/* Important Links */}
          <div className="footer-column">

            <h3>
              Important Links
            </h3>

            <a href="#">
              Student Login
            </a>

            <a href="#">
              Faculty Login
            </a>

            <a href="#">
              Examination
            </a>

            <a href="#">
              Scholarships
            </a>

            <a href="#">
              Anti-Ragging
            </a>

          </div>


          {/* Contact */}
          <div className="footer-column">

            <h3>
              Contact Us
            </h3>

            <p>
              <i className="fa-solid fa-location-dot"></i>
              Pune, Maharashtra
            </p>

            <p>
              <i className="fa-solid fa-phone"></i>
              +91 98765 43210
            </p>

            <p>
              <i className="fa-solid fa-envelope"></i>
              info@nursingcollege.edu.in
            </p>

          </div>


        </div>


        {/* Footer Bottom */}
        <div className="footer-bottom">

          <div className="container">

            <p>
              © 2026 College of Nursing.
              All Rights Reserved.
            </p>

            <p>
              Designed & Developed with ❤️
            </p>

          </div>

        </div>

      </footer>


      {/* Back To Top */}
      <button className="back-to-top">

        <i className="fa-solid fa-arrow-up"></i>

      </button>

    </>
  );
}

export default Footer;

