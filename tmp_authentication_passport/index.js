import express from "express";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import FileStore from 'session-file-store'
import "./passport";

const app = express();

app.use(express.json())
app.use(express.urlencoded( {extended : false } ));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store:new FileStore()
}))

app.use(passport.initialize());                    // passport 동작
app.use(passport.session());                       // passport.deserializeUser 실행

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/login", (req, res, next) => {

    passport.authenticate("local", (authError, user, info) => { // passport/localStrategy.js를 실행시킵니다.  (1)
      
        return req.login(user, loginError => {
            if (loginError) {
            console.error(loginError);
            }
        });
    })(req, res, next);
  
    res.redirect("/success");
});


app.get("/success", (req, res, next) => {
    console.log(req.user);
    res.render("success", {
        user: req.user
    });
});

app.listen(3000);