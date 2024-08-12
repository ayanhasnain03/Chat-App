import React from "react";
import { Box } from "@mui/material";

const RotateLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height to center vertically
      }}
    >
      <Box
        sx={{
          "--s": "5px",
          width: "calc(10 * var(--s))",
          display: "grid",
          aspectRatio: "1",
          borderRadius: "50%",
          WebkitMask:
            "radial-gradient(50% 50%, #0000 calc(99% - 2 * var(--s)), #000 calc(101% - 2 * var(--s)))",
          animation: "rotate 4s linear infinite",
          "&:before": {
            content: '""',
            background:
              "conic-gradient(from 25deg,#f8a201 25%,#fa2402 0 50%,#fdb3b0 0 75%,#02dde1 0)",
            WebkitMask:
              "repeating-conic-gradient(#0000 0 25deg,#000 23% 25%), radial-gradient(var(--s) at var(--s) 50%,#000 97%,#0000) left/calc(100% - 2 * var(--s)) 100% repeat-x, radial-gradient(var(--s) at 50% var(--s),#000 97%,#0000) top/100% calc(100% - 2 * var(--s)) repeat-y",
          },
          "@keyframes rotate": {
            to: {
              transform: "rotate(1turn)",
            },
          },
        }}
      />
    </Box>
  );
};

export default RotateLoader;
