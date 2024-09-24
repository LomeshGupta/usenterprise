import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import bg1 from "../Assets/rie9.jpg";
import demoImage from "../Assets/telemetry.png"; // Import your image here

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [padding, setPadding] = useState(0);
  const [scale, setScale] = useState(1); // New state for scaling
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        setPadding(scrollY); // Change to white when scrolled down
      } else {
        setPadding(0); // Change back to transparent
      }

      // Calculate scale based on scroll position
      const newScale = Math.max(0.5, 1 - scrollY / 1000); // Adjust the divisor for sensitivity
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Use Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        transform: `scale(${scale})`,
        boxShadow: scale < 0.95 ? "0px 2px 15px rgba(0, 0, 0, 0.1)" : "none",
        borderRadius: scale < 0.95 ? "10%" : "0",
        transition: "transform 0.6s ease-in-out, box-shadow 0.2s ease-in-out",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: { xs: "100vh", md: "105vh" },
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
            backdropFilter: "blur(2px)",
            zIndex: 1,
          },
        }}
      >
        {/* Content */}
        <Box
          ref={contentRef} // Attach ref to the content box
          className={isVisible ? "fade-in" : ""} // Apply fade-in class if visible
          sx={{
            zIndex: 2,
            maxWidth: "800px",
            padding: "5%",
            paddingTop: "160px",
            transition: "transform 0.2s ease-in-out", // Smooth transition
            // transform: `scale(${scale})`, // Apply scale transformation
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
            We create custom websites and mobile apps that elevate your brand,
            offering CRM solutions, Zoho ERP, and Microsoft Dynamics 365
            training. Partner with us to realize your vision and drive success.
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
    </Box>
  );
};

export default HeroSection;
