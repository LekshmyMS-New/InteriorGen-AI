import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const PreviewModal = ({ open, handleClose, design }) => {
  if (!design) return null;

  return (
    <AnimatePresence>
      {open && (
        <Modal open={open} onClose={handleClose}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.65)",
              backdropFilter: "blur(8px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Box
                sx={{
                  width: "90vw",
                  maxWidth: "900px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  position: "relative",
                }}
              >
                {/* Close Button */}
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    color: "#444",
                    zIndex: 2,
                    "&:hover": { color: "#000", transform: "scale(1.1)" },
                  }}
                >
                  <CloseIcon />
                </IconButton>

                {/* Image Section */}
                <Box
                  component="img"
                  src={design.image || "/placeholder-room.jpg"}
                  alt={design.theme}
                  sx={{
                    width: "100%",
                    height: 400,
                    objectFit: "cover",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                  }}
                />

                {/* Details Section */}
                <Box sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#182848",
                      mb: 1,
                      textTransform: "capitalize",
                    }}
                  >
                    {design.theme || "AI Interior Concept"}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}
                  >
                    {design.description ||
                      "This AI-generated design enhances spatial harmony with balanced textures, lighting, and aesthetic proportions. Perfect for modern interiors."}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  {/* Color Palette */}
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    Suggested Colors:
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {(design.colors || ["#eae0d5", "#b08968", "#7f5539"]).map(
                      (color, i) => (
                        <Box
                          key={i}
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            background: color,
                            border: "2px solid #fff",
                            boxShadow: "0 0 4px rgba(0,0,0,0.2)",
                          }}
                        />
                      )
                    )}
                  </Stack>

                  {/* Tags / AI Features */}
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    AI Insights:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {(design.tags || [
                      "Minimalist",
                      "AI Layout Optimized",
                      "Natural Light Boosted",
                      "Color-Mood Synced",
                    ]).map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        variant="outlined"
                        sx={{
                          borderRadius: "20px",
                          fontWeight: 500,
                          color: "#333",
                          borderColor: "rgba(0,0,0,0.2)",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default PreviewModal;
