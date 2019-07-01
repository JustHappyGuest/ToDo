const User = require("../models/User");

exports.post = async (ctx, next) => {
  const { password, ...userBody } = ctx.request.body;
  const user = new User(userBody);
  await user.setPassword(password);

  await user.save();
  ctx.body = { message: "Ok" };
}
