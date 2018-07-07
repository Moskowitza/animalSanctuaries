var authController = require('../controllers/authcontroller.js');
const db = require("../models");
// var passport = require('passport');
//when we hit path /signup, auth controller calls a route, in this one case we just have signup
module.exports = function (app, passport) {
    // GET routes to render our handlebar pages
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    //     //WE need a logout
    app.get('/logout', authController.logout);

    // POST route to implement passport and sign up a user
    /**Since we need passport, we need to pass it to this method. 
     * We can import passport in this script OR pass it from server.js. NOTE WE TAKE IN APP, Passport as params */
    app.post('/auth/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard', //GET path defined below
        failureRedirect: '/signup'
    }
    ))
    // This comes from the session
    app.get('/auth/check', function (req, res) {
        if (req.user) {
            res.json(req.user);
        }
        else {
            res.json(false);
        }
    });

    // Our successful redirect needs a get path. wow.



    // A function to see if we're logged in to protect the routes
    //we pass it back to the dashboard get route
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.post('/auth/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }
    ));
    app.get('/auth/logout', function (req, res) {
        req.logout();
        res.json(true);
    });

    //post a new sanctuary: this works
    app.post('/auth/newSanctuary', function (req, res) {
        db.Sanctuary.create(req.body).then(function (data) {
            res.json(data);
        });
    });
    //this does not seem to work
    app.get('/auth/sanctuaries', function (req, res) {
        db.Sanctuary.findAll({
        }).then(function (data) {
            res.json(data);
        });
    });
    app.post('/auth/saveSearch', function (req, res) {
        var userToAdd = db.User.findOne({ where: { userId: req.body.userId } })
        var sanToAdd = db.Sanctuary.findOne({ where: { sanId: req.body.sanId } })
        Promise.all([userToAdd, sanToAdd])
            .then((results) => {
                return results[0].addSanctuary(results[1]);
            })
            .then((moreResults) => {
                res.json(moreResults);
            })
    });
    app.get('/auth/savedSanctuaries/:id', function (req, res) {
        console.log("HERE HERE HERE DID THIS SAY?" + req.params.id);
        var mySanctuaries = db.User.findAll({
            where:
                { userId: req.params.id },
            include: [{
                model: db.Sanctuary,
                as: "Sanctuaries",
                through: {
                    attributes: ['name', 'image', 'state']
                }
            }],
        })
        Promise.all([mySanctuaries])
            .then(function (data) {
                console.log("data from savedSanc api call: "+data)
                res.json(data);
            }).catch(error => res.json(error));
    });

}