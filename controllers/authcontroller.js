//Simlply render pages when asked by our route
var exports = module.exports = {}

exports.signup = function(req, res) {
    console.log("authcontroller signup hit")
    res.json('false');
}
exports.signin = function(req, res) {
    console.log("authcontroller signin hit")
    res.render('signin');
}
//dashboard isn't a protected route, which means even if a user is not logged in, they can see it
exports.dashboard = function(req, res) {
    console.log("authcontroller dashboard hit")
    res.json(true);
}
//New Sanctuary path?
// exports.newSanctuary = function(req, res) {
//     console.log("authcontroller dashboard hit")
//     res.json(true);
// }


exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        console.log("authcontroller destroy session")
        // if the request is to logout, we respond with the home page
        res.redirect('/');
    });
}