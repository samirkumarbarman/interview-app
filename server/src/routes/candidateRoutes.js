import express from 'express';
import * as candidateController from '../controllers/candidateController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get("/:id", authenticate, authorize(['candidate', 'interviewer', 'admin']), candidateController.getCandidate);

router.put("/:id", authenticate, authorize(['candidate']), candidateController.candidateUpdate);

router.delete("/:id", authenticate, authorize(['candidate', 'admin']), candidateController.candidateDelete);

export default router;
