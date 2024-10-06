import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MG1 from "../Assets/bg3.jpg"; // Sample image for the background, replace with your service images

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

      {/* Service Tiles Section */}
      <Grid
        container
        spacing={2}
        sx={{
          zIndex: 2,
          position: "relative",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        {[
          {
            title: "ERP Implementation and Support Services",
            image:
              "https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149379179.jpg?t=st=1728238097~exp=1728241697~hmac=d6a23e9f2e1fc55c6f1b0ed6a4d67153c1076e395b5eff5d06f2926c96080609&w=740",
          },
          {
            title: "D365BC Functional and Technical Training Program",
            image:
              "https://img.freepik.com/free-photo/team-working-animation-project_23-2149269879.jpg?t=st=1728238255~exp=1728241855~hmac=1f3bb64af6d49c0700c299aba371b0c272394cd2682d0e91a914fdfb5b8e61f7&w=740",
          },
          {
            title: "Website Development",
            image:
              "https://img.freepik.com/free-photo/top-view-man-working-computer-night-holding-mug-tea_169016-51092.jpg?t=st=1728238354~exp=1728241954~hmac=db463f803dccfe03a825913d6638bd689e90a7cd6b64cf47ae6360fa0d8b3791&w=740",
          },
          {
            title: "Custom App Development (Web and Mobile)",
            image:
              "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169863.jpg?t=st=1728237788~exp=1728241388~hmac=e15f8fec12eb42e2445159a5ee34751ee4a034067cb9c01637b01bfb64e1136f&w=740",
          },
          {
            title: "Project Management Services",
            image:
              "https://img.freepik.com/free-photo/diverse-multi-ethnic-business-teamwork-overworking-office-meeting-room-analyzing-financial-graphs_482257-8164.jpg?t=st=1728238456~exp=1728242056~hmac=9efa2027cd82c2e2e865492ade860d26efeed026d798bc6bea5e9e3e82920187&w=740",
          },
          {
            title: "Cloud Hosting with Dedicated Support",
            image:
              "https://img.freepik.com/free-vector/data-network-illustration_24908-57791.jpg?t=st=1728238548~exp=1728242148~hmac=00532f50087987b3f409222abb702a779d7b3114595cc4898e1c274678e2f006&w=740",
          },
        ].map((service, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "40vh", md: "40vh" }, // Fixed height for both mobile and desktop
                width: { xs: "100%", md: "auto" }, // Fixed width for both mobile and desktop
                borderRadius: "15px",
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.04)",
                },
              }}
            >
              {/* Red fog effect */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "30%", // Adjust height of the red fog
                  background:
                    "linear-gradient(transparent, rgba(212, 49, 38, 0.7))",
                  transition: "background 0.3s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "10px", // Adjust padding for text
                  "&:hover": {
                    background:
                      "linear-gradient(transparent, rgba(212, 49, 38, 1))",
                  },
                }}
              >
                {/* Service Title */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "left",
                    fontSize: "22px",
                    width: "100%",
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
