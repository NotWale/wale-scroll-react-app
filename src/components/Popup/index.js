import React from "react";
import ReactPlayer from "react-player";
import {
  PopupModal,
  PopupHeader,
  PopupTitle,
  PopupClose,
  PopupBody,
} from "./PopupElements";

const Popup = ({ popOpen, openPopup, text }) => {
  return (
    <PopupModal popOpen={popOpen}>
      <PopupHeader>
        <PopupTitle>It just works!</PopupTitle>
        <PopupClose onClick={openPopup}>&times;</PopupClose>
      </PopupHeader>
      <PopupBody>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=aAwaxTGnkSk"
        />
      </PopupBody>
    </PopupModal>
  );
};

export default Popup;
