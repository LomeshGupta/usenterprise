import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import bg1 from "../Assets/rie9.jpg";
import demoImage from "../Assets/telemetry.png";

const HeroSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [padding, setPadding] = useState(0);
  const [scale, setScale] = useState(1);
  const contentRef = useRef(null);

  // Debounced scroll handler to reduce the number of updates
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    // Update padding and scale based on scroll position
    setPadding(scrollY > 50 ? scrollY : 0);
    const newScale = Math.max(0.5, 1 - scrollY / 3000);
    setScale(newScale);
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]);

  // Intersection Observer for visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 }
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
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "left",
          color: "#fff",
          textAlign: "left",
          fontFamily: "Inter, sans-serif",
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
        <Box
          ref={contentRef}
          className={isVisible ? "fade-in" : ""}
          sx={{
            zIndex: 2,
            maxWidth: "800px",
            padding: "5%",
            paddingTop: "160px",
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "2.4rem", md: "4rem" },
              marginBottom: "20px",
              letterSpacing: "0.05em",
              color: "darkred",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Your Vision. <br /> Our Craft.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              marginBottom: "40px",
              color: "darkgrey",
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
              fontSize: { xs: "0.875rem", md: "1rem" },
              fontFamily: "Inter, sans-serif",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#FF4400",
              },
            }}
          >
            Request a demo
          </Button>
        </Box>

        <Box
          sx={{
            zIndex: 2,
            maxWidth: "800px",
          }}
        >
          <img
            src={demoImage}
            alt="Demo"
            style={{
              marginTop: { sm: "0", md: "160px" },
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
});

export default HeroSection;
