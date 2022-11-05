import React from "react";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="Brain Flix logo" className="nav__logo" />
      <div className="nav__search-container">
        <input
          className="nav__search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <button className="nav__upload-btn">
          <div className="nav__upload-icon"></div> upload
        </button>

        <div className="nav__profile-image-container">
          <img
            src={profileImage}
            alt="User Avatar"
            className="nav__profile-image"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
