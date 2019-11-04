const express = require("express");
const aboutRouter = require("./about");
const task1Router = require("./task1");
const task2Router = require("./task2");

const apiRouter = express.Router();

apiRouter.use("/about", aboutRouter);
apiRouter.use("/task1", task1Router);
apiRouter.use("/task2", task2Router);

module.exports = apiRouter;