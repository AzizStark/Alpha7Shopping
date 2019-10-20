const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: "130057753017-n0dir2kdnm7cfh4ekr30dgm2q1tj1ea3.apps.googleusercontent.com",
            clientSecret: "P469hqFxvx6flI9Cz7KRmcLb",
            callbackURL: 	"http://localhost:3000/auth/google/callback"
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};