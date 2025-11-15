const express = require("express");
const router = express.Router();
const { uploadRoom, getUserDesigns, getDesignById } = require("../controllers/designController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post("/upload", authMiddleware, upload.single("room_image"), uploadRoom);
router.get("/my-designs", authMiddleware, getUserDesigns);
router.get("/:id", authMiddleware, getDesignById);

module.exports = router;
