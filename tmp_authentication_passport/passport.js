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
          id: "whwlsvy12",
          pw: "1234"
        };
        console.log(1111);
        if (id === user.id && pw === user.pw) {
          done(null, user);
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