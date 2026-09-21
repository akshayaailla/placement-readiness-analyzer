exports.getDashboard = (req, res) => {

    const dashboardData = {
        message: "Welcome to Placement Readiness Analyzer Dashboard",
        projects: 5,
        internships: 3,
        mockTests: 10
    };

    res.json(dashboardData);
};