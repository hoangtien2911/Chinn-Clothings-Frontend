import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top flex flex-between">
            <Link to="/" className="navbar-brand fw-2 fs-20">
              <span className="">
                &nbsp;&nbsp;&nbsp;&nbsp;CHINN <br /> CLOTHINGS
              </span>
            </Link>

            <div className="flex flex-center">
              <div className="navbar-toggler ">
                <ul
                  className={`nav-links flex ${isSidebarOpen ? "show-nav-links" : ""
                    }`}
                >
                  <button
                    className="navbar-hide-btn"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>

                  <li>
                    <a href="#home" className="nav-link">
                      {'home'.toUpperCase()}
                    </a>
                  </li>
                  <li>
                    <a href="#collection" className="nav-link">
                      {'collection'.toUpperCase()}
                    </a>
                  </li>

                  <li>
                    <a href="#collection" className="nav-link">
                      {'specials'.toUpperCase()}

                    </a>
                  </li>

                  <li>
                    <a href="#collection" className="nav-link">
                      {'about us'.toUpperCase()}

                    </a>
                  </li>
                  <li>
                    <form action="" className="navbar-search flex">
                      <input type="text" placeholder="Search here ..." />
                      <button type="submit" className="navbar-search-btn">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-end">
              <div className="navbar-btns">
                <Link to="/cart" className="add-to-card-btn flex">
                  <span className="btn-ico">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  <div className="cart-count">
                    <span className="cart-count-value">0</span>
                  </div>
                </Link>
              </div>
              <button
                type="button"
                className="navbar-show-btn"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
