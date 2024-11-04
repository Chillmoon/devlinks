import React, { createContext, useState, useEffect, useContext } from "react";

export const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768 || window.innerHeight <= 615
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  return useContext(ViewportContext);
};
