const Koa = require("koa");
const Router = require("koa-router");

const getHandler = require("./libs/get-handler")();
const getRoute = require("./libs/get-route")();

const app = new Koa();

require(getHandler("favicon")).init(app);
require(getHandler("static")).init(app);
require(getHandler("logger")).init(app);
require(getHandler("error-catcher")).init(app);
require(getHandler("session")).init(app);
require(getHandler("body-parser")).init(app);
require(getHandler("passport")).init(app);

const router = new Router({ prefix: "/api/" });


router.get("tasks", getRoute("tasks").get);
router.post("tasks", getRoute("tasks").post);
router.put("tasks/:id", getRoute("tasks").put);
router.del("tasks/:id", getRoute("tasks").del);

router.get("tasks/complete", getRoute("tasks-complete").get);
router.post("tasks/complete/:id", getRoute("tasks-complete").post);

router.get("tasks/miss", getRoute("tasks-miss").get);
router.post("tasks/miss/:id", getRoute("tasks-miss").post);

router.get("user", getRoute("user").get);
router.post("user/login", getRoute("user-login").post);
router.get("user/logout", getRoute("user-logout").get);
router.post("user/registration", getRoute("user-registration").post);

app.use(router.routes());

module.exports = app;
