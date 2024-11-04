import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    profilePicture: "",
    firstName: "",
    lastName: "",
    email: "",
    links: [
      { platform: "GitHub", url: "" },
      { platform: "YouTube", url: "" },
    ],
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
