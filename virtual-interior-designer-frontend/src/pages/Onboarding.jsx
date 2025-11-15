// src/pages/Onboarding.jsx
import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0F2027, #203A43, #2C5364)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        color: "#fff",
      }}
    >
      {/* Floating gradient lights */}
      <motion.div
        animate={{ y: [0, 50, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          top: 100,
          left: 120,
          width: 250,
          height: 250,
          background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ y: [0, -60, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: 120,
          right: 100,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, textAlign: "center" }}>
          Welcome to <span style={{ color: "#00E5FF" }}>AI Interior Studio</span>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            color: "#cfcfcf",
            maxWidth: 600,
            mb: 6,
            lineHeight: 1.6,
          }}
        >
          Your personal AI design companion is here to help you create breathtaking
          interiors — powered by advanced visualization & smart layout algorithms.
        </Typography>
      </motion.div>

      {/* AI Chat-style Onboarding */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          zIndex: 1,
          width: "90%",
          maxWidth: 600,
        }}
      >
        {/* Message 1 */}
        <Card
          component={motion.div}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          sx={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            alignSelf: "flex-start",
            maxWidth: "80%",
          }}
        >
          <CardContent>
            <Typography variant="body1">
              👋 Hi there! I’m <b>Ava</b>, your AI design companion.
            </Typography>
          </CardContent>
        </Card>

        {/* Message 2 */}
        <Card
          component={motion.div}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          sx={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            alignSelf: "flex-end",
            maxWidth: "80%",
          }}
        >
          <CardContent>
            <Typography variant="body1">
              📸 Upload a photo of your room, and I’ll suggest the best layouts,
              furniture, and color palettes for you.
            </Typography>
          </CardContent>
        </Card>

        {/* Message 3 */}
        <Card
          component={motion.div}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          sx={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            alignSelf: "flex-start",
            maxWidth: "80%",
          }}
        >
          <CardContent>
            <Typography variant="body1">
              🪄 Want to see magic? Let’s get started!
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
      >
        <Button
          variant="contained"
          startIcon={<AutoAwesomeIcon />}
          sx={{
            mt: 6,
            py: 1.4,
            px: 5,
            fontSize: "1.1rem",
            borderRadius: "50px",
            background: "linear-gradient(45deg, #00BCD4, #00E5FF)",
            color: "#000",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              background: "linear-gradient(45deg, #00ACC1, #00D1E0)",
            },
          }}
          onClick={() => navigate("/dashboard")}
        >
          Start My AI Journey
        </Button>
      </motion.div>
    </Box>
  );
};

export default Onboarding;
