
import "./Notices.css";

function Notices() {
  return (
    <section className="section notices" id="notice">

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            NEWS & UPDATES
          </span>

          <h2>
            Latest Notices
          </h2>

        </div>


        <div className="notice-grid">

          <div className="notice-main">

            {/* Notice 1 */}
            <div className="notice-item">

              <div className="date-box">

                <strong>10</strong>
                <span>SEP</span>

              </div>

              <div>

                <span className="notice-category">
                  ADMISSION
                </span>

                <h3>
                  Admission notification for
                  academic year 2026-27
                </h3>

                <p>
                  Applications are invited from
                  eligible candidates.
                </p>

              </div>

              <a href="#">
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>


            {/* Notice 2 */}
            <div className="notice-item">

              <div className="date-box">

                <strong>05</strong>
                <span>SEP</span>

              </div>

              <div>

                <span className="notice-category">
                  EXAMINATION
                </span>

                <h3>
                  Semester examination schedule
                </h3>

                <p>
                  Students can check the examination
                  timetable here.
                </p>

              </div>

              <a href="#">
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>


            {/* Notice 3 */}
            <div className="notice-item">

              <div className="date-box">

                <strong>01</strong>
                <span>SEP</span>

              </div>

              <div>

                <span className="notice-category">
                  SCHOLARSHIP
                </span>

                <h3>
                  Scholarship application
                  notification
                </h3>

                <p>
                  Eligible students may submit
                  their applications.
                </p>

              </div>

              <a href="#">
                <i className="fa-solid fa-arrow-right"></i>
              </a>

            </div>

          </div>


          {/* Upcoming Events */}
          <div className="events-box">

            <h3>
              Upcoming Events
            </h3>


            {/* Event 1 */}
            <div className="event">

              <div className="event-date">

                <strong>24</strong>
                <span>SEP</span>

              </div>

              <div>

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
            <div className="event">

              <div className="event-date">

                <strong>02</strong>
                <span>OCT</span>

              </div>

              <div>

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
            <div className="event">

              <div className="event-date">

                <strong>15</strong>
                <span>OCT</span>

              </div>

              <div>

                <h4>
                  Student Research Seminar
                </h4>

                <p>
                  <i className="fa-regular fa-clock"></i>
                  11:00 AM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Notices;

