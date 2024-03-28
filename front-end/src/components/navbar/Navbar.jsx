import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";  // Link shows some crash in this project

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const HaburgerHandler = () => {
    setHamburger((prev) => !prev); //hamburger section 
  };
  return (
    <div>
      <div className="navbar-main-body">
        <div className="navbar-logo-sec">
          <img src="/logo.svg" alt="" className="navbar-logo" />
        </div>
        <div className="navbar-menu-sec">
          <div className="navbar-menu">
            <div className="navbar-menu-item">
              <a href="/">Top Picks</a>
            </div>
            <div className="navbar-menu-item">
              <a href="/category-list">Category</a>
            </div>

            <div className="navbar-menu-item">
              <a href="/user-list">Users</a>
            </div>
          </div>
        </div>

        {/* //Hamburger Section */}

        <div className="navbar-hamb-sec">
          <img
            src="/hamburger.png"
            alt=""
            className="hamburger-icon"
            onClick={HaburgerHandler}
          />
        </div>

        {hamburger == true ? (
          <div className="navbar-hamb-menu-sec">
            <ul className="navbar-menu">
              <li className="navbar-menu-item">
                <a href="/">Top Picks</a>
              </li>
              <li className="navbar-menu-item">
                <a href="/category-list">Category</a>
              </li>

              <li className="navbar-menu-item">
                <a href="/user-list">Users</a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
