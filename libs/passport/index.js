const passport = require("koa-passport");
const localStrategy = require("./strategies/local");

const User = require('../../models/User');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(localStrategy);

module.exports = passport;
