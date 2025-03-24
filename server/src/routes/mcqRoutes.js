import express from 'express';
import * as mcqController from '../controllers/mcqController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

router.post("/", authenticate, authorize(['interviewer']), mcqController.createNewMcq);

router.get("/:id", authenticate, authorize(['interviewer', 'candidate']), mcqController.getMcqs);

router.put("/:id", authenticate, authorize(['interviewer']), mcqController.mcqUpdate);

router.delete("/:id", authenticate, authorize(['interviewer']), mcqController.mcqDelete);

export default router;