import React, { useState, useEffect } from "react";
import { Box, Typography, Select, MenuItem, CircularProgress } from "@mui/material";
import RoomDesigner from "../components/RoomDesigner";
import { fetchUserRooms } from "../api/api"; // API to fetch user's uploaded rooms

export default function Designer() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRooms() {
      setLoading(true);
      try {
        const data = await fetchUserRooms(); // Backend returns user uploaded rooms
        setRooms(data);
        if (data.length > 0) setSelectedRoom(data[0].id);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadRooms();
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>Loading your rooms...</Typography>
      </Box>
    );

  if (!rooms.length)
    return (
      <Box sx={{ p: 5 }}>
        <Typography variant="h5">You have no uploaded rooms yet.</Typography>
        <Typography sx={{ mt: 2 }}>
          Upload a room photo first to generate AI-powered layouts.
        </Typography>
      </Box>
    );

  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      <Typography variant="h4" sx={{ mb: 3, color: "#1a73e8", fontWeight: 600 }}>
        AI-Powered Room Designer
      </Typography>

      {/* Room Selector */}
      <Box sx={{ mb: 3, width: 250 }}>
        <Select
          fullWidth
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          {rooms.map((room) => (
            <MenuItem key={room.id} value={room.id}>
              {room.title}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Room Designer */}
      {selectedRoom && <RoomDesigner roomId={selectedRoom} />}
    </Box>
  );
}
