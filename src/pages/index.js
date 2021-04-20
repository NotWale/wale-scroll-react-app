import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import Opacity from "../components/Opacity";
import { homeObjOne } from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popOpen, setpopOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const openPopup = () => {
    setpopOpen(!popOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Popup popOpen={popOpen} openPopup={openPopup} />
      <Opacity popOpen={popOpen} openPopup={openPopup} />
      <Footer openPopup={openPopup} />
    </>
  );
};

export default Home;
