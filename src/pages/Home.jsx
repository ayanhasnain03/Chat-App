import { Box, Typography } from "@mui/material";
import React from "react";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return (
    <Box>
      <Typography variant="h4" textAlign={"center"} p={"2rem"}>
        Select a friend to start a chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
