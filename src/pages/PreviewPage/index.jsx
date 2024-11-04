import React, { useContext } from "react";

import { platformColors } from "../../utils/platformColors";

import { ProfileContext } from "../../contex/ProfileContex";

import CustomButton from "../../components/CustomButton";
import Skeleton from "../../components/Skeleton";

import "./previewPageStyles.css";

const PreviewPage = () => {
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
    <div className="preview-page-container">
      <div className="blue-background" />
      <div className="preview-card">
        <div className="preview-content">
          <div className="preview-profile">
            {profile.profilePicture ? (
              <img
                src={profile.profilePicture}
                alt="User"
                className="preview-profile-picture"
              />
            ) : (
              <Skeleton width="100px" height="100px" borderRadius="50%" />
            )}
            <p className="preview-user-name">
              {profile.firstName && profile.lastName ? (
                `${profile.firstName} ${profile.lastName}`
              ) : (
                <Skeleton width="150px" height="1em" />
              )}
            </p>
            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="preview-user-email"
              >
                {profile.email}
              </a>
            ) : (
              <Skeleton width="70px" height="0.5em" />
            )}
          </div>
        </div>
        <ul className="preview-links">
          {profile.links && profile.links.length > 0
            ? profile.links.map((link, index) => (
                <li key={index} className="preview-dev-link">
                  <CustomButton
                    text={link.platform}
                    variant="button-mobile-link"
                    style={{
                      width: "190px",
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
                width="190px"
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

export default PreviewPage;
