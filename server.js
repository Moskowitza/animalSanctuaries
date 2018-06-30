const express = require("express");
const app = express();
//middleware : import the passport module and the express-session, both of which we need to handle authentication.
var passport = require('passport');
var session  = require('express-session');
const path = require("path");
// Then, we import the body-parser module. This extracts the entire body part of an incoming request and exposes it in a format that is easier to work with. In this case, we will use the JSON format.
var bodyParser = require('body-parser');

// import the dot-env module to handle environment variables.
var env = require('dotenv').load();

const PORT = process.env.PORT || 3001;


const db = require("./models");

//For bodyParser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//AFTER the bodyParser import line we initialize PASSPORT and the express session and passport session and add them both as middleware. We do this by adding these lines some spaces 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
//send login data to SQL
app.post("/api/login", (req, res) => {
  db.User.create(req.body).then(function (data) {
    res.json(data);
  });
});

//Routes !!!! some problem here moved (app) need to pass passport to our authRoute
var authRoute = require('./routes/auth.js')(app, passport);
//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});


