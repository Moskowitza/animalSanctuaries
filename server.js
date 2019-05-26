require('dotenv').config();
const express = require('express');
const session = require('express-session');
// middleware : import the passport module and the express-session, both of which we need to handle authentication.
// const passport = require('passport');
const passport = require('./config/passport/passport');

const PORT = process.env.PORT || 3001;
const db = require('./models');
// require('sequelize');
// import the dot-env module to handle environment variables.
// var env = require('dotenv').load();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Serve up static assets (usually on heroku)

// Routes !!!! some problem here moved (app) need to pass passport to our authRoute
require('./routes/auth.js')(app, passport);
// load passport strategies
// require('./config/passport/passport.js')(passport, db.User);

db.sequelize.sync().then(() => {});
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
