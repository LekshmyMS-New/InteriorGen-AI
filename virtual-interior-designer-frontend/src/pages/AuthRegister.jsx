// src/pages/AuthRegister.jsx
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

const AuthRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: connect with backend later
    navigate("/onboarding");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #7F00FF, #E100FF)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 7, repeat: Infinity }}
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.25), transparent)",
          top: 80,
          left: 120,
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ y: [0, -50, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
          bottom: 100,
          right: 100,
          zIndex: 0,
        }}
      />

      {/* Register card */}
      <Card
        component={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          width: 420,
          zIndex: 1,
          borderRadius: "20px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center", mb: 2 }}
          >
            Join the AI Studio ✨
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#555", textAlign: "center", mb: 3 }}
          >
            Create your account to start designing intelligent interiors
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              required
              margin="normal"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#7F00FF" },
                  "&.Mui-focused fieldset": { borderColor: "#E100FF" },
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              margin="normal"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#7F00FF" },
                  "&.Mui-focused fieldset": { borderColor: "#E100FF" },
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
                  "&:hover fieldset": { borderColor: "#7F00FF" },
                  "&.Mui-focused fieldset": { borderColor: "#E100FF" },
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
                background: "linear-gradient(45deg, #7F00FF, #E100FF)",
                "&:hover": {
                  background: "linear-gradient(45deg, #6B00E3, #C900E5)",
                },
              }}
            >
              Create AI Account
            </Button>
          </form>

          <Typography
            variant="body2"
            sx={{ mt: 3, textAlign: "center", color: "#666" }}
          >
            Already have an account?{" "}
            <span
              style={{ color: "#7F00FF", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AuthRegister;
