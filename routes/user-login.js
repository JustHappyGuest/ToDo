const passport = require("../libs/passport");

exports.post = async function(ctx, next) {
  await passport.authenticate("local", async function(err, user, info) {
    if (!user) return ctx.throw(401, info.message);
    const { username, email } = user;
    ctx.login(user);
    ctx.body = { username, email };
  })(ctx, next);
}
