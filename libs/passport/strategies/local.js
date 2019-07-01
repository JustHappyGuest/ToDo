const LocalStrategy = require('passport-local').Strategy;
const User = require('../../../models/User');

module.exports = new LocalStrategy(async function(username, password, done) {
  const user = await User.findOne({ username });
  if (!user) return done(null, false, { message: "Пользователь не найден!" });
  const isValidPassword = await user.checkPassword(password);
  if (!isValidPassword)
    return done(null, false, { message: "Не верный пароль!" });
  done(null, user, { message: "Добро пожаловать!" });
})
