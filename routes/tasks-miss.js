const getTasksByState = require('../libs/get-tasks-by-state');
const updateTaskState = require("../libs/update-task-state");

exports.get = getTasksByState('miss');
exports.post = updateTaskState('miss');
