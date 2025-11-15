// src/pages/Upload.jsx
import React, { useState } from "react";
import { Box, Button, Typography, Card, CircularProgress, Grid } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setAiResult(null);
    }
  };

  const handleGenerateDesign = () => {
    setIsGenerating(true);
    // Simulated AI generation (replace with real backend call later)
    setTimeout(() => {
      setIsGenerating(false);
      setAiResult({
        layout: "Modern Scandinavian",
        colors: ["#EAEAEA", "#B0BEC5", "#607D8B"],
        furniture: ["Minimal Sofa", "Round Coffee Table", "Wall Art"],
      });
    }, 3000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1A1F2B, #283048, #485563)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        py: 6,
        px: 2,
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, textAlign: "center" }}>
          Upload Your Room Photo
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#bcbcbc", mb: 4, textAlign: "center" }}>
          Let AI visualize your dream interior with style suggestions and smart layouts.
        </Typography>
      </motion.div>

      {/* Upload Section */}
      <Card
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          width: "100%",
          maxWidth: 600,
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          p: 4,
          textAlign: "center",
          boxShadow: "0 0 20px rgba(255,255,255,0.05)",
        }}
      >
        {!image ? (
          <>
            <CloudUploadIcon sx={{ fontSize: 70, color: "#00E5FF", mb: 2 }} />
            <Typography variant="body1" sx={{ mb: 3, color: "#bcbcbc" }}>
              Drag & drop your room photo here or click to upload
            </Typography>
            <Button
              component="label"
              variant="contained"
              sx={{
                backgroundColor: "#00E5FF",
                color: "#000",
                fontWeight: 600,
                px: 3,
                borderRadius: "30px",
                "&:hover": { backgroundColor: "#00bcd4" },
              }}
            >
              Choose File
              <input hidden type="file" accept="image/*" onChange={handleFileChange} />
            </Button>
          </>
        ) : (
          <>
            <img
              src={image}
              alt="Room Preview"
              style={{
                width: "100%",
                borderRadius: "16px",
                marginBottom: "1.5rem",
                boxShadow: "0 0 20px rgba(0,229,255,0.3)",
              }}
            />

            {!isGenerating && !aiResult && (
              <Button
                onClick={handleGenerateDesign}
                variant="contained"
                startIcon={<AutoAwesomeIcon />}
                sx={{
                  backgroundColor: "#FF4081",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: "30px",
                  px: 3,
                  "&:hover": { backgroundColor: "#f50057" },
                }}
              >
                Generate AI Design
              </Button>
            )}

            {isGenerating && (
              <Box sx={{ mt: 3 }}>
                <CircularProgress sx={{ color: "#00E5FF" }} />
                <Typography variant="body2" sx={{ mt: 2, color: "#bcbcbc" }}>
                  AI is analyzing your room and creating a layout suggestion...
                </Typography>
              </Box>
            )}

            {aiResult && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ marginTop: "1.5rem" }}
              >
                <Typography variant="h6" sx={{ color: "#00E5FF", mb: 1 }}>
                  AI Suggested Layout: {aiResult.layout}
                </Typography>
                <Typography variant="body2" sx={{ color: "#bcbcbc", mb: 2 }}>
                  Suggested Colors:{" "}
                  <span style={{ color: aiResult.colors[2] }}>
                    {aiResult.colors.join(", ")}
                  </span>
                </Typography>
                <Typography variant="body2" sx={{ color: "#bcbcbc", mb: 3 }}>
                  Furniture Suggestions: {aiResult.furniture.join(", ")}
                </Typography>

                <Button
                  variant="outlined"
                  onClick={() => navigate("/designer")}
                  sx={{
                    borderColor: "#00E5FF",
                    color: "#00E5FF",
                    fontWeight: 600,
                    borderRadius: "30px",
                    "&:hover": { backgroundColor: "rgba(0,229,255,0.1)" },
                  }}
                >
                  Open in Room Designer
                </Button>
              </motion.div>
            )}
          </>
        )}
      </Card>
    </Box>
  );
};

export default Upload;
