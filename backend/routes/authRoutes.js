const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if(email === "student@gmail.com" && password === "123456"){
        res.json({message:"Login Successful"});
    }else{
        res.json({message:"Invalid Credentials"});
    }
});

router.post("/register", (req,res)=>{
    res.json({message:"User Registered"});
});

module.exports = router;