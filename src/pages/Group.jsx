import { KeyboardBackspace } from "@mui/icons-material";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Group = () => {
  const navigate = useNavigate();

  const IconButtons = () => {
    return (
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
    );
  };

  return (
    <Grid container height={"100vh"}>
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
    </Grid>
  );
};

export default Group;
