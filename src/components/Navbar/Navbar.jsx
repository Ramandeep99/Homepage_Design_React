import React, { useState } from "react";
import "./navbar.css";
import {
  FaHome,
  FaMapMarkerAlt,
  FaCamera,
  FaList,
  FaInfoCircle,
  FaDollarSign,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
    props.setSidebar(!isNavOpen);
  };

  return (
    <div className="header">
      <div className="navbar-logo">
        <img
          src="https://www.prestigedewdrop.com/images/logoft.png"
          alt="Logo"
        />
      </div>
      <div className="nav-contact">+91 829 203 20 12</div>
      <div
        className={`navbar-toggle ${isNavOpen ? "open" : ""}`}
        onClick={handleNavToggle}
      >
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`navbar mobile ${isNavOpen ? "open" : ""}`}>
        <ul className={`navbar-links ${isNavOpen ? "open" : ""}`}>
          <li>
            <a href="#home">
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a href="#overview">
              <FaInfoCircle />
              Overview
            </a>
          </li>
          <li>
            <a href="#amenities">
              <FaList />
              Amenities
            </a>
          </li>
          <li>
            <a href="#pricing">
              <FaDollarSign />
              Pricing Details
            </a>
          </li>
          <li>
            <a href="#floor-plans">
              <FaMapMarkerAlt />
              Site &amp; Floor Plans
            </a>
          </li>
          <li>
            <a href="#location">
              <FaMapMarkerAlt />
              Location
            </a>
          </li>
          <li>
            <a href="#virtual-tour" style={{ marginRight: "10px" }}>
              <FaCamera />
              Virtual Tour
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
