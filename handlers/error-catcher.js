const errorCatcher = require("../libs/koa-error-catcher");

exports.init = app => app.use(errorCatcher);
