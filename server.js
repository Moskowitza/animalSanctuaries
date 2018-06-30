const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const env = require('dotenv').load();
// passport stuff
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

const session = require("express-session");

const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./models");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// Routes
const routes = require("./routes/auth-api");
app.use(routes);

// passport config
const User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// var authRoute = require('./routes/auth.js')(app,passport);
// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});


