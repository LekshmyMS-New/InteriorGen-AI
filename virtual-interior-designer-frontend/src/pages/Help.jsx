import React from "react";

const Help = () => {
  const faqs = [
    {
      question: "How do I upload my room photo?",
      answer: "Go to the Upload page, select your room image, and submit it. AI will generate layout suggestions instantly.",
    },
    {
      question: "Can I drag and drop furniture?",
      answer: "Yes! In the Designer page, click and drag furniture to customize your room layout in 3D.",
    },
    {
      question: "How do I save my designs?",
      answer: "Click the Save button in Designer to store your design to your profile.",
    },
    {
      question: "Can I share my design?",
      answer: "Yes! Each saved design has a share option for social media or direct link.",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        background: "linear-gradient(135deg, #f5f8fb 0%, #e8f0fe 100%)",
        minHeight: "80vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#1a73e8" }}>
        🤖 Help & FAQs
      </h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ marginBottom: "10px", color: "#1a73e8" }}>{faq.question}</h3>
            <p style={{ color: "#555" }}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
