var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "pw"
      },
      (id, pw, done) => {
        const user = {
          id: "cxz5309",
          pw: "123"
        };
        console.log("id : " + id);
        console.log("pw : " + pw);
        if (id === user.id && pw === user.pw) {
          done(null, user, {message : "Login"});
        }
        else if(id !== user.id && pw === user.pw){
          done(null, false, {message : "Incorrect id"})
        }
        else if(id === user.id && pw !== user.pw){
          done(null, false, {message : "Incorrect password"})
        }
        else{
          done(null, false, {message : "Incorrect all"})
        }
      }
    )
);
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function (id, done) {
    done(null, id);
});