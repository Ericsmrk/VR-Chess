const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user , done) => {
	done(null , user);
})
passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID:"139522038082-o3eh8ofj64dujsiu1a0l0qnmt7t4cs3u.apps.googleusercontent.com", // Your Credentials here.
	clientSecret:"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", // Your Credentials here.
	callbackURL:"http://localhost:8080/index.html",
	passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
	return done(null, profile);
}
));
