import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">

        <div className="logo">
          <div className="logo-icon">
            <i className="fa-solid fa-user-nurse"></i>
          </div>

          <div className="logo-text">
            <h1>COLLEGE OF NURSING</h1>
            <p>Excellence in Nursing Education</p>
          </div>
        </div>

        <div className="header-contact">

          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>

            <div>
              <small>Visit Us</small>
              <strong>Pune, Maharashtra</strong>
            </div>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-clock"></i>

            <div>
              <small>Office Hours</small>
              <strong>Mon - Sat: 9 AM - 5 PM</strong>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;