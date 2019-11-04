import Router from "express";
import accountingController from "./controller";

const accountingRouter = new Router();

accountingRouter.get("/", accountingController.get);
accountingRouter.post("/add", accountingController.post);


export default accountingRouter;