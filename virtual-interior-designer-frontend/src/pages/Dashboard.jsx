import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    uploads: 0,
    aiSuggestions: 0,
    savedDesigns: 0,
  });

  useEffect(() => {
    // Simulate AI data loading
    const timer = setTimeout(() => {
      setStats({
        uploads: 8,
        aiSuggestions: 25,
        savedDesigns: 6,
      });
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const cards = [
    { label: "Total Uploads", value: stats.uploads, color: "#7b5fff" },
    { label: "AI Suggestions Generated", value: stats.aiSuggestions, color: "#c89fff" },
    { label: "Saved Designs", value: stats.savedDesigns, color: "#6dd5ed" },
  ];

  return (
    <motion.div
      className="dashboard-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="page-title"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
      >
        Welcome to Your AI Dashboard 🧩
      </motion.h2>

      <p className="dashboard-subtext">
        A quick look at your creative activity powered by our AI engine.
      </p>

      {/* AI Stats Cards */}
      <div className="dashboard-stats">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="stat-card"
            style={{ background: card.color }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{card.value}</h3>
            <p>{card.label}</p>
          </motion.div>
        ))}
      </div>

      {/* AI Insights Section */}
      <motion.div
        className="ai-insight-box"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3>🤖 AI Insight</h3>
        <p>
          Based on your recent uploads, you seem to love Scandinavian design!
          Try uploading a minimalistic layout next for refined suggestions.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
