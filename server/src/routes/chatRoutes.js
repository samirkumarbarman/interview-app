import express from "express";
import * as chatController from "../controllers/chatController.js"
import { authenticate, authorize } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/message', authenticate, authorize(['candidate', 'interviewer']), chatController.saveNewMessage);

router.get('/message/:userId', authenticate, authorize(['candidate', 'interviewer']), chatController.getNewMessage);

export default router;