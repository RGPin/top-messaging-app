import express from "express";
import * as controller from "../controllers/indexController.js";

const router = express.Router();

router.get("/", controller.testController);

export default router;
