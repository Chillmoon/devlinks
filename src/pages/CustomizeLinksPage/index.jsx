import React from "react";
import { useViewport } from "../../contex/ViewportContext";

import CustomizeLinksBlock from "./CustomizeLinksBlock";
import Mobile from "../../components/Mobile";

import "./../pageStyles.css";

const CustomizeLinksPage = () => {
  const { isMobile } = useViewport();

  return (
    <div className="page-wrapper">
      {!isMobile && <Mobile />}
      <CustomizeLinksBlock />
    </div>
  );
};

export default CustomizeLinksPage;
