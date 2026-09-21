const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    category: String,
    question: String,
    options: [String],
    answer: String
});

module.exports = mongoose.model("Test", TestSchema);