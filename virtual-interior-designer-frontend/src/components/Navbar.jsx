import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Designer", path: "/designer" },
    { name: "Gallery", path: "/gallery" },
    { name: "Notifications", path: "/notifications" },
    { name: "Upload History", path: "/upload-history" },  
     { name: "Profile", path: "/profile" },
    
    
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🏠 AI Interior Designer</Link>
      </div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
