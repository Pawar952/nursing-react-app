import "./Courses.css";

function Courses() {
  return (
    <section className="section courses" id="courses">

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            ACADEMICS
          </span>

          <h2>
            Programs We Offer
          </h2>

          <p>
            Build your career in healthcare through
            our professionally designed nursing programs.
          </p>

        </div>


        <div className="course-grid">

          {/* B.Sc Nursing */}
          <div className="course-card">

            <div className="course-image">

              <img
                src="/images/students.jpg"
                alt="BSc Nursing"
              />

              <span className="course-tag">
                UG PROGRAM
              </span>

            </div>

            <div className="course-content">

              <h3>
                B.Sc. Nursing
              </h3>

              <p>
                A comprehensive undergraduate program
                designed to develop professional nursing
                knowledge and clinical skills.
              </p>

              <div className="course-info">

                <span>
                  <i className="fa-regular fa-clock"></i>
                  4 Years
                </span>

                <span>
                  <i className="fa-solid fa-user"></i>
                  Full Time
                </span>

              </div>

              <a href="#admission">
                View Program
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>

          </div>


          {/* Post Basic B.Sc Nursing */}
          <div className="course-card">

            <div className="course-image">

              <img
                src="/images/lab.jpg"
                alt="Post Basic Nursing"
              />

              <span className="course-tag">
                UG PROGRAM
              </span>

            </div>

            <div className="course-content">

              <h3>
                Post Basic B.Sc. Nursing
              </h3>

              <p>
                Designed for nursing professionals who
                want to upgrade their academic and
                professional qualifications.
              </p>

              <div className="course-info">

                <span>
                  <i className="fa-regular fa-clock"></i>
                  2 Years
                </span>

                <span>
                  <i className="fa-solid fa-user"></i>
                  Full Time
                </span>

              </div>

              <a href="#admission">
                View Program
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>

          </div>


          {/* M.Sc Nursing */}
          <div className="course-card">

            <div className="course-image">

              <img
                src="/images/classroom.jpg"
                alt="MSc Nursing"
              />

              <span className="course-tag">
                PG PROGRAM
              </span>

            </div>

            <div className="course-content">

              <h3>
                M.Sc. Nursing
              </h3>

              <p>
                Advanced nursing education focusing on
                specialization, research, leadership
                and professional development.
              </p>

              <div className="course-info">

                <span>
                  <i className="fa-regular fa-clock"></i>
                  2 Years
                </span>

                <span>
                  <i className="fa-solid fa-user"></i>
                  Full Time
                </span>

              </div>

              <a href="#admission">
                View Program
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Courses;
