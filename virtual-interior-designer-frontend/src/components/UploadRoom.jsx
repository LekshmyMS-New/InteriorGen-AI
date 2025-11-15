import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Fade,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const UploadRoom = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setAiResult(null);
    }
  };

  const simulateAIProcess = () => {
    if (!selectedFile) return alert("Please upload a room photo first!");
    setLoading(true);

    // Simulate AI API call delay
    setTimeout(() => {
      setLoading(false);
      setAiResult({
        image: "/ai-room-output-sample.jpg", // sample preview image
        theme: "Modern Minimalist",
        furniture: ["White Sofa", "Oak Coffee Table", "Ambient Wall Lights"],
        colors: ["#F5F5F5", "#EAE0D5", "#B89E97"],
      });
    }, 2500);
  };

  const handleDesignTransition = () => {
    navigate("/designer", { state: { aiResult } });
  };

  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 1,
            fontWeight: "bold",
            background: "linear-gradient(90deg,#4b6cb7,#182848)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Upload Your Room
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Let our AI analyze and design your dream space ✨
        </Typography>
      </motion.div>

      {/* Upload Box */}
      <Box
        sx={{
          border: "2px dashed #4b6cb7",
          borderRadius: "16px",
          width: "80%",
          maxWidth: "500px",
          p: 4,
          mt: 4,
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(8px)",
          transition: "0.3s ease",
          "&:hover": {
            boxShadow: "0 0 20px rgba(75,108,183,0.2)",
          },
        }}
      >
        <input
          type="file"
          accept="image/*"
          id="upload-input"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="upload-input">
          <Button
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
            sx={{
              background: "linear-gradient(90deg,#4b6cb7,#182848)",
              borderRadius: "10px",
              px: 3,
              py: 1.2,
              fontWeight: 600,
            }}
          >
            Upload Room Photo
          </Button>
        </label>

        {previewUrl && (
          <Card sx={{ mt: 3, borderRadius: "12px", overflow: "hidden" }}>
            <CardMedia
              component="img"
              height="220"
              image={previewUrl}
              alt="Uploaded room preview"
            />
          </Card>
        )}
      </Box>

      {/* Analyze Button */}
      {selectedFile && !aiResult && !loading && (
        <Button
          variant="contained"
          startIcon={<AutoAwesomeIcon />}
          sx={{
            mt: 4,
            background: "linear-gradient(90deg,#00f0b5,#00aaff)",
            borderRadius: "10px",
            px: 4,
            py: 1.5,
            fontWeight: 600,
          }}
          onClick={simulateAIProcess}
        >
          Generate AI Design
        </Button>
      )}

      {/* AI Loading */}
      {loading && (
        <Box sx={{ mt: 4 }}>
          <CircularProgress color="primary" />
          <Typography variant="body2" sx={{ mt: 2 }}>
            AI is analyzing your room layout...
          </Typography>
        </Box>
      )}

      {/* AI Result */}
      <Fade in={!!aiResult}>
        <Box sx={{ mt: 4 }}>
          {aiResult && (
            <Card
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={aiResult.image}
                alt="AI generated design"
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Theme: {aiResult.theme}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Furniture:</strong> {aiResult.furniture.join(", ")}
                  <br />
                  <strong>Color Palette:</strong>{" "}
                  {aiResult.colors.join(" • ")}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "linear-gradient(90deg,#4b6cb7,#182848)",
                    borderRadius: "10px",
                  }}
                  onClick={handleDesignTransition}
                >
                  Open in 3D Designer
                </Button>
              </CardContent>
            </Card>
          )}
        </Box>
      </Fade>
    </Box>
  );
};

export default UploadRoom;
