import { Box, Drawer, Grid, IconButton, Stack, Typography, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close, ExitToApp } from '@mui/icons-material';
import React, { useState } from 'react';
import { adminTabs } from '../../constants/route';
import { Link, Navigate, useLocation } from 'react-router-dom';

// Sidebar Component
const SideBar = ({ w = "100%" }) => {
  const location = useLocation();

  return (
    <Stack
      width={w}
      direction="column"
      p="2rem"
      spacing="2rem"
      sx={{
        bgcolor: "white",
        boxShadow: 3,
        borderRadius: 2,
        position: "relative",
        height: "100%",
      }}
    >
      <Typography variant="h5" fontWeight="bold" color="#FF6347">
        ChatApp 🔥
      </Typography>
      <Divider sx={{ my: 2 }} />
      
      <Stack spacing="1.5rem">
        {/* Map through admin tabs */}
        {adminTabs.map(({ name, path, icon: Icon }) => (
          <Link to={path} key={name} style={{ textDecoration: "none" }}>
            <Stack
              sx={{
                backgroundColor: location.pathname === path ? "#FF7F7F" : "transparent",
                borderRadius: 2,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                color: location.pathname === path ? "white" : "#333333",
                "&:hover": {
                  backgroundColor: "#FF7F7F",
                  color: "white",
                }
              }}
              direction="row"
              alignItems="center"
              p="0.5rem 1rem"
            >
              <IconButton sx={{ color: "inherit" }}>
                <Icon />
              </IconButton>
              <Typography variant="body1" sx={{ fontWeight: "500", ml: 1 }}>
                {name}
              </Typography>
            </Stack>
          </Link>
        ))}
      </Stack>

      {/* Logout Button */}
      <Divider sx={{ my: 2 }} />
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          cursor: "pointer",
          padding: "1rem",
          color: "#FF6347",
          "&:hover": {
            backgroundColor: "#FF7F7F",
            color: "white",
          },
          borderRadius: 2,
          transition: "background-color 0.3s ease",
        }}
      >
        <IconButton sx={{ color: "inherit" }}>
          <ExitToApp />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "500", ml: 1 }}>
          Logout
        </Typography>
      </Stack>
    </Stack>
  );
};

// Admin Layout Component
const isAdmin = false;
const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => setIsMobile(!isMobile);
  const handleClose = () => setIsMobile(false);
if (!isAdmin) {
  return <Navigate to="/admin" />
  
}
  return (
    <Grid container minHeight="100vh" sx={{ position: "relative", overflow: "hidden" }}>
      
      {/* Mobile Menu Icon */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          top: "1rem",
          right: "1rem", // Positioned to the right
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={handleMobile}
          sx={{
            color: "#FF6347",
            boxShadow: 2,
            "&:hover": { boxShadow: 5 },
            transition: "box-shadow 0.3s ease",
          }}
        >
          {isMobile ? <Close /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Sidebar for larger screens */}
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
          height: "100vh",
          boxShadow: 3,
          bgcolor: "white",
          position: "relative",
          borderRadius: 2,
        }}
      >
        <SideBar />
      </Grid>

      {/* Main content */}
      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        sx={{
          backgroundColor: "white",
          height: "100vh",
          padding: "2rem",
          overflowY: "auto",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {children}
      </Grid>

      {/* Mobile Drawer */}
      <Drawer
        open={isMobile}
        onClose={handleClose}
        sx={{
          width: "70vw", // A wider drawer for mobile
          boxShadow: 3,
          borderRadius: 2,
          padding: "2rem",
        }}
      >
        <SideBar w="100%" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
