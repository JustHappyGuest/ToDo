const path = require('path');
const fs = require('fs');

const createTask = (jsonRoot, req, res) => {
  const filepath = path.join(jsonRoot, "tasks.json");

  let strTasks = "";
  const tasksStream = fs.createReadStream(filepath);

  tasksStream.on("data", chunk => {
    strTasks += chunk;
  });

  tasksStream.on("end", () => {
    let tasks;
    try {
      tasks = JSON.parse(strTasks);
    } catch (err) {
      console.log("Error json parse!");
    }

    strNewTask = "";

    req.on("data", chunk => {
      strNewTask += chunk;
    });

    req.on("end", () => {
      let newTask;
      try {
        newTask = JSON.parse(strNewTask);
      } catch (e) {
        console.log(`Wrong format data! Error message: ${e.message}`);
        res.statusCode = 400;
        res.end("Wrong format data!");
        return;
      }

      const taskWithSameIdExists = tasks.find(task => task.id === newTask.id);
      if (taskWithSameIdExists) {
        res.statusCode = 409;
        res.end("Task with same id exists!");
        return;
      }

      const updatedTasks = [newTask, ...tasks];

      const strUpdatedTasks = JSON.stringify(updatedTasks);

      const writeStream = fs.createWriteStream(filepath);
      writeStream.write(strUpdatedTasks);
      res.statusCode = 201;
      res.end("File successfully created!");

      writeStream.on("error", () => {
        res.statusCode = 500;
        res.end("Unknown error!");
        return;
      });
    });
  });
};

module.exports = createTask;
