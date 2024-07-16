import {
  Avatar,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(!isLogin);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        elevation={3}
      >
        {isLogin ? (
          <>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Login
            </Typography>
            <form style={{ width: "100%" }}>
              <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="Username"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                fullWidth
                type="password"
                margin="normal"
                variant="outlined"
                label="Password"
                sx={{ marginBottom: 2 }}
              />
              <Button
                sx={{ marginTop: 2, marginBottom: 2 }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign="center" sx={{ margin: "1rem 0" }}>
                Or
              </Typography>
              <Button
                onClick={toggleLogin}
                variant="outlined"
                color="primary"
                fullWidth
              >
                Register
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Sign Up
            </Typography>
            <form style={{ width: "100%" }}>
              <Stack
                position="relative"
                width="10rem"
                margin="auto"
                marginBottom={2}
              >
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file" />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="Bio"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="Username"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                fullWidth
                type="password"
                margin="normal"
                variant="outlined"
                label="Password"
                sx={{ marginBottom: 2 }}
              />
              <Button
                sx={{ marginTop: 2, marginBottom: 2 }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Register
              </Button>
              <Typography textAlign="center" sx={{ margin: "1rem 0" }}>
                Or
              </Typography>
              <Button
                onClick={toggleLogin}
                variant="outlined"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
