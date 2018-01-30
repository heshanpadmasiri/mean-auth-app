const express = require('express');
const router = express.Router();

// Register
router.post('/register',(req,res,next) => {
    res.send("Register request")
});

// Authenticate
router.post('/authenticate',(req,res,next) => {
    res.send("Authentication requseted")
});

// Profile
router.get('/profile', (req,res,next) => {
    res.send("Profile requested")
});

module.exports = router;