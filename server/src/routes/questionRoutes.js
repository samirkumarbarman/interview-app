import express from 'express';
import * as questionController from '../controllers/questionController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.post("/", authenticate, authorize(['interviewer']), questionController.createNewQuestion);

router.get("/", authenticate, authorize(['interviewer']), questionController.getQuestions);

router.get("/:id", authenticate, authorize(['interviewer', 'candidate']), questionController.getQuestion);

router.put("/:id", authenticate, authorize(['interviewer']), questionController.questionUpdate);

router.delete("/:id", authenticate, authorize(['interviewer']), questionController.questionDelete);

export default router;