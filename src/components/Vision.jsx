
import "./Vision.css";

function Vision() {
  return (
    <section className="vision-section" id="vision">

      <div className="container vision-grid">

        <div className="vision-card">

          <div className="vision-icon">
            <i className="fa-solid fa-eye"></i>
          </div>

          <h3>Our Vision</h3>

          <p>
            To become a centre of excellence in nursing
            education, healthcare practice, research and
            community service.
          </p>

        </div>


        <div className="vision-card mission">

          <div className="vision-icon">
            <i className="fa-solid fa-bullseye"></i>
          </div>

          <h3>Our Mission</h3>

          <p>
            To develop competent and compassionate
            healthcare professionals who contribute
            positively to society.
          </p>

        </div>


        <div className="vision-card">

          <div className="vision-icon">
            <i className="fa-solid fa-heart-pulse"></i>
          </div>

          <h3>Our Values</h3>

          <p>
            Compassion, integrity, professionalism,
            respect, teamwork and commitment to
            patient-centered care.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Vision;

