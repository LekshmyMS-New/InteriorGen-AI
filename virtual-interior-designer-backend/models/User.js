// models/User.js
import { pool } from "../config/db.js";

export async function createUserTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Users table created successfully");
  } catch (err) {
    console.error("Error creating users table:", err);
  }
}

// Call function once for initialization
createUserTable();
