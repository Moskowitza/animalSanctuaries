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
        const userToAdd = db.User.findOne({ where: { userId: req.body.userId } });
        const sanToAdd = db.Sanctuary.findOne({ where: { sanId: req.body.sanId } });
        Promise.all([userToAdd, sanToAdd])
            .then((results) => {
                return results[0].addSanctuary(results[1]);
            })
            .then((moreResults) => {
                res.json(moreResults);
            })
    });
    app.get('/auth/savedSanctuaries/:id', function (req, res) {
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
            .then(function (result) {
                console.log("data from savedSanc api call: " + JSON.stringify(result[0][0].Sanctuaries));
                res.json(result[0][0].Sanctuaries);
            }).catch(error => res.json(error));
    });
    // Get user's own comments for Dashboard
    app.get('/auth/userComments/:id', function (req, res) {
      var myComments= db.Post.findAll({
        where: { userId: req.params.id },
            include: [{
                model: db.Sanctuary,
                as: "Sanctuary",
                // through: {
                //     attributes: ['sanId'],
                //     where: { userId: req.params.id },
                // }   
            }],
            })
            Promise.all([myComments])
            .then(function (result) {
                console.log("#######################################")
                console.log("#######################################")
                console.log("########" + JSON.stringify(result[0]))
                res.json(result[0])
                // console.log("########" + result[0].Posts)
            }).catch(error => res.json(error));
    });
    // Get one sanctuary
    app.get('/api/sanctuary/:id', function (req, res) {
        console.log("GET ONE SANCTUARY" + req.params.id);
        db.Sanctuary.findOne({
            where:
                { sanId: req.params.id },
        })
            .then(function (result) {
                console.log("data from profileSanctuary api call: " + JSON.stringify(result));
                res.json(result);
            }).catch(error => res.json(error));
    });
    app.post('/auth/newComment', function (req, res) {
        console.log("in authjs " + JSON.stringify(req.body))
        const userCommenting = db.User.findOne({ where: { userId: req.body.userId } });
        const sanCommented = db.Sanctuary.findOne({ where: { sanId: req.body.sanId } });
        Promise.all([userCommenting, sanCommented])
            .then((result) => {
                // results[0].addPost(results[1]);
                db.Post.create(req.body);
            })
            .then(function (result) {
                console.log("Result from adding a post: " + JSON.stringify(result));
                res.json(result);
            }).catch(error => res.json(error));
    })
    // get comments for Sanctuary Profile
    app.get('/api/getComments:id', function (req, res) {
        console.log("GET COMMENTS WITH San ID" + JSON.stringify(req.params));

        db.Post.findAll({
            where: { sanId: req.params.id },
        }).then(function (result) {
            console.log("COMMENTS from api call: " + JSON.stringify(result));
            res.json(result);
        }).catch(error => res.json(error));
    })

}