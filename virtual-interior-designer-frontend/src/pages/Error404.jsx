import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-gray-100 to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-7xl font-bold text-gray-800 mb-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        404
      </motion.h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: "12px", paddingX: "24px", paddingY: "8px" }}
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
      <motion.div
        className="mt-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="AI Lost Illustration"
          className="w-64 rounded-2xl shadow-md"
        />
      </motion.div>
    </motion.div>
  );
};

export default Error404;
