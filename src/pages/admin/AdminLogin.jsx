import { useInputValidation } from "6pp";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
  const secretKey = useInputValidation("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const isAdmin = false;
  const submitHandler = async (e) => {
    e.preventDefault();

    }

if (isAdmin) {
  return <Navigate to="/admin/dashboard" />;
} 

  return (
    <div
      style={{
        backgroundColor: "#f0f4f7", // Soft background color
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            boxShadow: "0px 8px 16px rgba(0,0,0,0.1)", // Softer shadows for a more modern look
            borderRadius: "12px", // Rounded corners
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
            Admin Login
          </Typography>

          {/* Error message display */}
          {error && (
            <Typography color="error" variant="body2" sx={{ marginBottom: "1rem" }}>
              {error}
            </Typography>
          )}

          <form
            style={{
              width: "100%",
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px", // Rounded input field
                },
              }}
            />
            <Button
              sx={{
                marginTop: "1rem",
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0", // Darker shade on hover
                },
              }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}


export default AdminLogin;
