import React from "react";
import Marquee from "react-marquee-slider"; // Import the marquee slider
import styled from "styled-components";
import brand1 from "../Assets/brand1.svg";
import brand2 from "../Assets/brand1.svg";
import { Typography, Box } from "@mui/material";

// Styled-component for the logo item with responsive styles
const BrandLogo = styled.img`
  height: 100px; /* Default height */
  margin: 0 5px;

  /* Responsive styling */
  @media (max-width: 1024px) {
    height: 80px; /* Reduce size for tablets */
    margin: 0 15px; /* Adjust spacing for tablets */
  }

  @media (max-width: 768px) {
    height: 80px; /* Further reduce size for mobile devices */
    margin: 0px; /* Narrower spacing for mobile */
  }

  @media (max-width: 480px) {
    height: 80px; /* Smallest size for very small screens */
    margin: 0px; /* Minimum spacing */
  }
`;

// Styled-component for gradient overlays
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%; /* Width of the blur area */
  pointer-events: none; /* Ignore pointer events */
  z-index: 1; /* Ensure it stays above other content */
  background: linear-gradient(
    to ${(props) => (props.right ? "right" : "left")},
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  ${(props) => (props.right ? "right: 0;" : "left: 0;")}
`;

const BrandCarousel = () => {
  // Array of logos (can be adjusted as needed)
  const brands = [brand1, brand2, brand1, brand2, brand1, brand2, brand1];

  return (
    <Box sx={{ justifyContent: "center", textAlign: "center" }}>
      <Typography variant="h6" my={5}>
        <b>Industry leaders trust us to grow their revenue</b>
      </Typography>

      {/* Container for the logo marquee */}
      <div
        style={{
          marginTop: "2%",
          marginBottom: "3%",
          position: "relative",
          width: "100vw",
          overflow: "hidden",
          background: "#fff",
          padding: "10px 0",
        }}
      >
        {/* Left gradient overlay */}
        <Overlay />

        {/* Right gradient overlay */}
        <Overlay right />

        {/* The Marquee component creates a smooth, continuous scroll */}
        <Marquee
          velocity={20} // Adjust the speed as needed
          direction="left"
          scatterRandomly={false}
          resetAfterTries={200}
        >
          {/* Render each logo */}
          {brands.map((brand, index) => (
            <BrandLogo
              src={brand}
              alt={`Brand Logo ${index + 1}`}
              key={index}
            />
          ))}
        </Marquee>
      </div>
    </Box>
  );
};

export default BrandCarousel;
