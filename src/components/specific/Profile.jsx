import React from "react";
import { Avatar, Stack, Typography, Paper } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
const Profile = () => {
  return (
    <Stack spacing={3} direction={"column"} alignItems={"center"} sx={{ p: 2 }}>
      <Avatar
        src={"https://i.pravatar.cc/300"}
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
          boxShadow: 3,
        }}
      />
      <ProfileCard heading={"Bio"} text={"This is my bio"} />
      <ProfileCard
        heading={"Username"}
        text={"username"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"John Doe"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2022-01-01").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Paper
    elevation={3}
    sx={{
      p: 2,
      borderRadius: "8px",
      backgroundColor: "#1e1e1e",
      color: "white",
      width: "100%",
      maxWidth: "300px",
      display: "flex",
      alignItems: "center",
    }}
  >
    {Icon && (
      <div
        style={{
          backgroundColor: "#333",
          borderRadius: "50%",
          padding: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "1rem",
        }}
      >
        {Icon}
      </div>
    )}
    <Stack textAlign={"left"}>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {text}
      </Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Paper>
);

export default Profile;
