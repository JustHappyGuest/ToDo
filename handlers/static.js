const static = require("koa-static");
const config = require("config");

const distRoot = config.get("distRoot");

exports.init = app => app.use(static(distRoot));
