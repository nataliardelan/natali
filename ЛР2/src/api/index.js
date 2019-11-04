const express = require("express");
const accounting = require("./accounting");
const router = new express.Router();


router.use("/accounting", accounting.apiRouter);

module.exports = {
	router
}