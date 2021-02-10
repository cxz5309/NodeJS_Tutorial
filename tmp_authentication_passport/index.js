import express from "express";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import flash from "connect-flash"
import "./passport";

const app = express();

app.use(express.json())
app.use(express.urlencoded( {extended : false } ));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());                    // passport 동작
app.use(passport.session());                       // passport.deserializeUser 실행

app.use(flash());

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", {user:req.user, isLogin:req.session.isLogin, state:req.session.state});
});

app.post("/login", (req, res, next) => {

    passport.authenticate("local", (authError, user, info) => { // passport/localStrategy.js를 실행시킵니다.  (1)
        req.session.state = info.message;
        
        if (authError) { 
            console.log(authError);
            req.session.isLogin = false;
            return res.redirect("/") 
        }
        if (!user) { 
            console.log(req.session.error);
            req.session.isLogin = false;
            return res.redirect("/") 
        }

        console.log("user");
        return req.login(user, loginError => {
            if (loginError) {
                req.session.isLogin = false;
                console.error(loginError);
            }
            else{    
                req.session.isLogin = true;
                res.redirect("/", );
            }
        }, );
    })(req, res, next);
});


app.get("/success", (req, res, next) => {
    console.log(req.user);
    console.log(passport.user);
    res.render("success", {
        user: req.user
    });
});

app.get("/fail", (req, res, next) => {
    console.log(req.user);
    console.log(passport.user);
    req.flash("message");
    res.render("fail", {
        user: req.session.state
    });
});

app.get('/logout', function(req, res){
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000);