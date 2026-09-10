
import "./About.css";

function About() {
  return (
    <section className="section about" id="about">

      <div className="container about-grid">

        <div className="about-image">

          <img
            src="/images/college.jpg"
            alt="College Building"
          />

          <div className="experience-box">

            <strong>25+</strong>

            <span>
              Years of
              <br />
              Excellence
            </span>

          </div>

        </div>


        <div className="about-content">

          <span className="section-label">
            ABOUT OUR COLLEGE
          </span>

          <h2>
            Excellence in Nursing Education
          </h2>

          <p className="lead">
            Welcome to our College of Nursing, where
            education meets compassion and clinical
            excellence.
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


          <div className="about-points">

            <div>
              <i className="fa-solid fa-circle-check"></i>
              Experienced Faculty
            </div>

            <div>
              <i className="fa-solid fa-circle-check"></i>
              Modern Laboratories
            </div>

            <div>
              <i className="fa-solid fa-circle-check"></i>
              Clinical Training
            </div>

            <div>
              <i className="fa-solid fa-circle-check"></i>
              Research Opportunities
            </div>

          </div>


          <a href="#vision" className="btn btn-secondary">
            Read More
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;

