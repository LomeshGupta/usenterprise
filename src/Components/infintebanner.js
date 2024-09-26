import React from "react";
import { Box, Typography, Link, useMediaQuery, useTheme } from "@mui/material";
import Marquee from "react-marquee-slider";

const InfiniteBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen size is mobile
  const velocity = isMobile ? 10 : 40; // Set velocity based on screen size

  const bannerText = (
    <>
      <Link
        href="/contact"
        sx={{
          fontSize: "25px",
          textDecoration: "none",
          color: "#fff",
          "&:hover": {
            textDecoration: "underline",
          },
          display: "inline-block",
        }}
      >
        Interested in working together? Click Here
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
      {/* Add some space between repetitions */}
    </>
  );

  return (
    <Box
      sx={{
        my: 4,
        backgroundColor: "black",
        width: "100%",
        overflow: "hidden",
        zIndex: 1000,
        padding: "10px 0",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Marquee velocity={velocity} pauseOnHover>
        {Array(10).fill(bannerText)} {/* Repeat the banner text */}
      </Marquee>
    </Box>
  );
};

export default InfiniteBanner;
