import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// --- AI API call to get furniture/layout/color suggestions ---
export const fetchAISuggestions = async (roomId) => {
  try {
    const res = await api.get(`/design/${roomId}/ai-suggestions`);
    return res.data; // { furniture: [...], palette: [...] }
  } catch (err) {
    console.error("Error fetching AI suggestions:", err);
    return { furniture: [], palette: [] };
  }
};

// --- API call to fetch all user-uploaded rooms ---
export const fetchUserRooms = async () => {
  try {
    const res = await api.get("/design/user-rooms");
    return res.data; // [{id, title, images, aiSuggestions}, ...]
  } catch (err) {
    console.error("Error fetching user rooms:", err);
    return [];
  }
};

export default api;
