import express from "express";
import RunCompetitionController from "../Controller/RunCompetition/RunCompetitionController";

export const runRouter = express.Router();

const runController = new RunCompetitionController();

runRouter.post("/create", runController.createRun)
runRouter.post("/finish", runController.finishRun)
runRouter.get("/", runController.rankingRun)
