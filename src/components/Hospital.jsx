import "./Hospital.css";

function Hospital() {
  return (
    <section className="hospital-section" id="hospitals">

      <div className="hospital-wrapper">

        {/* LEFT - IMAGE */}
        <div className="hospital-image-box">

          <img
            src="/images/hospital.jpg"
            alt="Associated Hospital"
          />

          <div className="hospital-image-overlay"></div>

          <div className="hospital-image-badge">
            <i className="fa-solid fa-hospital"></i>

            <div>
              <strong>Clinical Training</strong>
              <span>Practical Experience</span>
            </div>
          </div>

        </div>


        {/* RIGHT - CONTENT */}
        <div className="hospital-content">

          <span className="hospital-label">
            OUR ASSOCIATED HOSPITAL
          </span>

          <h2>
            Quality Clinical Training
            <span> for Future Nurses</span>
          </h2>

          <div className="hospital-line"></div>

          <p className="hospital-intro">
            Our nursing students receive valuable clinical exposure through
            practical training at our associated hospital. The hospital
            environment helps students develop professional nursing skills,
            confidence and experience in patient care.
          </p>


          {/* Hospital Name */}
          <div className="hospital-name-box">

            <div className="hospital-name-icon">
              <i className="fa-solid fa-hospital"></i>
            </div>

            <div>
              <span>Associated Hospital</span>
              <h3>Government General Hospital</h3>
            </div>

          </div>


          {/* FEATURES */}
          <div className="hospital-features">

            <div className="hospital-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-user-nurse"></i>
              </div>

              <div>
                <h4>Nursing Training</h4>
                <p>Hands-on clinical learning</p>
              </div>
            </div>


            <div className="hospital-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>

              <div>
                <h4>Patient Care</h4>
                <p>Real-world patient experience</p>
              </div>
            </div>


            <div className="hospital-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-stethoscope"></i>
              </div>

              <div>
                <h4>Clinical Practice</h4>
                <p>Professional healthcare exposure</p>
              </div>
            </div>


            <div className="hospital-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-hand-holding-medical"></i>
              </div>

              <div>
                <h4>Healthcare Services</h4>
                <p>Exposure to healthcare facilities</p>
              </div>
            </div>

          </div>


          {/* BUTTON */}
          <a href="https://pvbcoayurved.com/" className="hospital-btn">
            <span>View Hospital</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hospital;