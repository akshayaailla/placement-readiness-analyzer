const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.post("/addStudent", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send("Student Added Successfully");
});

module.exports = router;