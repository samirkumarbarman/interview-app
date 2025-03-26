import express from 'express';
import upload from '../middlewares/upload.js';
import * as candidateController from '../controllers/candidateController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/upload-cv/:candidateId', authenticate, authorize(['candidate']), upload.single('cv'), candidateController.candidateCv);

router.get("/:id", authenticate, authorize(['candidate', 'interviewer', 'admin']), candidateController.getCandidate);

router.put("/:id", authenticate, authorize(['candidate']), candidateController.candidateUpdate);

router.delete("/:id", authenticate, authorize(['candidate', 'admin']), candidateController.candidateDelete);

export default router;
