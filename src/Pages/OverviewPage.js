// Home.js
import React from "react";
import Navbar from "../Navbar";
import OverviewPage from "../Components/OverView";
import Footer from "../Footer";
import InfiniteBanner from "../Components/infintebanner";

const OverView = () => {
  return (
    <>
      <Navbar />
      <OverviewPage />
      <InfiniteBanner />
      <Footer />
    </>
  );
};

export default OverView;
