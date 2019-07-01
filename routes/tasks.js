const Task = require("../models/Task");

const getTasksByState = require('../libs/get-tasks-by-state');

exports.get = getTasksByState('active');

exports.post = async (ctx, next) => {
  if (!ctx.isAuthenticated()) ctx.throw("Ошибка доступа!");
  const { user } = ctx.state;

  const taskBody = ctx.request.body;
  const task = new Task({ user: user._id, ...taskBody });

  user.tasks.unshift(task);

  await task.save();
  await user.save();

  const id = task._id;
  ctx.body = id;
}

exports.put = async (ctx, next) => {
  if (!ctx.isAuthenticated()) ctx.throw("Ошибка доступа!");
  const { user } = ctx.state;

  const { id } = ctx.params;
  const bodyTask = ctx.request.body;
  if (!user.tasks.includes(id)) ctx.throw("Ошибка доступа!");

  await Task.findByIdAndUpdate(id, bodyTask);

  ctx.body = { message: "Ok" };
}

exports.del = async (ctx, next) => {
  if (!ctx.isAuthenticated()) ctx.throw("Ошибка доступа!");
  const { user } = ctx.state;
  const { id } = ctx.params;
  if (!user.tasks.includes(id)) ctx.throw("Ошибка доступа!");
  await Task.findByIdAndDelete(id);

  user.tasks = user.tasks.filter(_id => !(_id.toString() === id));

  await user.save();
  ctx.body = { message: "Ok" };
}
