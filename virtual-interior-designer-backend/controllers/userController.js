const pool = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, email, created_at FROM users WHERE id=$1", [req.user.id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateProfile = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING id, name, email",
      [name, email, req.user.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
