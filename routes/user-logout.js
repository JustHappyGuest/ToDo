const passport = require("../libs/passport");

exports.get = async (ctx, next) => {
  ctx.logout();
  ctx.body = { message: "Ok" };
}
