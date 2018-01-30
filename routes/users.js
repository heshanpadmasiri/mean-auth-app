const express = require('express');
const router = express.Router();

// Register
router.get('/register',(req,res,next) => {
    res.send("Register request")
});

// Authenticate
router.get('/authenticate',(req,res,next) => {
    res.send("Authentication requseted")
});

// Profile
router.get('/profile', (req,res,next) => {
    res.send("Profile requested")
});

// Validate
router.get('/validate', (req,res,next) =>{
    res.send("Validate")
});

module.exports = router;