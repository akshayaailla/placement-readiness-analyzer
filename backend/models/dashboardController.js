exports.getDashboard = (req, res) => {

    res.json({
        message: "Welcome to Dashboard",
        sections: [
            "Projects",
            "Internships",
            "Resume",
            "Mock Tests"
        ]
    });

};