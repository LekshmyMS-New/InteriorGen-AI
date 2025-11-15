import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { Box, Button, Typography, Modal } from "@mui/material";
import { fetchAISuggestions } from "../api/api"; // Backend AI API
import FloatingAIButton from "./FloatingAIButton";
import PreviewModal from "./PreviewModal";
import * as THREE from "three";

export default function RoomDesigner({ roomId }) {
  const [furniture, setFurniture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [palette, setPalette] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    async function loadAISuggestions() {
      setLoading(true);
      try {
        // Call backend AI API to get furniture & color suggestions
        const data = await fetchAISuggestions(roomId);
        setFurniture(data.furniture);
        setPalette(data.palette);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAISuggestions();
  }, [roomId]);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "80vh" }}>
      {loading && (
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#1a73e8",
            fontWeight: 600,
            fontSize: "1.5rem",
            zIndex: 10,
          }}
        >
          Generating AI Layout...
        </Typography>
      )}

      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Environment preset="city" />

        {/* Room floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeBufferGeometry args={[20, 20]} />
          <meshStandardMaterial color={"#f0f0f0"} />
        </mesh>

        {/* AI-suggested furniture */}
        {furniture.map((item, idx) => (
          <mesh
            key={idx}
            position={item.position}
            rotation={item.rotation}
            scale={item.scale}
            castShadow
          >
            <boxGeometry args={item.dimensions} />
            <meshStandardMaterial color={item.color || "#8c8c8c"} />
          </mesh>
        ))}
      </Canvas>

      {/* AI Palette Display */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          display: "flex",
          gap: 1,
        }}
      >
        {palette.map((color, i) => (
          <Box
            key={i}
            sx={{
              width: 30,
              height: 30,
              backgroundColor: color,
              borderRadius: "50%",
              border: "1px solid #ccc",
            }}
          />
        ))}
      </Box>

      {/* Preview Modal Button */}
      <Button
        variant="contained"
        sx={{ position: "absolute", bottom: 16, left: 16 }}
        onClick={() => setPreviewOpen(true)}
      >
        Preview Layout
      </Button>

      {/* Floating AI Assistant */}
      <FloatingAIButton roomId={roomId} />

      <PreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        furniture={furniture}
        palette={palette}
      />
    </Box>
  );
}
