import express from "express";
import DartCompetitionController from "../Controller/DartCompetition/DartCompetitionController";

export const dartRouter = express.Router();

const dartController = new DartCompetitionController();

dartRouter.post("/create", dartController.createDart)
dartRouter.post("/finish", dartController.finishDart)
dartRouter.get("/", dartController.rankingDart)