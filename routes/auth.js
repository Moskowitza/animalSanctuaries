var authController = require('../controllers/authcontroller.js');
// var passport = require('passport');
//when we hit path /signup, auth controller calls a route, in this one case we just have signup
module.exports = function (app, passport) {
    // GET routes to render our handlebar pages
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
<<<<<<< HEAD
    //WE need a logout
=======
    //     //WE need a logout
>>>>>>> 3c6a766e7e39b1c24578d3ce6019cdb301157d97
    app.get('/logout', authController.logout);

    // POST route to implement passport and sign up a user
    /**Since we need passport, we need to pass it to this method. 
     * We can import passport in this script OR pass it from server.js. NOTE WE TAKE IN APP, Passport as params */
<<<<<<< HEAD
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard', //GET path defined below
        failureRedirect: '/signup'
    }
    ));
    // Our successful redirect needs a GET path. wow.
=======
    app.post('/auth/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard', //GET path defined below
        failureRedirect: '/signup'
    }
    ))
    // This comes from Dashbaord
    app.get('/auth/check', function (req, res) {
        if (req.user) {
            res.json( req.user );
        }
        else {
            res.json(false);
        }
    });

    // Our successful redirect needs a get path. wow.



>>>>>>> 3c6a766e7e39b1c24578d3ce6019cdb301157d97
    // A function to see if we're logged in to protect the routes
    //we pass it back to the dashboard get route
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
    app.get('/dashboard', isLoggedIn, authController.dashboard);
<<<<<<< HEAD
    
    app.post('/signin', passport.authenticate('local-signin', {
=======

    app.post('/auth/signin', passport.authenticate('local-signin', {
>>>>>>> 3c6a766e7e39b1c24578d3ce6019cdb301157d97
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }
    ));
<<<<<<< HEAD
=======
    app.get('/auth/logout',function(req,res){
        req.logout();
        res.json(true);
    })
>>>>>>> 3c6a766e7e39b1c24578d3ce6019cdb301157d97
}