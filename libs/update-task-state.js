const Task = require("../models/Task");

module.exports = (state) => async (ctx, next) => {
  if (!ctx.isAuthenticated()) ctx.throw("Ошибка доступа!");
  const { id } = ctx.params;
  const { user } = ctx.state;

  if (!user.tasks.includes(id)) ctx.throw("Ошибка доступа!");

  await Task.findByIdAndUpdate(id, {state});

  ctx.body = { message: "Ok" };
}
