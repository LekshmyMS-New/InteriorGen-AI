import React, { useState } from "react";
import {
  Box,
  Fab,
  TextField,
  IconButton,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { motion, AnimatePresence } from "framer-motion";

const FloatingAIButton = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I’m your AI Interior Assistant. Ask me about room themes, colors, or layout ideas!",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setLoading(true);

    const userMsg = { role: "user", content: message };
    setChat((prev) => [...prev, userMsg]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content:
          "✨ Based on your request, I recommend a warm minimalistic layout with soft neutrals and accent lighting.",
      };
      setChat((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <Fab
        color="primary"
        aria-label="ai"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          background: "linear-gradient(135deg, #6e8efb, #a777e3)",
          color: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          "&:hover": {
            background: "linear-gradient(135deg, #5a7dfc, #8e5ee0)",
          },
        }}
      >
        <ChatIcon />
      </Fab>

      {/* AI Chat Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: 100,
              right: 30,
              zIndex: 2000,
            }}
          >
            <Paper
              elevation={10}
              sx={{
                width: 320,
                height: 430,
                borderRadius: "16px",
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(8px)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  AI Interior Assistant
                </Typography>
                <IconButton
                  onClick={() => setOpen(false)}
                  sx={{ color: "#fff" }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Chat Body */}
              <Box
                sx={{
                  flex: 1,
                  p: 2,
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {chat.map((msg, i) => (
                  <Box
                    key={i}
                    sx={{
                      alignSelf:
                        msg.role === "user" ? "flex-end" : "flex-start",
                      background:
                        msg.role === "user"
                          ? "linear-gradient(135deg, #84fab0, #8fd3f4)"
                          : "#f1f3f6",
                      color: msg.role === "user" ? "#000" : "#333",
                      px: 2,
                      py: 1,
                      borderRadius: "16px",
                      maxWidth: "80%",
                      fontSize: "0.9rem",
                      boxShadow:
                        msg.role === "user"
                          ? "0 3px 8px rgba(0,0,0,0.15)"
                          : "none",
                    }}
                  >
                    {msg.content}
                  </Box>
                ))}
                {loading && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    <CircularProgress size={24} color="secondary" />
                  </Box>
                )}
              </Box>

              {/* Input Box */}
              <Box
                sx={{
                  p: 1.5,
                  display: "flex",
                  alignItems: "center",
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Ask the AI..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  sx={{
                    "& fieldset": { border: "none" },
                    background: "#f7f8fa",
                    borderRadius: "10px",
                    mr: 1,
                  }}
                />
                <IconButton color="primary" onClick={handleSend}>
                  <SendIcon />
                </IconButton>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAIButton;
