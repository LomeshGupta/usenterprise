import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bg1 from "../Assets/rie9.jpg";
import demoImage from "../Assets/telemetry.png"; // Import your image here

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "100vh", md: "100vh" },
        backgroundImage: `url(${bg1})`, // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "left",
        color: "#fff",
        textAlign: "left",
        fontFamily: "Inter, sans-serif", // Custom font
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // background: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
          backdropFilter: "blur(2px)", // Blurred background
          zIndex: 1,
        },
      }}
    >
      {/* Content */}
      <Box
        sx={{
          zIndex: 2,
          maxWidth: "800px",
          padding: "5%",
          paddingTop: "160px",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "700", // Bold weight
            fontSize: { xs: "2.4rem", md: "4rem" }, // Responsive font sizes
            marginBottom: "20px",
            letterSpacing: "0.05em",
            color: "darkred",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Subtle shadow to enhance text readability
            fontFamily: "Inter, sans-serif", // Ensure consistent font
          }}
        >
          Your Vision. <br /> Our Craft.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" }, // Responsive font sizes
            marginBottom: "40px",
            color: "darkgrey", // Slight gray color
            fontFamily: "Inter, sans-serif",
          }}
        >
          We specialize in crafting custom websites and mobile apps, custom
          applications that elevate your brand.
          <br></br>Our expertise extends to comprehensive CRM solutions and Zoho
          ERP, Microsoft Dynamics 365 Business Central training, implement and
          support, ensuring you harness the full potential of your technology.
          <br></br>
          Partner with us to transform your vision into reality and drive your
          success forward.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF5500",
            color: "#fff",
            textTransform: "none",
            fontWeight: "700",
            borderRadius: "30px",
            padding: "10px 30px",
            fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font sizes for button
            fontFamily: "Inter, sans-serif",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Slight shadow for button depth
            "&:hover": {
              backgroundColor: "#FF4400", // Slightly darker hover state
            },
          }}
        >
          Request a demo
        </Button>
      </Box>

      {/* Add the image here */}
      <Box
        sx={{
          zIndex: 2,
          maxWidth: "800px",
        }}
      >
        <img
          src={demoImage} // Use your image variable here
          alt="Demo"
          style={{
            marginTop: { sm: "0", md: "160px" },
            width: "100%", // Adjust size as needed
            height: "auto", // Maintain aspect ratio
            borderRadius: "10px", // Optional: rounded corners
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
