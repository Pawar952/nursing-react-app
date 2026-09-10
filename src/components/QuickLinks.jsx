
import "./QuickLinks.css";

function QuickLinks() {
  return (
    <section className="quick-links">

      <div className="container quick-grid">

        <a href="#admission" className="quick-card">

          <div className="quick-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>

          <div>
            <h3>Admissions</h3>
            <p>Apply for 2026-27</p>
          </div>

          <i className="fa-solid fa-arrow-right arrow"></i>

        </a>


        <a href="#courses" className="quick-card">

          <div className="quick-icon">
            <i className="fa-solid fa-book-open"></i>
          </div>

          <div>
            <h3>Programs</h3>
            <p>Explore our courses</p>
          </div>

          <i className="fa-solid fa-arrow-right arrow"></i>

        </a>


        <a href="#notice" className="quick-card">

          <div className="quick-icon">
            <i className="fa-solid fa-bell"></i>
          </div>

          <div>
            <h3>Notices</h3>
            <p>Latest announcements</p>
          </div>

          <i className="fa-solid fa-arrow-right arrow"></i>

        </a>


        <a href="#contact" className="quick-card">

          <div className="quick-icon">
            <i className="fa-solid fa-headset"></i>
          </div>

          <div>
            <h3>Help Desk</h3>
            <p>Talk to our team</p>
          </div>

          <i className="fa-solid fa-arrow-right arrow"></i>

        </a>

      </div>

    </section>
  );
}

export default QuickLinks;

