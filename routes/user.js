exports.get = async (ctx, next) => {
  if (!ctx.isAuthenticated()) ctx.throw("Ошибка доступа!");
  const { username, email } = ctx.state.user;
  ctx.body = { username, email };
}
