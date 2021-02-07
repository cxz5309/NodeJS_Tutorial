var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var app = express()


app.set("view engine", "pug");

app.use(express.json())
app.use(express.urlencoded( {extended : false } ));

app.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true,
    store:new FileStore()
}))
app.use(flash());

var passport = require('./passport')(app);

app.post('/login_process',
passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth',
  failureFlash: true,
  successFlash: true
}));

app.get('/', function (req, res, next) {
    passport.authenticate('local', function(err, user, info) {

        req.logIn(user, function(err) {        
            console.log("user : " + user);

            if(user.num === undefined){
                console.log("user.num === undrfined");
                user.num = 1;
            } else {
                user.num =  user.num + 1;
            }
            if(user.is_logined === undefined){
                console.log("user.is_logined === undrfined");
                user.is_logined = false;
            }
            if (err) { console.log(err); }

            return res.render('home', { title: 'Hey', is_logined: user.is_logined});
        });
    })(req, res, next);
});
//     console.log("passport.user : " + passport.user);

//     if(!passport.user){
//         res.render('home', { title: 'Hey', is_logined: false});
//     }
//     else{
//         if(req.user.num === undefined){
//             req.user.num = 1;
//         } else {
//             req.user.num =  req.user.num + 1;
//         }
//         if(req.user.is_logined === undefined){
//             req.user.is_logined = false;
//         }
//         res.render('home', { title: 'Hey', is_logined: req.user.is_logined});
//     }
// });

app.get('/logout', function (req, res) {
    req.logout();
    req.session.save(function () {
      res.redirect('/');
    });
  });
 
app.listen(3000, function () {
    console.log('3000!');
});