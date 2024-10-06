import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu"; // Menu icon for mobile
import logo from "../Assets/logo1.png";
import useMediaQuery from "@mui/material/useMediaQuery"; // Hook for media query
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer
  const [bgColor, setBgColor] = useState("transparent"); // State for background color
  const open = Boolean(anchorEl);
  const solutionsButtonRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:900px)"); // Check if it's mobile view
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMenuOpen = () => {
    setAnchorEl(solutionsButtonRef.current);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Handle scroll event to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("#fff"); // Change to white when scrolled down
      } else {
        setBgColor("transparent"); // Change back to transparent
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: bgColor, // Use dynamic background color
        padding: isMobile ? "10px 20px" : "10px 40px",
        boxShadow: "none",
        transition: "background-color 0.3s ease", // Smooth transition
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          />
          {!isMobile && (
            <Typography
              variant="h6"
              sx={{ color: "#000", fontWeight: "550", color: "#d43126" }}
            >
              <span style={{ fontWeight: "900", color: "darkblue" }}>
                {" "}
                U.S.
              </span>{" "}
              <br></br>
              ENTERPRISES
            </Typography>
          )}
        </Box>

        {isMobile ? (
          // Mobile Menu Icon
          <>
            <IconButton
              onClick={handleDrawerOpen}
              sx={{
                color: "#000", // Black color for the menu icon
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            {/* Drawer for Mobile */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose}
              >
                <List>
                  <ListItem button onClick={() => navigate("/about")}>
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem button onClick={() => navigate("/overview")}>
                    <ListItemText primary="Overview" />
                  </ListItem>
                  <ListItem button onClick={() => navigate("/solutions")}>
                    <ListItemText primary="Solutions" />
                  </ListItem>
                  <ListItem button onClick={() => navigate("/contact")}>
                    <ListItemText primary="Contact" />
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "darkblue", // Dark blue for button
                        color: "#fff",
                        borderRadius: "25px",
                        padding: "10px 20px",
                        textTransform: "none",
                        fontWeight: "500",
                        fontSize: "15px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                      onClick={() => navigate("/demo")} // Redirect to demo page
                    >
                      Request a Demo
                      <ArrowForwardIcon />
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          // Desktop Menu (remains the same)
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              marginLeft: "auto",
            }}
          >
            <Button
              sx={{
                color: "#000", // Black
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => navigate("/about")} // Redirect to About page
            >
              About
            </Button>

            <Button
              sx={{
                color: "#000", // Black
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => navigate("/overview")} // Redirect to Overview page
            >
              Overview
            </Button>

            {/* Solutions with Dropdown */}
            <Button
              ref={solutionsButtonRef}
              sx={{
                color: "#000", // Black
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onMouseOver={handleMenuOpen}
              aria-controls="solutions-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              Solutions
            </Button>
            <Menu
              id="solutions-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseLeave: handleMenuClose,
              }}
              sx={{
                "& .MuiMenu-paper": {
                  backgroundColor: "#fff", // Lighter background for the dropdown
                  color: "#000", // Black text
                  borderRadius: "8px", // Rounded corners
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                  border: "1px solid #e0e0e0", // Light border around the dropdown
                  padding: "10px", // Adding padding for cleaner spacing
                  minWidth: "250px", // Minimum width for consistency
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/solutions/erp");
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "red", // Change text color to red on hover
                  },
                }}
              >
                ERP Implementation and Support Services
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/solutions/d365bc");
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "red",
                  },
                }}
              >
                D365BC Functional and Technical Training Program
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/solutions/web-development");
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "red",
                  },
                }}
              >
                Website Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/solutions/custom-app-development");
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "red",
                  },
                }}
              >
                Custom App Development (Web and Mobile)
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/solutions/project-management");
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "red",
                  },
                }}
              >
                Project Management Services
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/solutions/cloud-hosting");
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "red",
                  },
                }}
              >
                Cloud Hosting with Dedicated Support
              </MenuItem>
            </Menu>

            <Button
              sx={{
                color: "#000", // Black
                textTransform: "none",
                fontWeight: "500",
                marginRight: 3,
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => navigate("/contact")} // Redirect to Contact page
            >
              Contact
            </Button>
          </Box>
        )}

        {!isMobile && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "darkblue", // Dark blue for button
              color: "#fff",
              borderRadius: "25px",
              padding: "10px 20px",
              textTransform: "none",
              fontWeight: "500",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "blue", // Slightly darker blue on hover
                ".MuiSvgIcon-root": {
                  transform: "translateX(5px)", // Move the arrow slightly to the right
                },
              },
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "100%",
                backgroundColor: "blue", // Same darker blue for transition
                borderRadius: "inherit",
                transition: "width 0.3s ease",
                zIndex: -1, // Place behind the button
              },
              "&:hover:before": {
                width: "100%", // Color transition effect
              },
            }}
            onClick={() => navigate("/demo")} // Redirect to demo page
          >
            Request a Demo
            <ArrowForwardIcon sx={{ transition: "transform 0.3s ease" }} />
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
