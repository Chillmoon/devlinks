import React from "react";
import "./skeletonStyles.css";

const Skeleton = ({ width, height, borderRadius, margin }) => {
  return (
    <div
      style={{
        width: width || "100%",
        height: height || "1em",
        backgroundColor: "var(  --skeleton-background-color)",
        borderRadius: borderRadius || "25px",
        marginBottom: margin || "10px",
        animation: "skeleton-loading 1.5s infinite linear",
      }}
      className="skeleton"
    ></div>
  );
};

export default Skeleton;
