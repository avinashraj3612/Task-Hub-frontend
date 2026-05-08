import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar-inner">

          {/* LOGO */}
          <div className="logo">
            Task Hub Service Provider
          </div>

          {/* NAV LINKS */}
          <nav className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/projects">
              Projects
            </NavLink>

            <NavLink to="/services">
              Services
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>
          </nav>

          {/* AUTH BUTTONS */}
          <div className="nav-auth">

            <button
              className="login-btn"
              onClick={() => {
                setShowLogin(true);
                setShowSignup(false);
              }}
            >
              Login
            </button>

            <button
              className="signup-btn"
              onClick={() => {
                setShowSignup(true);
                setShowLogin(false);
              }}
            >
              New User
            </button>

          </div>
        </div>
      </header>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div
          className="auth-overlay"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="auth-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Login</h2>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <input
              type="password"
              placeholder="Enter password"
            />

            <button className="auth-submit">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}