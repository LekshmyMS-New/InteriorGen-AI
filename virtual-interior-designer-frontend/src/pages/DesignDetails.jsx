import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/global.css";
import "../styles/designer.css";

const DesignDetails = () => {
  const { id } = useParams();
  const [design, setDesign] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDesignDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/designs/${id}`);
        setDesign(res.data);
      } catch (error) {
        console.error("Error fetching design details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDesignDetails();
  }, [id]);

  if (loading) {
    return <p className="loading-text">Loading your AI design...</p>;
  }

  if (!design) {
    return <p className="error-text">Design not found. Please try again.</p>;
  }

  return (
    <motion.div
      className="design-details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="design-header">
        <h2 className="page-title">{design.title}</h2>
        <Link to="/dashboard" className="back-btn">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Main Image Preview */}
      <motion.div
        className="design-preview"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={design.image}
          alt={design.title}
          className="design-main-image"
        />
        <div className="ai-badge">✨ AI Enhanced Layout</div>
      </motion.div>

      {/* AI Recommendations */}
      <motion.div
        className="ai-suggestions-section"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h3>AI Furniture Recommendations 🪑</h3>
        <div className="furniture-grid">
          {design.furniture.map((item, index) => (
            <motion.div
              key={index}
              className="furniture-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.image} alt={item.name} className="furniture-img" />
              <div className="furniture-info">
                <h4>{item.name}</h4>
                <p>{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Color Palette */}
      <motion.div
        className="color-palette-section"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h3>AI Color Palette 🎨</h3>
        <div className="color-palette">
          {design.colors.map((color, index) => (
            <div
              key={index}
              className="color-block"
              style={{ backgroundColor: color }}
            >
              <span>{color}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="design-actions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link to="/designer" className="action-btn">
          🎨 Edit in Designer
        </Link>
        <button
          className="action-btn secondary"
          onClick={() => alert("AI Re-imagining design...")}
        >
          🔁 Regenerate with AI
        </button>
      </motion.div>
    </motion.div>
  );
};

export default DesignDetails;
