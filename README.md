# 🎓 Smart Campus Placement Readiness Analyzer

## 📌 Project Overview

The **Smart Campus Placement Readiness Analyzer** is a web-based platform designed to help students evaluate and improve their placement readiness.

The system collects information such as **branch, projects, skills, certifications, target company, and target role** and provides a placement-readiness analysis.

It also includes **mock tests, score analysis, strengths and weaknesses identification, placement prediction, and improvement suggestions**.

The main purpose of the project is to provide students with a centralized platform to understand their current preparation level and identify areas that require improvement.

---

## 🎯 Objectives

The main objectives of this project are:

- Evaluate the placement readiness of students.
- Conduct mock tests for different skill areas.
- Analyze aptitude, technical, reasoning, and communication performance.
- Identify students' strengths and weaknesses.
- Provide placement-readiness predictions.
- Suggest areas for improvement.
- Store student analysis data using a backend database.
- Provide a simple and user-friendly web interface.
- Generate a downloadable placement report.
- Help students prepare according to their target company and role.

---

## ✨ Key Features

### 👨‍🎓 Student Assessment
- Branch selection
- Project information
- Target company
- Target role
- Skills and certifications

### 📝 Mock Tests
The system provides different test sections:

- 🧮 Aptitude
- 💻 Technical
- 🧠 Reasoning
- 🗣️ Communication

### 📊 Performance Analysis

The system analyzes test scores and identifies:

- ✔ Strengths
- ⚠ Weaknesses
- 📈 Areas for improvement
- 📊 Overall performance

### 🤖 Placement Readiness Prediction

The system calculates a placement-readiness score using student-related factors such as:

- Skills
- Projects
- Certifications
- Test performance

### 📑 Report Generation

Students can generate and download their placement analysis report containing their test scores and improvement suggestions.

### 📈 Dashboard

The dashboard provides access to:

- Projects
- Internships
- Mock Tests
- Performance information
- Placement analysis

---

## 🛠️ Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- MongoDB Atlas

### Development Tools
- Visual Studio Code
- Git
- GitHub

### Deployment
- Render
- MongoDB Atlas

---

## 🔄 System Workflow

```text
              👨‍🎓 Student
                   │
                   ▼
             🔐 Login
                   │
                   ▼
            🌿 Branch Selection
                   │
                   ▼
              📊 Dashboard
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
    📁 Projects  📝 Tests  💼 Internships
                   │
                   ▼
             📊 Test Scores
                   │
                   ▼
          🔍 Performance Analysis
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
      ✔ Strength ⚠ Weakness 📈 Improvement
                   │
                   ▼
          🤖 Readiness Prediction
                   │
                   ▼
             📑 Final Report
```

---

## 📊 Analysis Performed

The project performs the following analysis:

### 1. 📝 Data Collection

Student information and performance data are collected through the web interface.

The collected information includes:

- Branch
- Projects
- Skills
- Certifications
- Target company
- Target role
- Mock test scores

### 2. 🧹 Data Processing

The collected information is processed before performing the readiness analysis.

### 3. 📊 Score Analysis

The system analyzes the scores obtained in:

- Aptitude
- Technical
- Reasoning
- Communication

### 4. 💪 Strength Identification

The section with the highest score is identified as a strength.

If multiple sections have the same highest score, all of them are displayed as strengths.

### 5. ⚠️ Weakness Identification

The section with the lowest score is identified as a weakness.

If multiple sections have the same lowest score, all of them are displayed as weaknesses.

### 6. 📈 Improvement Suggestions

The system provides suggestions based on the student's weaker areas.

For example:

```text
⚠ Your Weakness: Aptitude, Reasoning

📈 Improve weak areas to increase placement chances.
```

If all scores are zero:

```text
⚠ Your Weakness:
Aptitude, Technical, Reasoning, Communication

📈 You should start practicing all sections
to improve placement chances.
```

---

