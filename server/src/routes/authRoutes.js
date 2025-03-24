import express from "express";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.post("/register/candidate", authController.registerNewCandidate);

router.post("/register/interviewer", authController.registerNewInterviewer);

router.post("/login/candidate", authController.candidateLogin);

router.post("/login/interviewer", authController.interviewerLogin);

export default router;
