import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: "light",
    notifications: true,
    aiSuggestions: true,
    autoSave: true,
    renderQuality: "high",
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleSelectChange = (e) => {
    setSettings({ ...settings, renderQuality: e.target.value });
  };

  return (
    <motion.div
      className="settings-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="settings-title">⚙️ Application Settings</h2>
      <p className="settings-desc">
        Personalize your AI design experience and manage how your workspace behaves.
      </p>

      <div className="settings-section">
        <h3>Appearance</h3>
        <div className="setting-item">
          <label>App Theme</label>
          <select
            value={settings.theme}
            onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="neo">AI Neon</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <h3>AI Preferences</h3>
        <div className="setting-item">
          <label>AI Design Suggestions</label>
          <motion.div
            className={`toggle ${settings.aiSuggestions ? "on" : ""}`}
            onClick={() => handleToggle("aiSuggestions")}
            whileTap={{ scale: 0.9 }}
          >
            <div className="thumb" />
          </motion.div>
        </div>

        <div className="setting-item">
          <label>Auto-Save Designs</label>
          <motion.div
            className={`toggle ${settings.autoSave ? "on" : ""}`}
            onClick={() => handleToggle("autoSave")}
            whileTap={{ scale: 0.9 }}
          >
            <div className="thumb" />
          </motion.div>
        </div>
      </div>

      <div className="settings-section">
        <h3>System Controls</h3>
        <div className="setting-item">
          <label>Notifications</label>
          <motion.div
            className={`toggle ${settings.notifications ? "on" : ""}`}
            onClick={() => handleToggle("notifications")}
            whileTap={{ scale: 0.9 }}
          >
            <div className="thumb" />
          </motion.div>
        </div>

        <div className="setting-item">
          <label>Render Quality</label>
          <select value={settings.renderQuality} onChange={handleSelectChange}>
            <option value="standard">Standard</option>
            <option value="high">High</option>
            <option value="ultra">Ultra</option>
          </select>
        </div>
      </div>

      <motion.button
        className="save-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        💾 Save Settings
      </motion.button>
    </motion.div>
  );
};

export default Settings;
