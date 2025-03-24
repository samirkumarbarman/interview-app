import express from 'express';
import * as interviewController from '../controllers/interviewController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.post("/", authenticate, authorize(['interviewer']), interviewController.createNewInterview);

router.get("/:id", authenticate, authorize(['interviewer', 'candidate']), interviewController.getInterviews);

router.put("/:id", authenticate, authorize(['interviewer']), interviewController.interviewUpdate);

router.delete("/:id", authenticate, authorize(['interviewer']), interviewController.interviewDelete);

export default router;