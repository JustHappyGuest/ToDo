const path = require("path");

module.exports = {
  port: 80,
  distRoot: path.join(process.cwd(), "client", "dist"),
  handlersRoot: path.join(process.cwd(), "handlers"),
  routesRoot: path.join(process.cwd(), "routes"),
  crypto: {
    hash: {
      length: 128,
      iterations: 10
    }
  },
  mongodb: {
    debug: true,
    uri: "mongodb://127.0.0.1:27017/todoApp"
  }
};
