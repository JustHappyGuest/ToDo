const fs = require("fs");
const path = require("path");
const mime = require("mime");

const getTasks = (jsonRoot, res) => {
  const stream = fs.createReadStream(path.join(jsonRoot, "tasks.json"));

  let data = "";
  stream.on("open", () => {
    res.setHeader(
      "Content-Type",
      mime.getType(path.join(jsonRoot, "tasks.json"))
    );
  });

  stream.on("data", chunk => {
    data += chunk;
  });

  stream.on("end", chunk => {
    try {
      const json = JSON.parse(data);
      res.statusCode = 200;
      res.end(JSON.stringify(json));
      return;
    } catch (e) {
      console.log(`JSON file is spoiled! Error message: ${e.message}`);
      res.statusCode = 500;
      res.end("JSON file is spoiled!");
      return;
    }
  });

  stream.on("error", e => {
    if (e.code === "ENOENT") {
      console.log(`JSON file is not found! Error message: ${e.message}`);
      res.statusCode = 404;
      res.end("JSON file is not found!");
    } else {
      res.statusCode = 500;
      console.log(`Unknown error! Error message: ${e.message}`);
      res.end("Unknown error!");
    }
  });
};

module.exports = getTasks;
