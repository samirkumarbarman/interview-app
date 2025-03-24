import mongoose from 'mongoose';
import { v4 as UUIDV4 } from 'uuid';

const interviewSchema = new mongoose.Schema({
    interviewId: {
        type: String,
        default: UUIDV4,
        unique: true 
    },

    interviewerId: {
        type: String,
        ref: 'Interviewer',
        required: true 
    },

    candidateId: {
        type: String,
        ref: 'Candidate',
        required: true
    },

    interviewTitle: {
         type: String,
         required: true
    },

    interviewType: {
        type: String,
        enum: ['mcq', 'written', 'voice'],
        required: true 
    },

    startTime: {
        type: Date 
    },

    endTime: {
         type: Date 
    },

    status: {
        type: String,
        enum: ['scheduled', 'in_progress', 'completed', 'cancelled'],
        default: 'scheduled' 
    },

}, { timestamps: true });

export const Interview = mongoose.model('Interview', interviewSchema);