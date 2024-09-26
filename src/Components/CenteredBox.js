import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";
import bg2 from "../Assets/bg2.jpg";

const CenteredBox = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
    triggerOnce: true, // Only trigger once
  });

  return (
    <Box marginTop={{ xs: 24, md: 0 }} padding={{ md: 8, xs: 2 }}>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          borderRadius: "20px",
          padding: "3%",
          height: { xs: "50vh", sm: "60vh" }, // Responsive height
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        {/* Blur background */}
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(8px)",
            borderRadius: "20px",
            zIndex: 0,
          }}
        />
        {/* Text and Button content */}
        <Box
          ref={ref}
          sx={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center align content
            justifyContent: "center", // Center align vertically
            textAlign: "center", // Center text alignment
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: "20px",
              mb: 1,
              color: "lightgrey",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              fontSize: { xs: "20px", md: "40px" }, // Responsive font size
            }}
          >
            <b>
              Is your business ready to make a <br />
            </b>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mt: "10px",
              mb: 1,
              color: "farkblue",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              fontSize: { xs: "50px", md: "120px" }, // Responsive font size
            }}
          >
            <b>
              Digital Leap <br />
            </b>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: "lightgrey",
              fontSize: { xs: "15px", md: "20px" }, // Responsive font size
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            Embrace the future with innovative solutions and transform your
            operations today.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: "20px",
              color: "white",
              borderColor: "transparent",
              backgroundColor: "darkred",
              "&:hover": {
                backgroundColor: "darkblue",
                borderColor: "darkblue",
                color: "#fff",
              },
            }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CenteredBox;
