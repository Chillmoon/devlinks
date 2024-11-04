import React, { useContext } from "react";

import { platformColors } from "../../utils/platformColors";
import { ProfileContext } from "../../contex/ProfileContex";

import CustomButton from "../CustomButton";
import Skeleton from "../Skeleton";

import "./mobileStyles.css";

const Mobile = () => {
  const { profile } = useContext(ProfileContext);

  const handleButtonClick = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const linkCount = profile.links ? profile.links.length : 0;
  const maxLinks = 5;
  const skeletonCount = maxLinks - linkCount;

  return (
    <div className="mobile-container">
      <img src="/icons/mobile.svg" alt="Mobile" className="mobile-icon" />
      <div className="mobile-card">
        <div className="content">
          <div className="profile">
            {profile.profilePicture ? (
              <img
                src={profile.profilePicture}
                alt="User"
                className="profile-picture"
              />
            ) : (
              <Skeleton width="85px" height="85px" borderRadius="50%" />
            )}
            <p className="user-name">
              {profile.firstName || profile.lastName ? (
                `${profile.firstName} ${profile.lastName}`
              ) : (
                <Skeleton width="150px" height="1em" />
              )}
            </p>
            {profile.email ? (
              <a href={`mailto:${profile.email}`} className="user-email">
                {profile.email}
              </a>
            ) : (
              <Skeleton width="70px" height="0.5em" />
            )}
          </div>
        </div>
        <ul className="links">
          {profile.links && profile.links.length > 0
            ? profile.links.map((link, index) => (
                <li key={index} className="dev-link">
                  <CustomButton
                    text={link.platform}
                    variant="button-mobile-link"
                    style={{
                      width: "170px",
                      backgroundColor: platformColors[link.platform] || "#000",
                    }}
                    onClick={() => handleButtonClick(link.url)}
                  />
                </li>
              ))
            : null}
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <li key={linkCount + index} className="dev-link">
              <Skeleton
                width="170px"
                height="31px"
                borderRadius="6px"
                margin="0"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
