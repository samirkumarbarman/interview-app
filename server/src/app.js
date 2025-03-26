import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import candidateRoutes from './routes/candidateRoutes.js';
import interviewRoutes from './routes/interviewRoutes.js';
import interviewerRoutes from './routes/interviewerRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import mcqRoutes from './routes/mcqRoutes.js';
import voiceRoutes from './routes/voiceRoutes.js';
import writtenRoutes from './routes/writtenRoutes.js';
import connectDB from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import { limiter } from './middlewares/rateLimit.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(limiter);

app.use('/api/auth', authRoutes);

app.use('/api/candidates', candidateRoutes);

app.use('/api/interviews', interviewRoutes);

app.use('/api/interviewers', interviewerRoutes);

app.use('/api/questions', questionRoutes);

app.use('/api/mcqs', mcqRoutes);

app.use('/api/voices', voiceRoutes);

app.use('/api/writtens', writtenRoutes);

app.use(errorHandler);

export default app;