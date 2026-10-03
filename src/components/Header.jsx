import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">

        {/* LEFT LOGO */}
        <div className="header-logo left-logo">
          <img
            src="/images/logo.png"
            alt="Belhekar Group of Institutes"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="header-center">
          <h1>GNM COLLEGE OF NURSING</h1>

          <p>
            Bhanashivare, Shevgaon Road, Nevasa, Tal - Nevasa, Dist - Ahmednagar, 414699
          </p>
        </div>

        {/* RIGHT LOGO */}
        <div className="header-logo right-logo">
          <img
            src="/images/nursing-logo.png"
            alt="GNM College of Nursing"
          />
        </div>

      </div>
    </header>
  );
}

export default Header;