import React from "react";

const Gallery = () => {
  // Example designs, normally fetched from backend
 const designs = [
  { id: 1, title: "Modern Living Room", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lvOUSj73Ecu5QcA8bXiX3ZXJPA-695JIy2eWRPQ-wYhcYLYzXk9XUsL34GHfdJ4lbcc&usqp=CAU" },
  { id: 2, title: "Cozy Bedroom", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4EZW9SCGILpG46ScLYD7ostZfearZoaBoLFaZ7cNxXW0a3pCeHjgoWoZrUg2Hp9_T50A&usqp=CAU" },
  { id: 3, title: "Minimalist Kitchen", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfViL3ZmSmUEHk9AX6b6Gh2K74WJxvkBypn_tZnSt1SVTBFNbdIFFuXPu_d1uEoLihy8&usqp=CAU" },
  { id: 4, title: "Elegant Study", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14MeV96fZ_om4uYuR-svXLH7kbqwBjPUjJO9aRGgXMQF-G2OpESeRkB8qUOBpQwbE914&usqp=CAU" },
];


  return (
    <div
      style={{
        padding: "40px",
        background: "#f5f8fb",
        minHeight: "80vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#1a73e8" }}>
        🖼 Gallery of Designs
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {designs.map((design) => (
          <div
            key={design.id}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={design.image}
              alt={design.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: 0, color: "#1a73e8" }}>{design.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
