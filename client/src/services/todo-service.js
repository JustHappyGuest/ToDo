import { DateTime } from "luxon";

export default class TodoService {
  _apiBase = "http://localhost:8081/api/";

  getResource = async name => {
    const url = this._apiBase + name;
    const res = await fetch(url);
    if (!res.ok)
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    const body = await res.json();
    return body;
  };

  _transformTaskDateToObj = task => ({...task, deadline: DateTime.fromISO(task.deadline)});

  getTasks = async () => {
    const tasks = await this.getResource("tasks");
    return tasks.map(this._transformTaskDateToObj);
  };

  createResource = async (name, data) => {
    const url = this._apiBase + name;
    const json = JSON.stringify(data);

    const res = await fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "text/json; charset=UTF-8"
      },
      body:json
    });

    if(!res.ok)
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);

    return res.ok;
  };

  _transformTaskDateToISO = task => ({...task, deadline: task.deadline.toString()});

  createTask = async (data) => this.createResource("tasks", this._transformTaskDateToISO(data));
}
