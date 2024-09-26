import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Fade } from "@mui/material";
import slide1 from "../Assets/slide1.png";
import slide2 from "../Assets/slide2.png";
import slide3 from "../Assets/slide3.png";

const sections = [
  {
    id: "success",
    title: "Success",
    description: "Drive successful outcomes. Grow revenue.",
    buttonText: "Customer Success Software →",
    image: slide3,
    color: "#ff8200",
  },
  {
    id: "service",
    title: "Service",
    description: "World-class service. Convert clients into promoters.",
    buttonText: "Customer Service Tools →",
    image: slide2,
    color: "#ff5733",
  },
  {
    id: "sales",
    title: "Sales",
    description: "Streamline your sales process. Sell lasting deals.",
    buttonText: "Sales Management Software →",
    image: slide1,
    color: "#ff3300",
  },
];

const CustomerJourney = () => {
  const [activeSection, setActiveSection] = useState(0);

  // To cycle through sections every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prevSection) => (prevSection + 1) % sections.length);
    }, 2000); // Change section every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: "50px 5%", md: "100px 10%" },
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Content Section */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, lineHeight: 1.2, mb: 4 }}
          >
            Unite your customer journey.
          </Typography>

          {sections.map((section, index) => (
            <Box
              key={section.id}
              sx={{
                mb: 4,
                color: activeSection === index ? section.color : "#666",
                transition: "color 0.5s ease",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: activeSection === index ? section.color : "#666",
                }}
              >
                {section.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 2 }}>
                {section.description}
              </Typography>

              {/* Active Section Button */}
              {activeSection === index && (
                <Typography
                  variant="body2"
                  sx={{ color: section.color, fontWeight: 600 }}
                >
                  {section.buttonText}
                </Typography>
              )}
            </Box>
          ))}

          {/* Book a Demo Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: sections[activeSection].color,
              color: "#fff",
              padding: "10px 30px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: sections[activeSection].color,
              },
            }}
          >
            Book a demo
          </Button>
        </Grid>

        {/* Right Image Section */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            position: "relative", // Ensure proper positioning for the images
            display: "flex",
            justifyContent: "flex-start", // Align images to the top
            alignItems: "flex-start", // Align items to the top
            padding: 0, // Remove any padding
            margin: 0, // Remove any margin
            height: { xs: "auto", md: "100%" }, // Ensure container fills the height on larger screens
          }}
        >
          {sections.map((section, index) => (
            <Fade in={activeSection === index} key={section.id} timeout={1000}>
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 0, md: -200 }, // Align the image to the top of the container
                  left: 50,
                  width: "100%", // Ensure the image takes full width
                  display: activeSection === index ? "block" : "none",
                  filter: activeSection === index ? "blur(0)" : "blur(8px)",
                  transition: "filter 1s ease",
                }}
              >
                <Box
                  component="img"
                  src={section.image}
                  alt={`${section.title} Dashboard`}
                  sx={{
                    width: { xs: "300px", md: "auto" }, // Ensure the image covers the full width
                    height: { xs: "auto", md: "500px" }, // Make height responsive
                    borderRadius: "8px",
                    display: "block",
                    margin: 0,
                    mt: { xs: 4 },
                    padding: 0, // Remove any padding
                  }}
                />
              </Box>
            </Fade>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerJourney;
