//here are the paths that direct to pages and CRUD with sequelize
const express = require('express');
// const passport = require('passport');
const User = require('../models/user');
// const router = express.Router();

module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        console.log("authjs / hit")
        res.render('index', { user: req.user });
    });
    // app.post('/auth/signup', function(req,res){
    //     console.log("auth signup");
    //     res.json("lol")
    // });
    app.post('/auth/signup', function (req, res) {
        console.log("authjs POST SignUP hit")
        console.log(req.body);
        User.create(
            {
                username: req.body.username,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname

            }).then(function (newuser) {
                console.log(newuser);
                res.json(newuser);
            })

        // User.create(new User({ username: req.body.username }), req.body.password, function (err, user) {
        //     if (err) {
        //         return res.render('error', { error: err });
        //     }
        //     passport.authenticate('local')(req, res, function () {
        //         // REDIRECTS HOME< but should go to Signin page
        //         res.redirect('/dashboard');
        //     });
        // });
    });

}

// router.get('/', function (req, res) {
//     console.log("authjs / hit")
//     res.render('index', { user: req.user });
// });

// router.get('/signin', function (req, res) {
//     console.log("authjs GET singin hit")
//     res.render('siginin');
// });
// router.post('/signin', passport.authenticate('local'), function (req, res) {
//     console.log("authjs POST Signin hit with Passport")
//     // Should redirect to DASHBOARD, not home
//     res.redirect('/');
// });

// router.get('/siginup', function (req, res) {
//     console.log("authjs GET SignUP hit")
//     res.render('signup');
// });
// router.post('/signup', function (req, res) {
//     console.log("authjs POST SignUP hit")
//     res.render('signup');
//     User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
//         if (err) {
//             return res.render('error', { error: err });
//         }
//         passport.authenticate('local')(req, res, function () {
//             // REDIRECTS HOME< but should go to Signin page
//             res.redirect('/');
//         });
//     });
// });

// router.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect('/');
// });

// router.get('/error', function (req, res) {
//     res.render('error');
// });

// module.exports = router;