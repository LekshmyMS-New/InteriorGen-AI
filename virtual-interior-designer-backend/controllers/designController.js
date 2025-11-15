const pool = require("../models/Design");
const { getAISuggestions } = require("../utils/aiHelper");

exports.uploadRoom = async (req, res) => {
  try {
    const { title } = req.body;
    const room_image = req.file.path;

    const aiData = await getAISuggestions(room_image);

    const result = await pool.query(
      "INSERT INTO designs (user_id, title, room_image, ai_suggestions) VALUES ($1, $2, $3, $4) RETURNING *",
      [req.user.id, title, room_image, aiData]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUserDesigns = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM designs WHERE user_id=$1", [req.user.id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getDesignById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM designs WHERE id=$1", [id]);
    if (!result.rows[0]) return res.status(404).json({ message: "Design not found" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
