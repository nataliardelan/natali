import { Router } from "express";
import accountingRouter from "./accounting";

const apiRouter = new Router();

apiRouter.use("/accounting", accountingRouter);

export default apiRouter;