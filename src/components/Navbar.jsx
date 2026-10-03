


import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Logo
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <div className="logo-box">
            <i className="fa-solid fa-user-nurse"></i>
          </div>

          <div className="brand-text">
            <span>College of</span>
            <strong>Nursing</strong>
          </div>
        </NavLink> */}

        {/* Mobile Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i
            className={
              menuOpen
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars"
            }
          ></i>
        </button>

        {/* Navigation */}
        <ul className={menuOpen ? "nav-menu show" : "nav-menu"}>

          {/* Home */}
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              <i className="fa-solid fa-house"></i>
              Home
            </NavLink>
          </li>

          {/* About Dropdown */}
          <li className={`dropdown ${aboutOpen ? "dropdown-open" : ""}`}>
            <button
              className="dropdown-btn"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
              <i className="fa-solid fa-chevron-down"></i>
            </button>

            <ul className="dropdown-menu">

              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  <i className="fa-solid fa-building-columns"></i>
                  About College
                </NavLink>
              </li>

              <li>
                <NavLink to="/hospital" onClick={closeMenu}>
                  <i className="fa-solid fa-hospital"></i>
                  Hospital
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about/chairman-message"
                  onClick={closeMenu}
                >
                  <i className="fa-solid fa-user-tie"></i>
                  Chairman's Message
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about/director-message"
                  onClick={closeMenu}
                >
                  <i className="fa-solid fa-user"></i>
                  Director's Message
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about/principal-message"
                  onClick={closeMenu}
                >
                  <i className="fa-solid fa-user-graduate"></i>
                  Principal's Message
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about/vision-mission"
                  onClick={closeMenu}
                >
                  <i className="fa-solid fa-bullseye"></i>
                  Vision & Mission
                </NavLink>
              </li>

            </ul>
          </li>

          {/* Academics */}
          <li>
            <NavLink to="/academics" onClick={closeMenu}>
              Academics
            </NavLink>
          </li>

          {/* Infrastructure */}
          <li>
            <NavLink to="/infrastructure" onClick={closeMenu}>
              Infrastructure
            </NavLink>
          </li>

          {/* Fee Structure */}
          <li>
            <NavLink to="/fee-structure" onClick={closeMenu}>
              Fee Structure
            </NavLink>
          </li>

          {/* Admissions
          <li>
            <NavLink to="/admissions" onClick={closeMenu}>
              Admissions
            </NavLink>
          </li> */}

          {/* Gallery */}
          <li>
            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>

          {/* Notices */}
          <li>
            <NavLink to="/notices" onClick={closeMenu}>
              Notices
            </NavLink>
          </li>

          {/* Contact */}
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

          {/* Apply Button */}
          <li>
            <NavLink
              to="/admissions"
              className="nav-apply"
              onClick={closeMenu}
            >
              Apply Now
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;