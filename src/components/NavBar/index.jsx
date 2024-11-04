import React from "react";
import { Link, useLocation } from "react-router-dom";

import CustomButton from "../CustomButton";

import "./navStyles.css";

const NavBar = () => {
  const location = useLocation();

  const isMobile = window.innerWidth <= 530;

  return location.pathname === "/preview" ? (
    <nav className="nav-bar">
      <Link to="/profile-details" className="link">
        <CustomButton
          text={isMobile ? "" : "Back to Editor"}
          variant="button-outlined"
          icon={isMobile ? "link-icon.png" : ""}
        />
      </Link>
      <CustomButton
        text={isMobile ? "" : "Share Link"}
        variant="button-filled"
        icon={isMobile ? "share-icon.png" : ""}
      />
    </nav>
  ) : (
    <nav className="nav-bar">
      <div>
        <div className="icon-container">
          <img
            src="/icons/link-icon.png"
            alt="link icon"
            className="link-icon"
          />
        </div>
        {!isMobile && <span className="logo-text">devlinks</span>}
      </div>
      <div className="buttons-wrapper">
        <Link to="/customize-links" className="link">
          <CustomButton
            text={isMobile ? "" : "Links"}
            variant="button-link"
            icon="link-icon.png"
            active={location.pathname === "/customize-links"}
          />
        </Link>
        <Link to="/profile-details" className="link">
          <CustomButton
            text={isMobile ? "" : "Profile Details"}
            variant="button-link"
            icon="profile-icon.png"
            active={location.pathname === "/profile-details"}
          />
        </Link>
      </div>
      <Link to="/preview" className="link">
        <CustomButton
          text={isMobile ? "" : "Preview"}
          variant="button-outlined"
          icon={isMobile ? "view-icon.png" : ""}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(8000%) hue-rotate(265deg) brightness(90%) contrast(120%)",
          }}
        />
      </Link>
    </nav>
  );
};

export default NavBar;
