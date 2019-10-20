const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: "130057753017-483rt34e57f011f0smptpj0f55im9h6q.apps.googleusercontent.com",
            clientSecret: "BFLqkUxpGbqIiGY0y6fAFdHU",
            callbackURL: 	"https://alpha7shopping.herokuapp.com/auth/google/callback"
        },
        (token, refreshToken, email, done) => {
            return done(null, {
                profile: profile,
                token: token,
                email: email
            });
        }));
};