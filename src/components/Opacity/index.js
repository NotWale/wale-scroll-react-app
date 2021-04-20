import React from "react";
import { BackgroundContainer } from "./OpacityElements";

const Opacity = ({ popOpen, openPopup }) => {
  return <BackgroundContainer popOpen={popOpen} onClick={openPopup} />;
};

export default Opacity;
