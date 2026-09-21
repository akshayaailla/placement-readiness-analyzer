const express = require("express");
const router = express.Router();

const Resume = require("../models/Resume");

// Save Resume
router.post("/save", async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(200).json({ message: "Resume saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving resume" });
  }
});

module.exports = router;