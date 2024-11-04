import React, { useState } from "react";

import "./customSelectStyles.css";

const CustomSelect = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const selectedIcon = value ? (
    <img
      src={`/icons/${value.toLowerCase()}-icon.png`}
      alt={`${value} icon`}
      className="icon"
    />
  ) : null;

  return (
    <div className="custom-select" onClick={toggleDropdown}>
      <div className="selected-value">
        {selectedIcon}
        {value || "Select platform"}
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              <img
                src={`/icons/${option.toLowerCase()}-icon.png`}
                alt={`${option} icon`}
                className="icon"
              />
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
