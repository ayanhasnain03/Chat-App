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
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";
import axios from "axios";
import { server } from "../constants/config";
import { useDispatch } from "react-redux";
import { userExist } from "../redux/reducer/auth";
import toast from "react-hot-toast";
const Login = () => {
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword();
  const avatar = useFileHandler("single");

  const handleLogin = async(e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
try {
  const { data } = await axios.post(
    `${server}/api/v1/user/login`,
    {
      username: username.value,
      password: password.value,
    },
    config
  );
  dispatch(userExist(data));
  toast.success(data.message);
} catch (error) {
  toast.error(error.response.data.message);
}
    };

  const handleSignUp = async(e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("name", name.value);
    formData.append("bio",bio.value);
    formData.append("username", username.value);
    formData.append("password", password.value);
    formData.append("avatar", avatar.file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        withCredentials: true
      },
    };

    try {
      const {data} = await axios.post(
        `${server}/api/v1/user/new`,
        formData,
        config
      )
      dispatch(userExist(data));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
          boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
          borderRadius: "8px",
        }}
        elevation={3}
      >
        {isLogin ? (
          <>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Login
            </Typography>
            <form style={{ width: "100%" }} onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="Username"
                sx={{ marginBottom: 2 }}
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                type="password"
                margin="normal"
                variant="outlined"
                label="Password"
                sx={{ marginBottom: 2 }}
                value={password.value}
                onChange={password.changeHandler}
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
            <form style={{ width: "100%" }} onSubmit={handleSignUp}>
              <Stack
                position="relative"
                width="10rem"
                margin="auto"
                marginBottom={2}
              >
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                  src={avatar.preview}
                />
                {avatar.error && (
                  <Typography color="error" textAlign="center">
                    {avatar.error}
                  </Typography>
                )}
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
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name"
                value={name.value}
                onChange={name.changeHandler}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="Bio"
                sx={{ marginBottom: 2 }}
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="Username"
                sx={{ marginBottom: 2 }}
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                type="password"
                margin="normal"
                variant="outlined"
                label="Password"
                sx={{ marginBottom: 2 }}
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
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
