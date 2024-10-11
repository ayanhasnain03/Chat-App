import { AttachFile, Send } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import { useRef, useState } from "react";

import AppLayout from "../components/layout/AppLayout";
import MessageComponents from "../components/shared/MessageComponents";
import { sampleMessages } from "../constants/sampleData";
const user = {
  _id: "1",
  name: "Vipin",
};
const Chat = () => {
  const containerRef = useRef(null);

  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent page refresh
  };

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={2}
        bgcolor={"#f5f5f5"}
        height={"85%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {sampleMessages?.map((i) => (
          <MessageComponents key={i._id} message={i} user={user} />
        ))}
      </Stack>

      <form onSubmit={handleSendMessage}>
        <Stack
          direction={"row"}
          spacing={2}
          padding={"1rem"}
          alignItems={"center"}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            marginTop: "1rem",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#d0d0d0",
              },
              padding: "0.5rem",
            }}
          >
            <AttachFile />
          </IconButton>

          <TextField
            variant="outlined"
            placeholder="Type a message..."
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              borderRadius: "20px",
              bgcolor: "#f5f5f5",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // Remove default border
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />

          <IconButton
            type="submit"
            sx={{
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#45a049",
              },
              padding: "0.5rem",
            }}
          >
            <Send />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default AppLayout()(Chat);
