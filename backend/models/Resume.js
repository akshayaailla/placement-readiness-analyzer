const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  education: {
    type: String
  },
  experience: {
    type: String
  }
});

module.exports = mongoose.model("Resume", ResumeSchema);