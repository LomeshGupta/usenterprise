// Home.js
import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../Components/HeroSection";
import AboutUS from "../Components/About";
import ScrollImageShift from "../Components/ScrollImageShift";
import CenteredBox from "../Components/CenteredBox";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUS />
      <ScrollImageShift />
      <CenteredBox />
    </>
  );
};

export default Home;
