import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        background: "#ffffff",
        borderTop: "1px solid #e0e0e0",
        position: "sticky",
        bottom: 0,
        fontFamily: "Poppins, sans-serif",
        fontSize: "14px",
        color: "#555",
      }}
    >
      <div>© 2025 AI-Powered Virtual Interior Designer</div>
      <div style={{ display: "flex", gap: "16px" }}>
       
        <Link to="/settings" style={{ textDecoration: "none", color: "#555" }}>
          Settings
        </Link>
        <Link to="/help" style={{ textDecoration: "none", color: "#555" }}>
          Help
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
