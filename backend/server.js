const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connect
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB connection error:", err));
// Schema
const studentSchema = new mongoose.Schema({
    company: String,
    skills: Number,
    projects: Number,
    certifications: Number,
    prediction: Number
});

const Student = mongoose.model("Student", studentSchema);

// ML Prediction Function
function predict(skills, projects, certifications) {
    let score = (skills * 20) + (projects * 30) + (certifications * 15);
    let percent = Math.min(score, 100);
    return percent;
}

// Save Data
app.post("/analyze", async (req, res) => {

    const { company, skills, projects, certifications } = req.body;

    let prediction = predict(skills, projects, certifications);

    const data = new Student({
        company,
        skills,
        projects,
        certifications,
        prediction
    });

    await data.save();

    res.json({
        message: "Data Saved",
        prediction: prediction
    });
});

// Get data for chart
app.get("/data", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});