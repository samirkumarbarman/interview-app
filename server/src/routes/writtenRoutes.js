import * as writtenController from '../controllers/writtenController.js';
import express from 'express';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/", authenticate, authorize(['interviewer']), writtenController.createNewWritten);

router.get("/:id", authenticate, authorize(['interviewer', 'candidate']), writtenController.getWritten);

router.put("/:id", authenticate, authorize(['interviewer']), writtenController.writtenUpdate);

router.delete("/:id", authenticate, authorize(['interviewer']), writtenController.writtenDelete);

export default router;