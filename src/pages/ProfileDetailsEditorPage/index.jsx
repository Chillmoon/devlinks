import React from "react";

import { useViewport } from "../../contex/ViewportContext";

import ProfileDetailsForm from "./ProfileDetailsForm";
import Mobile from "../../components/Mobile";

import "../pageStyles.css";

const ProfileDetailsEditorPage = () => {
  const { isMobile } = useViewport();

  return (
    <>
      <div className="page-wrapper">
        {!isMobile && <Mobile />}
        <ProfileDetailsForm />
      </div>
    </>
  );
};

export default ProfileDetailsEditorPage;
