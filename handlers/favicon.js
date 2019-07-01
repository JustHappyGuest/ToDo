const favicon = require("koa-favicon");
const config = require("config");
const path = require("path");

const distRoot = config.get("distRoot");

exports.init = app => app.use(favicon(path.join(distRoot, "favicon.png")));
