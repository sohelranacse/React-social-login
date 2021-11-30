var GoogleStrategy = require('passport-google-oauth20').Strategy
var GitHubStrategy = require('passport-github2').Strategy
var FacebookStrategy = require('passport-facebook').Strategy
const passport = require("passport")

const GOOGLE_CLIENT_ID = "951144983177-n3p1uluvm64fl49mo3b382km517jkdpd.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "1cca9b1eaaa9f0a7656a"
const GITHUB_CLIENT_SECRET = "6eebac80facb6d8c77ff406094900fa37ec25d34"

const FACEBOOK_APP_ID = "317040019920851"
const FACEBOOK_APP_SECRET = "92a8d4491fea168348cc96eab7314ff4"

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});