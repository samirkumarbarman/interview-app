import express from 'express';
import * as voiceController from '../controllers/voiceController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/", authenticate, authorize(['interviewer']), voiceController.createNewVoice);

router.get("/:id", authenticate, authorize(['interviewer', 'candidate']), voiceController.getVoice);

router.put("/:id", authenticate, authorize(['interviewer']), voiceController.voiceUpdate);

router.delete("/:id", authenticate, authorize(['interviewer']), voiceController.voiceDelete);

export default router;