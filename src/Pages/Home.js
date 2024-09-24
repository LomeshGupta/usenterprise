// Home.js
import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../Components/HeroSection";
import AboutUS from "../Components/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUS />
    </>
  );
};

export default Home;
