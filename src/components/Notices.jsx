import "./Notices.css";

function Notices() {
  return (
    <section className="notices-section" id="notice">

      <div className="notices-container">

        {/* Heading */}
        <div className="notices-heading">
          <span className="notices-label">
            NEWS & UPDATES
          </span>

          <h2>Latest Notices</h2>

          <p>
            Stay updated with the latest announcements, examinations,
            scholarships and upcoming college activities.
          </p>
        </div>


        <div className="notices-grid">

          {/* ==============================
              LATEST NOTICES
          =============================== */}

          <div className="notices-list">

            {/* Notice 1 */}
            <div className="notices-card">

              <div className="notices-date">
                <strong>10</strong>
                <span>SEP</span>
              </div>

              <div className="notices-content">

                <span className="notices-category">
                  ADMISSION
                </span>

                <h3>
                  Admission notification for academic year 2026-27
                </h3>

                <p>
                  Applications are invited from eligible candidates
                  for admission to the academic year 2026-27.
                </p>

              </div>

              <a href="#" className="notices-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>


            {/* Notice 2 */}
            <div className="notices-card">

              <div className="notices-date">
                <strong>05</strong>
                <span>SEP</span>
              </div>

              <div className="notices-content">

                <span className="notices-category examination">
                  EXAMINATION
                </span>

                <h3>
                  Semester examination schedule
                </h3>

                <p>
                  Students can check the examination timetable
                  and important examination instructions.
                </p>

              </div>

              <a href="#" className="notices-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>


            {/* Notice 3 */}
            <div className="notices-card">

              <div className="notices-date">
                <strong>01</strong>
                <span>SEP</span>
              </div>

              <div className="notices-content">

                <span className="notices-category scholarship">
                  SCHOLARSHIP
                </span>

                <h3>
                  Scholarship application notification
                </h3>

                <p>
                  Eligible students may submit their scholarship
                  applications within the given deadline.
                </p>

              </div>

              <a href="#" className="notices-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>

          </div>


          {/* ==============================
              UPCOMING EVENTS
          =============================== */}

          <div className="notices-events">

            <div className="notices-events-header">

              <div>
                <span>CALENDAR</span>

                <h3>
                  Upcoming Events
                </h3>
              </div>

              <i className="fa-regular fa-calendar-days"></i>

            </div>


            {/* Event 1 */}
            <div className="notices-event">

              <div className="notices-event-date">
                <strong>24</strong>
                <span>SEP</span>
              </div>

              <div className="notices-event-content">

                <h4>
                  Nursing Foundation Day
                </h4>

                <p>
                  <i className="fa-regular fa-clock"></i>
                  10:00 AM
                </p>

              </div>

            </div>


            {/* Event 2 */}
            <div className="notices-event">

              <div className="notices-event-date">
                <strong>02</strong>
                <span>OCT</span>
              </div>

              <div className="notices-event-content">

                <h4>
                  Health Awareness Camp
                </h4>

                <p>
                  <i className="fa-regular fa-clock"></i>
                  09:00 AM
                </p>

              </div>

            </div>


            {/* Event 3 */}
            <div className="notices-event">

              <div className="notices-event-date">
                <strong>15</strong>
                <span>OCT</span>
              </div>

              <div className="notices-event-content">

                <h4>
                  Student Research Seminar
                </h4>

                <p>
                  <i className="fa-regular fa-clock"></i>
                  11:00 AM
                </p>

              </div>

            </div>


            <button className="notices-view-btn">
              View All Events
              <i className="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Notices;