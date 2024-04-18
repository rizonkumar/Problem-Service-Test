const express = require("express");

const { problemController } = require("../../controllers");
const problemRouter = express.Router();

// if any request comes and routes continues with /ping, we map it to pingRouter
problemRouter.get("/ping", problemController.p1ingProblemController);

problemRouter.get("/:id", problemController.getProblem);

problemRouter.get("/", problemController.getProblems);

problemRouter.post("/", problemController.addProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

problemRouter.put("/:id", problemController.updateProblem);

module.exports = problemRouter;
