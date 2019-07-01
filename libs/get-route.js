const path = require("path");
const config = require("config");

module.exports = (routesRoot = config.get("routesRoot")) => name => require(path.join(routesRoot, name));
