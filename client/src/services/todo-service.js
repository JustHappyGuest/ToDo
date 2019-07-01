import { DateTime } from "luxon";

export default class TodoService {
  _apiBase = "http://localhost/api/";

  getResource = async name => {
    const url = this._apiBase + name;
    const res = await fetch(url);
    if (!res.ok)
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    const body = await res.json();
    return body;
  };

  deleteResource = async (name, param) => {
    const url = `${this._apiBase}${name}/${param}`;
    const res = await fetch(url, {
      method: "delete"
    });
    if (!res.ok)
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    return res.json();
  };

  postResource = async (name, data) => {
    const url = this._apiBase + name;
    const json = JSON.stringify(data);
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: json
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  };

  putResource = async (name, param, data) => {
    const url = `${this._apiBase}${name}/${param}`;
    const json = JSON.stringify(data);
    const res = await fetch(url, {
      method: "put",
      headers: {
        "Content-type": "application/json"
      },
      body: json
    });
    if(!res.ok) throw new Error(await res.text);
    return res.json();
  }

  _transformTaskDateToObj = task => ({
    ...task,
    deadline: DateTime.fromISO(task.deadline)
  });

  _transformTaskDateToISO = task => ({
    ...task,
    deadline: task.deadline.toString()
  });

  getTasks = async (state = "") => {
    const tasks = await this.getResource(`tasks/${state}`);
    return tasks.map(this._transformTaskDateToObj);
  };

  createTask = async data =>
    this.postResource("tasks", this._transformTaskDateToISO(data));

  signIn = async data => this.postResource("user/login", data);
  getUserData = async () => this.getResource("user");
  logOut = async () => this.getResource("user/logout");
  deleteTask = async id => this.deleteResource("tasks", id);
  updateTask = async (id, data) => this.putResource("tasks", id, data);
}
