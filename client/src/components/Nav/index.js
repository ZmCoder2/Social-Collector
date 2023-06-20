import React, { useEffect } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Nav() {
  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    
    navbarToggler.addEventListener("click", () => {
      navbarCollapse.classList.toggle("show");
    });
  }, []);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1"></li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler bg-body-tertiary"
              type="button"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav flex-row">
                <li className="nav-item mx-1">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to="/addcategory" className="nav-link">
                    Add Cat
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to="/addpost" className="nav-link">
                    Add post
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1></h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
