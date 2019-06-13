const fse = require("fs-extra");
const path = require("path");
const config = require("config");
const request = require("request");
const assert = require("assert");

const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const luxon = require("luxon");

const loremIpsum = new LoremIpsum({
  wordsPerSentence: {
    max: 4,
    min: 2
  }
});

const port = config.get("port");


describe("server tests", () => {
  describe("GET", () => {
    describe("get index", () => {
      it("should return index.html", done => {
        const content = fse.readFileSync(
          path.join(config.get("distRoot"), "index.html")
        );
        request(`http://localhost:${port}`, (err, response, body) => {
          if (err) done(err);
          assert.strictEqual(response.statusCode, 200);
          assert.strictEqual(
            response.headers["content-type"],
            "text/html; charset=UTF-8"
          );
          assert.strictEqual(body, content.toString("utf-8"));
          done();
        });
      });
    });

    describe("get json files", () => {
      it("should return tasks.json", done => {
        const content = fse.readFileSync(
          path.join(config.get("jsonRoot"), "tasks.json")
        );
        const json = JSON.parse(content.toString("utf-8"));
        request(`http://localhost:${port}/api/tasks`, (err, response, body) => {
          if (err) done(err);
          assert.strictEqual(response.statusCode, 200);
          assert.strictEqual(
            response.headers["content-type"],
            "application/json"
          );
          assert.deepEqual(JSON.parse(body), json);
          done();
        });
      });
    });
  });
  describe("POST", () => {
    describe("POST tasks", () => {
      it("should create task", done => {
        const tasks =  JSON.parse(fse.readFileSync(path.join(config.get("jsonRoot"), 'tasks.json')).toString('utf-8'));

        const data = {
          id: tasks[0].id + 1,
          description: loremIpsum.generateSentences(1),
          deadline: luxon.DateTime.local().toString()
        };

        const resultTasks = [data, ...tasks]

        const jsonData = JSON.stringify(data);

        request.post(`http://localhost:${port}/api/tasks`, { form: jsonData }, (err, response, body) => {
          if(err) return done(err);
          assert.strictEqual(response.statusCode, 201);
          assert.strictEqual(body, 'File successfully created!');

          const tasks =  JSON.parse(fse.readFileSync(path.join(config.get("jsonRoot"), 'tasks.json')).toString('utf-8'));
          assert.deepEqual(resultTasks, tasks);

          done();
        });
      });

      it("should return bad request", done => {
        const mtime = fse.statSync(
          path.join(config.get("jsonRoot"), "tasks.json")
        ).mtime;

        const data = {
          test: 1
        };

        request.post(
          `http://localhost:${port}/api/tasks`,
          { form: data },
          (err, response, body) => {
            if (err) return done(err);

            const newMtime = fse.statSync(
              path.join(config.get("jsonRoot"), "tasks.json")
            ).mtime;

            assert.strictEqual(response.statusCode, 400);
            assert.strictEqual(body, "Wrong format data!");
            assert.deepEqual(mtime, newMtime);

            done();
          }
        );
      });
      it("should return conflict", done => {
        const mtime = fse.statSync(
          path.join(config.get("jsonRoot"), "tasks.json")
        ).mtime;

        const data = {
          id: 2,
          description: loremIpsum.generateSentences(1),
          deadline: luxon.DateTime.local()
        };
        const jsonData = JSON.stringify(data);

        request.post(
          `http://localhost:${port}/api/tasks`,
          { form: jsonData },
          (err, response, body) => {
            if (err) return done(err);

            const newMtime = fse.statSync(
              path.join(config.get("jsonRoot"), "tasks.json")
            ).mtime;

            assert.strictEqual(response.statusCode, 409);
            assert.strictEqual(body, "Task with same id exists!");
            assert.deepEqual(mtime, newMtime);

            done();
          }
        );
      });
    });
  });
});
