import { Link } from "react-router-dom";
import "./Admission.css";

function Admission() {
  return (
    <section className="admission" id="admission">
      <div className="admission-container">

        {/* Decorative Icon */}
        <div className="admission-decoration">
          <i className="fa-solid fa-user-graduate"></i>
        </div>

        {/* Content */}
        <div className="admission-content">

          <div className="admission-text">
            <span className="admission-label">
              ADMISSIONS 2026-27
            </span>

            <h2>
              Start Your <span>Nursing Journey</span> Today
            </h2>

            <p>
              Take the first step toward a rewarding career in
              healthcare with quality nursing education,
              experienced faculty, and excellent clinical training.
            </p>
          </div>

          {/* Apply Now Button */}
          <Link to="/contact" className="admission-btn">
            <span>Apply Now</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Admission;