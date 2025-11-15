import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DesignerCard = ({ design, onView, onEdit, onDelete }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: "spring", stiffness: 120 }}
      style={{ width: "100%", maxWidth: 320 }}
    >
      <Card
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 28px rgba(0,0,0,0.2)",
          },
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          height="180"
          image={design?.image || "/placeholder-room.jpg"}
          alt={design?.theme || "AI Design Preview"}
        />

        {/* Content */}
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#182848",
              mb: 0.5,
              textTransform: "capitalize",
            }}
          >
            {design?.theme || "Modern Aesthetic"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, lineHeight: 1.6 }}
          >
            Suggested Colors: {design?.colors?.join(", ") || "—"}
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Tooltip title="View in Detail">
              <IconButton
                onClick={() => onView?.(design)}
                sx={{
                  color: "#4b6cb7",
                  transition: "0.3s",
                  "&:hover": { color: "#182848", transform: "scale(1.2)" },
                }}
              >
                <VisibilityIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Edit Design">
              <IconButton
                onClick={() => onEdit?.(design)}
                sx={{
                  color: "#00aaff",
                  transition: "0.3s",
                  "&:hover": { color: "#0077cc", transform: "scale(1.2)" },
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Design">
              <IconButton
                onClick={() => onDelete?.(design)}
                sx={{
                  color: "#ff4d4d",
                  transition: "0.3s",
                  "&:hover": { color: "#d32f2f", transform: "scale(1.2)" },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DesignerCard;
