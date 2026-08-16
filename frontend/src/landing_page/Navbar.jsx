import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  const handleLogout = () => {
    logout();
    closeNav();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-3">
      <div className="container">

        <Link className="navbar-brand" to="/" onClick={closeNav}>
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "190px", maxWidth: "100%", paddingLeft: "15px"}}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            {isAuthenticated ? (
              <>
                <li className="nav-item mx-3">
                  <a className="nav-link" href={`${process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001"}?token=${getCookie("token")}`} onClick={closeNav}>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <button 
                    className="nav-link btn btn-link text-secondary" 
                    onClick={handleLogout} 
                    style={{ textDecoration: "none", border: "none", background: "none", padding: "0" }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/signup" onClick={closeNav}>
                    Signup
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/login" onClick={closeNav}>
                    Login
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about" onClick={closeNav}>
                About
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/product" onClick={closeNav}>
                Products
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/pricing" onClick={closeNav}>
                Pricing
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/support" onClick={closeNav}>
                Support
              </Link>
            </li>

            <li className="nav-item ms-3 d-none d-lg-block">
              <i className="fa-solid fa-bars fs-4"></i>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;