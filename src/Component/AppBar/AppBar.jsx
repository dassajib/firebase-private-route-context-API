import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './AppBar.css'

const AppBar = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="navlink" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="/order-cart">
                  Order Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="/product-details">
                  Product Details
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="/registration">
                  Registration
                </NavLink>
              </li>
              <span>{user.displayName}</span>
              {user.email && (
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-danger">
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
