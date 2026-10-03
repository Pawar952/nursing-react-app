
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      {/* Background Shapes */}
      <div className="about-shape shape-one"></div>
      <div className="about-shape shape-two"></div>

      <div className="container about-container">

        {/* ================= IMAGE ================= */}
        <div className="about-image-wrapper">

          <div className="image-frame">
            <img
              src="/images/hero1.jpg"
              alt="College Building"
            />

            <div className="image-overlay"></div>
          </div>

          {/* Experience Card */}
          <div className="experience-card">

            <div className="experience-icon">
              <i className="fa-solid fa-award"></i>
            </div>

            <div>
              <strong>25+</strong>
              <span>Years of Excellence</span>
            </div>

          </div>

          {/* Floating Badge */}
          <div className="floating-badge">

            <i className="fa-solid fa-user-nurse"></i>

            <span>
              Quality Nursing Education
            </span>

          </div>

        </div>


        {/* ================= CONTENT ================= */}
        <div className="about-content">

          <span className="section-label">
            <span className="label-line"></span>
            ABOUT OUR COLLEGE
          </span>


          <h2>
            Excellence in
            <span> Nursing Education</span>
          </h2>


          <p className="lead">
            Welcome to our College of Nursing, where
            education meets compassion, clinical
            excellence and professional development.
          </p>


          <p>
            Our institution is committed to preparing
            competent, compassionate and responsible
            nursing professionals through quality
            education, practical training, research
            and community healthcare services.
          </p>


          <p>
            We provide an environment where students
            develop professional knowledge, clinical
            skills, leadership qualities and ethical
            values required for modern healthcare.
          </p>


          {/* ================= FEATURES ================= */}
          <div className="about-features">

            {/* Feature 1 */}
            <div className="feature-card">

              <div className="feature-icon">
                <i className="fa-solid fa-user-tie"></i>
              </div>

              <div>
                <h4>Experienced Faculty</h4>
                <p>Expert guidance for students</p>
              </div>

            </div>


            {/* Feature 2 */}
            <div className="feature-card">

              <div className="feature-icon">
                <i className="fa-solid fa-flask"></i>
              </div>

              <div>
                <h4>Modern Laboratories</h4>
                <p>Practical learning facilities</p>
              </div>

            </div>


            {/* Feature 3 */}
            <div className="feature-card">

              <div className="feature-icon">
                <i className="fa-solid fa-hospital"></i>
              </div>

              <div>
                <h4>Clinical Training</h4>
                <p>Real-world healthcare experience</p>
              </div>

            </div>


            {/* Feature 4 */}
            <div className="feature-card">

              <div className="feature-icon">
                <i className="fa-solid fa-microscope"></i>
              </div>

              <div>
                <h4>Research Opportunities</h4>
                <p>Encouraging innovation & research</p>
              </div>

            </div>

          </div>


          {/* ================= BOTTOM ================= */}
          <div className="about-bottom">

            <Link
              to="/about/vision-mission"
              className="about-btn"
            >
              <span>Explore Our College</span>

              <i className="fa-solid fa-arrow-right"></i>
            </Link>


            <div className="trust-text">

              <i className="fa-solid fa-circle-check"></i>

              <span>
                Building Future Healthcare Professionals
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;

