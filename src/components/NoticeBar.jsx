
import "./NoticeBar.css";

function NoticeBar() {
  return (
    <section className="notice-bar">

      <div className="container notice-content">

        <div className="notice-label">

          <i className="fa-solid fa-bullhorn"></i>

          <span>Latest Updates</span>

        </div>

        <div className="notice-text">

          <marquee>

            Admissions Open for 2026-27
            &nbsp;&nbsp; | &nbsp;&nbsp;

            B.Sc Nursing Entrance Examination
            &nbsp;&nbsp; | &nbsp;&nbsp;

            Scholarship Applications Open
            &nbsp;&nbsp; | &nbsp;&nbsp;

            New Academic Session Begins Soon

          </marquee>

        </div>

        <a href="#notice" className="view-notice">
          View All
        </a>

      </div>

    </section>
  );
}

export default NoticeBar;

