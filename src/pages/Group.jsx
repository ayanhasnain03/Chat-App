import { KeyboardBackspace, Menu as MenuIcon } from "@mui/icons-material";
import { Box, Drawer, Grid, IconButton, Tooltip } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Group = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Memoize handleMobile using useCallback
  const handleMobile = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const handleMobileClose = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  // IconButtons component no longer memoized as it's unnecessary
  const IconButtons = () => {
    return (
      <>
        {/* Menu icon for mobile */}
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            position: "fixed",
            right: "1rem",
            top: "1rem",
          }}
        >
          <IconButton onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Back button */}
        <Tooltip title="back">
          <IconButton
            sx={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              bgcolor: "rgba(0,0,0,0.8)",
              color: "white",
              transition: "all 0.3s ease-in-out",
              ":hover": {
                bgcolor: "black",
                transform: "scale(1.2)",
              },
            }}
            onClick={() => navigate("/")}
          >
            <KeyboardBackspace />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  return (
    <Grid container height={"100vh"}>
      {/* Group list sidebar (visible on small screens and larger) */}
      <Grid
        item
        sm={4}
        md={3}
        sx={{
          display: { xs: "none", sm: "block" },
          borderRight: "1px solid #ccc",
          bgcolor: "#f1f1f1",
        }}
        height={"100%"}
      >
        Group List
      </Grid>

      {/* Main content area */}
      <Grid
        item
        xs={12}
        sm={8}
        md={9}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        <IconButtons />
      </Grid>

      {/* Drawer for mobile menu */}
      <Drawer open={isMobileOpen} onClose={handleMobileClose}>
        <GroupList />
      </Drawer>
    </Grid>
  );
};
const GroupList = () => {};
export default Group;