## 🧮 Prediction Method

The current backend uses a **rule-based scoring method** to calculate the placement-readiness percentage.

The prediction considers factors such as:

- Skills
- Projects
- Certifications

The calculated score is converted into a percentage and displayed to the student.

> Note: The current implementation uses a rule-based prediction approach. A trained machine-learning model can be integrated as a future enhancement.

---

## 📁 Project Structure

```text
placement-readiness-analyzer/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── project.html
│   ├── result.html
│   ├── aptitude.html
│   ├── technical.html
│   ├── reasoning.html
│   ├── communication.html
│   ├── css/
│   └── js/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── database/
│
├── .gitignore
└── README.md
```

---

## 🚀 How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/akshayaa111a/placement-readiness-analyzer.git
```

### Step 2: Open the Project

```bash
cd placement-readiness-analyzer
```

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 4: Configure MongoDB

Create a MongoDB Atlas database and add the MongoDB connection string as an environment variable.

```text
MONGODB_URI=your_mongodb_connection_string
```

### Step 5: Start the Backend

```bash
npm start
```

The backend runs on:

```text
http://localhost:5000
```

### Step 6: Run the Frontend

Open the frontend files using a local server such as **VS Code Live Server**.

---

## 🔌 Backend API

### Analyze Student Data

```text
POST /analyze
```

Used to save student information and calculate the placement-readiness prediction.

### Get Analysis Data

```text
GET /data
```

Used to retrieve stored student analysis data.

---

## ☁️ Deployment

The project can be deployed using cloud services.

### Architecture

```text
        🌐 Frontend
             │
             ▼
        ☁️ Render
             │
             ▼
        ⚙️ Backend API
             │
             ▼
       🍃 MongoDB Atlas
             │
             ▼
        🗄️ Database
```

The backend is deployed on **Render**, while MongoDB is hosted using **MongoDB Atlas**.

---

## 🔐 Database

MongoDB is used to store student analysis information.

Example data includes:

```text
Company
Skills
Projects
Certifications
Prediction
```

This allows the application to store and retrieve student analysis data through the backend.

---

## 🌟 Advantages

- Easy-to-use interface.
- Centralized placement preparation platform.
- Multiple mock-test sections.
- Automatic score analysis.
- Strength and weakness identification.
- Placement-readiness prediction.
- Improvement suggestions.
- Downloadable report.
- Backend and database integration.
- Can be accessed through a web browser after deployment.

---

## 🔮 Future Enhancements

The project can be enhanced with:

- 🤖 Machine Learning-based placement prediction.
- 📄 AI-powered resume analysis.
- 💼 Real-time internship and job recommendations.
- 💬 AI placement preparation chatbot.
- 📊 Advanced performance dashboards.
- 📱 Mobile application.
- 🏢 Company-specific preparation.
- 🎯 Personalized learning recommendations.
- ☁️ Scalable cloud deployment.

---

## 🔍 Conclusion

The **Smart Campus Placement Readiness Analyzer** provides a centralized platform for students to evaluate their placement preparation.

Through mock tests, performance analysis, project and skill information, placement-readiness prediction, and improvement suggestions, the system helps students understand their current preparation level.

The project also demonstrates the integration of a **frontend, backend, and MongoDB database** into a complete web application.

It provides a foundation for future enhancements such as machine-learning-based prediction, AI-powered resume analysis, and personalized placement recommendations.

---

## 👩‍💻 Author

**Akshaya Ailla**

B.Tech – Computer Science & Engineering

DRK College of Engineering & Technology  
JNTUH, Hyderabad

### Skills

**Python • Java • JavaScript • HTML • CSS • Node.js • Express.js • MongoDB • Git • GitHub**

---

## 📌 Project Repository

## 🔗 Project Repository

💻 **GitHub:** [Smart Campus Placement Readiness Analyzer](https://github.com/akshayaa111a/placement-readiness-analyzer)
