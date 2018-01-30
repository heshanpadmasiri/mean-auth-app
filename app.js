// importing basic dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// initializing app
const app = express();

// port for back end 
const port = 3000;

// route to home page
app.get('/',(req,res) => {
    res.send("invalid endpoint")
});

app.listen(port, () =>{
    console.log("Server started on port:" + port);
});