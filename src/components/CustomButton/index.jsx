import React from "react";

import "./ButtonStyles.css";

const CustomButton = ({ text, variant, icon, active, style, onClick }) => {
  return (
    <div>
      <button
        className={`button ${variant} ${active ? "active" : ""}`}
        style={style}
        onClick={onClick}
      >
        {icon && (
          <img
            src={`/icons/${icon}`}
            alt={`${text} icon`}
            className="button-link-icon"
          />
        )}
        {text}
        {variant === "button-mobile-link" && (
          <img
            src={`/icons/arrow-icon.svg`}
            alt="arrow"
            className="arrow-icon"
          />
        )}
      </button>
    </div>
  );
};

export default CustomButton;
