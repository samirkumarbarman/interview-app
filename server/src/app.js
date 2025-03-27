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
import { Server } from "socket.io";
import http from "http";
import { saveNewMessage } from "../src/services/chatServices.js";


dotenv.config();

connectDB();

const app = express();

const server = http.createServer(app);

const io = new Server(server);

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

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('chat message', async({sender, senderModel, receiver, receiverModel, message})=>{
        const chat = await saveNewMessage(sender, senderModel, receiver, receiverModel, message);

        socket.to(receiver).emit('chat messsage', chat);
    });
    socket.on('disconnect', ()=>{
        console.log('User disconnected');
    });
});

app.use(errorHandler);


export default app;