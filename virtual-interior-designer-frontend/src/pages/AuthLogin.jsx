// src/pages/AuthLogin.jsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useNavigate } from "react-router-dom";

const AuthLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary redirect for now
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #007BFF, #00BCD4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background orbs */}
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
          top: 50,
          left: 100,
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity }}
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
          bottom: 80,
          right: 100,
          zIndex: 0,
        }}
      />

      {/* Login card */}
      <Card
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{
          width: 400,
          zIndex: 1,
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center", mb: 2 }}
          >
            Welcome Back 👋
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#555", textAlign: "center", mb: 3 }}
          >
            Sign in to your <b>AI Interior Studio</b> dashboard
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              required
              margin="normal"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#007BFF" },
                  "&.Mui-focused fieldset": { borderColor: "#00BCD4" },
                },
              }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
              margin="normal"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#007BFF" },
                  "&.Mui-focused fieldset": { borderColor: "#00BCD4" },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              startIcon={<AutoAwesomeIcon />}
              sx={{
                mt: 3,
                py: 1.4,
                fontSize: "1rem",
                borderRadius: "50px",
                textTransform: "none",
                background: "linear-gradient(45deg, #007BFF, #00BCD4)",
                "&:hover": {
                  background: "linear-gradient(45deg, #005FCC, #00A0B2)",
                },
              }}
            >
              Sign in with AI Magic
            </Button>
          </form>

          <Typography
            variant="body2"
            sx={{ mt: 3, textAlign: "center", color: "#666" }}
          >
            Don’t have an account?{" "}
            <span
              style={{ color: "#007BFF", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AuthLogin;
