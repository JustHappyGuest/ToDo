const express = require('express');
const favicon = require('express-favicon');

const config = require("config");

const fs = require("fs");
const path = require("path");

const getTasks = require('./get-tasks');
const pageSent = require('./sent-page.js');
const createTask = require('./create-task.js');

const distRoot = config.get('distRoot');
const jsonRoot = config.get('jsonRoot');

const port = config.get('port');
const app = express();


app.use(express.static(distRoot));
app.use(favicon(path.join(distRoot, 'favicon.png')));

app.get('/api/tasks', (req, res) => {
  getTasks(jsonRoot, res);
});

app.post("/api/tasks", (req, res) => {
  createTask(jsonRoot, req, res);
});

app.get('*', (req, res) => {
  pageSent(distRoot, res);
});

app.listen(port, err => {
  if (err) console.error(err);
});
