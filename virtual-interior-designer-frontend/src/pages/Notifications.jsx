import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/global.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "AI Layout Suggestion Ready",
      message: "Your uploaded living room photo has been analyzed. Check out your AI-generated layout ideas.",
      time: "5 mins ago",
      type: "success",
    },
    {
      id: 2,
      title: "New Furniture Added",
      message: "AI just added 3 new Scandinavian-style chairs to your design board.",
      time: "1 hour ago",
      type: "info",
    },
    {
      id: 3,
      title: "Design Saved",
      message: "Your recent 3D design ‘Cozy Living Space’ was successfully saved.",
      time: "3 hours ago",
      type: "success",
    },
    {
      id: 4,
      title: "AI Suggestion Update",
      message: "AI model version 3.1 has improved lighting suggestions for modern homes.",
      time: "Yesterday",
      type: "update",
    },
  ]);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const typeColor = {
    success: "#A5F3B9",
    info: "#B8E1FF",
    update: "#FFD699",
  };

  return (
    <motion.div
      className="notifications-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="page-title">Your AI Notifications 🔔</h2>
      <p className="page-subtext">
        Stay updated with real-time AI activity, design insights, and system updates.
      </p>

      <AnimatePresence>
        {notifications.length > 0 ? (
          notifications.map((note) => (
            <motion.div
              key={note.id}
              className="notification-card"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ borderLeft: `5px solid ${typeColor[note.type]}` }}
            >
              <div className="notification-header">
                <h3>{note.title}</h3>
                <button
                  className="dismiss-btn"
                  onClick={() => removeNotification(note.id)}
                >
                  ✖
                </button>
              </div>
              <p className="notification-msg">{note.message}</p>
              <span className="notification-time">{note.time}</span>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="no-notifications"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>🎉 You’re all caught up! No new notifications.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Notifications;
