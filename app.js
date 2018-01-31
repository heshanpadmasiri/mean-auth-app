// importing basic dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Database connection
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database)
});
mongoose.connection.on('error', (err) => {
    console.log('Database connection error:' + err)
});

// initializing app
const app = express();

const users = require('./routes/users');

// port for back end 
const port = 3000;

// Cors middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Static folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/users',users);
// Index route
app.get('/',(req,res) => {
    res.send("invalid endpoint")
});

app.listen(port, () =>{
    console.log("Server started on port:" + port);
});