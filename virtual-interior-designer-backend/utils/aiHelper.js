const axios = require("axios");
require("dotenv").config();

const getAISuggestions = async (roomImageUrl) => {
  // Replace with your preferred AI API
  // Example: OpenAI DALL·E for furniture suggestions
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        prompt: `Suggest furniture, layout, and color palette for this room: ${roomImageUrl}`,
        n: 1,
        size: "512x512",
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.AI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = { getAISuggestions };
