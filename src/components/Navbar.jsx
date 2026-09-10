
import "./Navbar.css";
import { useState } from "react";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="container nav-container">

        <div className="mobile-logo">
          College of Nursing
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={
              menuOpen
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars"
            }
          ></i>
        </button>

        <ul
          className={
            menuOpen
              ? "nav-menu show"
              : "nav-menu"
          }
        >

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li className="dropdown">

            <a href="#about">
              About
              <i className="fa-solid fa-chevron-down"></i>
            </a>

            <ul className="dropdown-menu">

              <li>
                <a href="#about" onClick={closeMenu}>
                  About College
                </a>
              </li>

              <li>
                <a href="#principal" onClick={closeMenu}>
                  Principal's Message
                </a>
              </li>

              <li>
                <a href="#vision" onClick={closeMenu}>
                  Vision & Mission
                </a>
              </li>

            </ul>

          </li>

          <li>
            <a href="#courses" onClick={closeMenu}>
              Academics
            </a>
          </li>

          <li>
            <a href="#infrastructure" onClick={closeMenu}>
              Infrastructure
            </a>
          </li>

          <li>
            <a href="#admission" onClick={closeMenu}>
              Admissions
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#notice" onClick={closeMenu}>
              Notices
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          <li>
            <a
              href="#admission"
              className="nav-apply"
              onClick={closeMenu}
            >
              Apply Now
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;