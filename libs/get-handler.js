const config = require("config");
const path = require("path");

module.exports = (handlersRoot = config.get("handlersRoot")) => name => path.join(handlersRoot, name);
