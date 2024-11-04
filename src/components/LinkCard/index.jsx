import React from "react";

import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";

import "./linkCardStyles.css";

const LinkCard = ({
  index,
  item,
  platforms,
  onDragStart,
  onDragOver,
  onDrop,
  onPlatformChange,
  onLinkChange,
  onRemove,
}) => {
  return (
    <li
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={onDragOver}
      onDrop={() => onDrop(index)}
      className="card"
    >
      <div className="card-header">
        <div>
          <span className="card-number">=</span>
          <span className="card-number">Link #{index + 1}</span>
        </div>
        <button className="remove-link" onClick={() => onRemove(index)}>
          Remove
        </button>
      </div>

      <label className="input-description">Platform</label>
      <CustomSelect
        options={platforms}
        value={item.platform}
        onChange={(value) => onPlatformChange(index, value)}
      />

      <label className="input-description">Link</label>
      <CustomInput
        type="text"
        value={item.url}
        onChange={(e) => onLinkChange(index, e.target.value)}
        style={{ width: "100%" }}
      />
    </li>
  );
};

export default LinkCard;
