// src/components/AvatarMenu.jsx
import React, { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Person from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";

const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      {/* Animated Avatar with AI pulse effect */}
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        style={{
          display: "inline-block",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: "absolute",
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            borderRadius: "50%",
            border: "2px solid rgba(75,108,183,0.5)",
            filter: "drop-shadow(0 0 6px rgba(75,108,183,0.5))",
          }}
        />
        <Avatar
          alt="User"
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          sx={{
            width: 42,
            height: 42,
            border: "2px solid rgba(75,108,183,0.8)",
          }}
        />
      </motion.div>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 180,
            borderRadius: "16px",
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
          Dashboard
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AvatarMenu;
