
import "./Infrastructure.css";

function Infrastructure() {
  return (
    <section className="section infrastructure" id="infrastructure">

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            CAMPUS & FACILITIES
          </span>

          <h2>
            State-of-the-Art Infrastructure
          </h2>

          <p>
            A modern learning environment designed
            for academic and clinical excellence.
          </p>

        </div>


        <div className="facility-grid">

          {/* Laboratory */}
          <div className="facility-card">

            <img
              src="/images/lab.jpg"
              alt="Nursing Laboratory"
            />

            <div className="facility-overlay">

              <i className="fa-solid fa-flask"></i>

              <h3>
                Nursing Laboratories
              </h3>

              <p>
                Modern laboratories for hands-on
                nursing practice.
              </p>

            </div>

          </div>


          {/* Library */}
          <div className="facility-card">

            <img
              src="/images/library.jpg"
              alt="Library"
            />

            <div className="facility-overlay">

              <i className="fa-solid fa-book"></i>

              <h3>
                Central Library
              </h3>

              <p>
                Books, journals and digital
                learning resources.
              </p>

            </div>

          </div>


          {/* Classroom */}
          <div className="facility-card">

            <img
              src="/images/classroom.jpg"
              alt="Classroom"
            />

            <div className="facility-overlay">

              <i className="fa-solid fa-school"></i>

              <h3>
                Smart Classrooms
              </h3>

              <p>
                Technology-enabled learning spaces.
              </p>

            </div>

          </div>


          {/* Hostel */}
          <div className="facility-card">

            <img
              src="/images/hostel.jpg"
              alt="Hostel"
            />

            <div className="facility-overlay">

              <i className="fa-solid fa-building"></i>

              <h3>
                Hostel Facility
              </h3>

              <p>
                Safe and comfortable accommodation
                for students.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Infrastructure;

