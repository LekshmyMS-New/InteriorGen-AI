import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e7ff, #f3e8ff)",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* AI glow orbs background */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle at center, rgba(155,100,255,0.4), transparent 70%)",
            borderRadius: "50%",
            top: "20%",
            left: "10%",
            zIndex: 0,
          }}
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 25, -20, 0],
          }}
          transition={{ duration: 9, repeat: Infinity }}
          style={{
            position: "absolute",
            width: 350,
            height: 350,
            background:
              "radial-gradient(circle at center, rgba(255,150,100,0.4), transparent 70%)",
            borderRadius: "50%",
            top: "40%",
            right: "5%",
            zIndex: 0,
          }}
        />

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          <Typography
            variant="h2"
            fontWeight="700"
            sx={{
              color: "#333",
              mb: 2,
              textShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            Design Your Dream Space with <span style={{ color: "#7b61ff" }}>AI</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#555",
              maxWidth: "650px",
              mx: "auto",
              mb: 4,
              fontWeight: 400,
            }}
          >
            Upload your room photo and let our AI suggest layouts, furniture,
            and color themes — all visualized in 3D.
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/upload")}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, #7b61ff 0%, #8b74f9 100%)",
              boxShadow: "0 6px 15px rgba(123,97,255,0.3)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #6a50ef 0%, #7b61ff 100%)",
              },
            }}
          >
            Try Now — It’s AI-Powered ✨
          </Button>
        </motion.div>
      </Box>

      {/* Feature Section */}
      <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: "#fff" }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={6}
          sx={{ color: "#333" }}
        >
          Why You’ll Love Our AI Interior Designer
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <AutoAwesomeIcon sx={{ fontSize: 50, color: "#7b61ff" }} />,
              title: "AI-Powered Suggestions",
              desc: "Get intelligent design ideas based on your room’s lighting, layout, and mood.",
            },
            {
              icon: <ThreeSixtyIcon sx={{ fontSize: 50, color: "#7b61ff" }} />,
              title: "3D Room Visualization",
              desc: "Visualize and rearrange furniture in realistic 3D — see your ideas come to life.",
            },
            {
              icon: <FavoriteIcon sx={{ fontSize: 50, color: "#7b61ff" }} />,
              title: "Personalized Recommendations",
              desc: "AI learns your preferences and suggests designs you’ll fall in love with.",
            },
          ].map((feature, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <Card
                  sx={{
                    borderRadius: "16px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", py: 5 }}>
                    {feature.icon}
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      mt={2}
                      mb={1}
                      color="text.primary"
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ maxWidth: 280, mx: "auto" }}
                    >
                      {feature.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: "linear-gradient(135deg, #7b61ff, #a26bff)",
          color: "#fff",
        }}
      >
        <Typography variant="h4" fontWeight="600" mb={2}>
          Start Designing Your Dream Home Today 🏠
        </Typography>
        <Typography variant="body1" mb={4}>
          Create, visualize, and personalize your interiors effortlessly with the
          power of AI.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/upload")}
          sx={{
            backgroundColor: "#fff",
            color: "#7b61ff",
            px: 4,
            py: 1.3,
            fontWeight: 600,
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#f0f0ff",
            },
          }}
        >
          Upload a Room Photo
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
