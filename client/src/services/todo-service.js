export default class TodoService {
  _apiBase = "http://localhost/api/";

  getResource = async name => {
    const res = await fetch(this._apiBase + name);
    if (!res.ok)
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    const body = await res.json();
    return body;
  };

  getTasks = async () => {
    const tasks = await this.getResource("tasks");
    return tasks;
  };
}
