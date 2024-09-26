import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MG1 from "../Assets/bg3.jpg";

export default function Services() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff", // Light background for the entire section
        padding: { xs: "20px", md: "40px" },
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Left Image (Quarter Circle Clip) */}
      <Box
        component="img"
        src={MG1}
        alt="Left Model Image"
        sx={{
          width: { xs: "260px", md: "500px" }, // Image size
          position: "absolute",
          top: { xs: "-40px", md: "-50px" }, // Adjust position
          left: { xs: "-40px", md: "-80px" }, // Adjust position
          zIndex: 1,
          clipPath: "polygon(0 0, 100% 0, 0 100%)", // Clips the image to 1/4 circle
          borderRadius: "100%", // Ensures it has the circular shape
        }}
      />

      {/* Title Section */}
      <Box
        pt={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: "bold",
            color: "#000",
            zIndex: 2, // Ensure text appears on top of the background
          }}
        >
          Our
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: "bold",
            color: "darkred",
            marginLeft: "10px",
            zIndex: 2,
          }}
        >
          Services
        </Typography>
      </Box>

      {/* Description Section */}
      <Typography
        variant="body1"
        sx={{
          color: "#333",
          fontSize: { xs: "16px", md: "18px" },
          marginBottom: "40px",
          zIndex: 2,
          position: "relative",
        }}
      >
        Our services are designed to meet your business needs and enhance
        operational efficiency.
      </Typography>

      {/* Service Boxes Section */}
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", zIndex: 2, position: "relative" }}
      >
        {[
          {
            title: "ERP Implementation and Support Services",
            description:
              "Streamline your operations with our comprehensive ERP solutions and dedicated support.",
            bgColor: "#fff", // White background
          },
          {
            title: "D365BC Functional and Technical Training Program",
            description:
              "Equip your team with the skills needed to maximize the benefits of Dynamics 365 Business Central.",
            bgColor: "darkred", // Dark red background
            textColor: "#fff", // White text for better contrast
          },
          {
            title: "Website Development",
            description:
              "Create a powerful online presence with our tailored website development services.",
            bgColor: "#fff", // White background
          },
          {
            title: "Custom App Development (Web and Mobile)",
            description:
              "Build custom applications tailored to your business needs for both web and mobile platforms.",
            bgColor: "darkred", // Dark red background
            textColor: "#fff", // White text for better contrast
          },
          {
            title: "Project Management Services",
            description:
              "Ensure your projects run smoothly with our expert project management services.",
            bgColor: "#fff", // White background
          },
          {
            title: "Cloud Hosting with Dedicated Support",
            description:
              "Experience reliable cloud hosting solutions backed by our dedicated support team.",
            bgColor: "darkred", // Dark red background
            textColor: "#fff", // White text for better contrast
          },
        ].map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                backgroundColor: service.bgColor,
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: service.textColor || "#9c8530", // Default text color
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: service.textColor ? "#fff" : "#555",
                  fontSize: "16px",
                }}
              >
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
