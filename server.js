const express = require("express");
const passport = require("passport");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const env = require('dotenv').load();
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


//Models
var models = require("./models");
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
// Define API routes here
//send login data to SQL
app.post("/api/login", (req, res) => {
  db.User.create(req.body).then(function (data) {
    res.json(data);
  });
});







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


