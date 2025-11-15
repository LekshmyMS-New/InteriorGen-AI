// models/Design.js
import { pool } from "../config/db.js";

export async function createDesignTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS designs (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id),
        title VARCHAR(100),
        image_url TEXT,
        ai_data JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Designs table created successfully");
  } catch (err) {
    console.error("Error creating designs table:", err);
  }
}

// Call function once for initialization
createDesignTable();
