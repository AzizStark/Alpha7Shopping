const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: "1300577530pps.googleusercontent.com",
            clientSecret: "fAFdHU",
            callbackURL: 	"https://alpha7shopping.herokuapp.com/auth/google/callback"
        },
        (token, refreshToken, email, done) => {
            return done(null, {
                token: token,
                email: email
            });
        }));
};
 
