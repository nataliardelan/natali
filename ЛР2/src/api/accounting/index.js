const express = require("express");
const controller = require("./controller.js");
const accountingApiRouter = new express.Router();

accountingApiRouter.get("/", controller.accountingController.get);
accountingApiRouter.post("/add", controller.accountingController.post);



module.exports = {
	apiRouter:accountingApiRouter
}