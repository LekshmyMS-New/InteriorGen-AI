import React, { useState } from "react";
import { motion } from "framer-motion";
import DesignerCard from "../components/DesignerCard";
import "../styles/global.css";

const Profile = () => {
  const [user] = useState({
    name: "Jacob Stephen",
    role: "AI-Powered Interior Designer",
    bio: "Passionate about blending AI intelligence with interior aesthetics to create living spaces that feel both futuristic and homely.",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  });

  const [skills] = useState([
    { name: "AI-Assisted Design", level: 95 },
    { name: "3D Visualization (Three.js)", level: 90 },
    { name: "UI/UX Creativity", level: 92 },
    { name: "React + Framer Motion", level: 85 },
  ]);

  const [designs] = useState([
    {
      id: 1,
      title: "Modern Cozy Apartment",
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
      tags: ["AI Suggested", "3D Layout"],
    },
    
    {
      id: 2,
      title: "Luxury Bedroom Concept",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      tags: ["Texture Analysis", "AI Mood Board"],
    },
  ]);

  return (
    <motion.div
      className="profile-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="profile-header">
        <motion.img
          src={user.avatar}
          alt="Avatar"
          className="profile-avatar"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <h4>{user.role}</h4>
          <p>{user.bio}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="edit-btn"
          >
            Edit Profile ✏️
          </motion.button>
        </div>
      </div>

      <div className="ai-stats">
        <h3>AI Skills & Expertise</h3>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-bar"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.2, delay: index * 0.3 }}
          >
            <span>{skill.name}</span>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: `${skill.level}%` }}>
                {skill.level}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="portfolio-section">
        <h3>Your Design Portfolio</h3>
        <div className="design-grid">
          {designs.map((d) => (
            <DesignerCard key={d.id} design={d} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
