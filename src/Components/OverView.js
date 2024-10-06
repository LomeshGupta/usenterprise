import React from "react";
import { Box, Grid, Typography, Card, CardContent, Fade } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab"; // For milestones timeline
import MG1 from "../Assets/bg3.jpg"; // Sample image for background

export default function OverviewPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        padding: { xs: "20px", md: "50px" },
        paddingTop: { xs: "45%", md: "15%" },
      }}
    >
      {/* About Section */}
      <Fade in timeout={1000}>
        <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="darkred"
            gutterBottom
          >
            About US Enterprises
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ marginTop: "40px", maxWidth: "800px", margin: "auto" }}
          >
            US Enterprises is a leading provider of innovative technology
            solutions, specializing in website development, web and mobile
            application development, project management, cloud services, and ERP
            solutions.
          </Typography>
        </Box>
      </Fade>

      {/* Mission and Vision Section */}
      <Grid container spacing={4} sx={{ marginBottom: "50px" }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              position: "relative",
              width: "100%",
              height: "70vh", // Fixed height
              boxShadow: 3,
              overflow: "hidden", // Ensures the overlay doesn't overflow
              transition: "transform 0.3s ease-in-out", // Smooth transition for hover effect
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {/* Background Image */}
            <Box
              component="img"
              src={MG1} // Replace with your actual image source
              alt="Mission Background"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />
            {/* Black Fog Effect */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%", // Adjust the height of the fog
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.0))", // Darker fog effect for better visibility
                zIndex: 2, // Ensure fog is above the image
              }}
            />
            <CardContent
              sx={{ position: "relative", zIndex: 3, height: "40vh" }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "#fff",
                  position: "absolute",
                  bottom: "-15vh",
                  left: "20px",
                }}
              >
                Mission Statement
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  position: "absolute",
                  bottom: "-24vh",
                  left: "20px",
                }}
              >
                Our mission is to deliver exceptional technology solutions that
                drive business success. We strive to understand our clients'
                unique needs and challenges, providing tailored services that
                enhance operational efficiency and foster growth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              position: "relative",
              width: "100%",
              height: "70vh", // Fixed height
              boxShadow: 3,
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out", // Smooth transition for hover effect
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {/* Background Image */}
            <Box
              component="img"
              src={MG1} // Replace with your actual image source
              alt="Vision Background"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />
            {/* Black Fog Effect */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%", // Adjust the height of the fog
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.0))", // Darker fog effect for better visibility
                zIndex: 2, // Ensure fog is above the image
              }}
            />
            <CardContent sx={{ position: "relative", zIndex: 3 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "#fff",
                  position: "absolute",
                  bottom: "-51vh",
                  left: "20px",
                }}
              >
                Vision Statement
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  position: "absolute",
                  bottom: "-56.6vh",
                  left: "20px",
                }}
              >
                To redefine business possibilities through cutting-edge
                technology and a commitment to client success.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Target Audience Section */}
      <Fade in timeout={1500}>
        <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
          <Typography variant="h3" fontWeight="bold" color="darkred">
            Target Audience
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ marginTop: "20px", maxWidth: "800px", margin: "auto" }}
          >
            We cater to small and medium-sized businesses, large enterprises,
            startups, and non-profits, offering tailored technology solutions to
            meet their specific needs.
          </Typography>
        </Box>
      </Fade>

      {/* Unique Selling Proposition (USP) Section */}
      <Grid container spacing={4} sx={{ marginBottom: "50px" }}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: "100%",
              padding: "20px",
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Tailored Solutions
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Each project is customized to meet specific needs, ensuring
                maximum impact and effectiveness.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: "100%",
              padding: "20px",
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                AI-Driven Insights
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We integrate AI technologies that provide actionable insights
                and enhance customer engagement.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: "100%",
              padding: "20px",
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Seamless Integration
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We excel in integrating chatbots and AI technologies into
                existing systems, improving user experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Key Milestones Section */}
      <Fade in timeout={2000}>
        <Box sx={{ marginBottom: "50px" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="darkred"
            textAlign="center"
          >
            Key Milestones
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" color="textSecondary">
                  2022: Established US Enterprises
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" color="textSecondary">
                  2023: Launched proprietary CRM with AI capabilities
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" color="textSecondary">
                  2024: Completed six successful projects across various
                  industries
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" color="textSecondary">
                  2024: Expanded to cloud solutions and ERP implementations
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Fade>

      {/* Case Studies Section */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="darkred"
            textAlign="center"
            sx={{ marginBottom: "20px" }}
          >
            Case Studies
          </Typography>
        </Grid>

        {/* Case Study 1 */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              padding: "20px",
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Commercial Property Management
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We developed a custom web app for a commercial property firm,
                streamlining tenant communications and reducing maintenance
                response time by 40%.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Case Study 2 */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              padding: "20px",
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Corporate Website for Tech Startup
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Created a professional website for a tech startup, leading to a
                40% increase in organic traffic and successful funding rounds.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Case Study 3 */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              padding: "20px",
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                ERP & Mobile App Integration
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Managed ERP system integration for a healthcare organization,
                reducing data retrieval times by 30%.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Case Study 4 */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              padding: "20px",
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                ERP Implementation for Manufacturing Firm
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Led ERP implementation, improving operational efficiency by 35%
                within three months.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
