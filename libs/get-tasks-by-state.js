const Task = require("../models/Task");

module.exports = getTasksByState = (state) => async (ctx, next) => {
  if (!ctx.isAuthenticated()) ctx.throw("Ошибка доступа!");
  const { user } = ctx.state;
  const tasks = await Task.find({ user, state });

  const transformTasks = tasks.map(({ _id: id, description, deadline }) => ({
    id,
    description,
    deadline
  }));
  ctx.body = transformTasks;
}
