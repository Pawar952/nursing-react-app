
import "./Stats.css";

function Stats() {
  return (
    <section className="stats">

      <div className="container stats-grid">

        <div className="stat-box">

          <i className="fa-solid fa-calendar-days"></i>

          <h3>
            <span className="counter" data-target="25">
              0
            </span>
            +
          </h3>

          <p>Years of Excellence</p>

        </div>


        <div className="stat-box">

          <i className="fa-solid fa-user-graduate"></i>

          <h3>
            <span className="counter" data-target="5000">
              0
            </span>
            +
          </h3>

          <p>Alumni</p>

        </div>


        <div className="stat-box">

          <i className="fa-solid fa-chalkboard-user"></i>

          <h3>
            <span className="counter" data-target="50">
              0
            </span>
            +
          </h3>

          <p>Faculty Members</p>

        </div>


        <div className="stat-box">

          <i className="fa-solid fa-hospital"></i>

          <h3>
            <span className="counter" data-target="10">
              0
            </span>
            +
          </h3>

          <p>Clinical Departments</p>

        </div>

      </div>

    </section>
  );
}

export default Stats;

