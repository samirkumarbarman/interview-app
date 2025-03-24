import express from 'express';
import * as interviewerController from '../controllers/interviewerController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.get("/:id", authenticate, authorize(['interviewer', 'admin', 'candidate']), interviewerController.getInterviewer);

router.put("/:id", authenticate, authorize(['interviewer']), interviewerController.interviewerUpdate);

router.delete("/:id", authenticate, authorize(['interviewer', 'admin']), interviewerController.interviewerDelete);

export default router;