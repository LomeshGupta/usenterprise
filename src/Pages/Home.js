// Home.js
import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../Components/HeroSection";
import AboutUS from "../Components/About";
import ScrollImageShift from "../Components/ScrollImageShift";
import CenteredBox from "../Components/CenteredBox";
import MarketingGoals from "../Components/MarketingGoals";
import Footer from "../Footer";
import InfiniteBanner from "../Components/infintebanner";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUS />
      <ScrollImageShift />
      <CenteredBox />
      <MarketingGoals />
      <InfiniteBanner />
      <Footer />
    </>
  );
};

export default Home;
