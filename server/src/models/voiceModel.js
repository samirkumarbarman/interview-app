import mongoose from "mongoose";
import { v4 as UUIDV4 } from 'uuid';

const voiceSchema = new mongoose.Schema({
    voiceAnswerId: {
        type: String,
        default: UUIDV4,
        unique: true 
    },

    interviewId: {
        type: String,
        ref: 'Interview',
        required: true 
    },

    questionId: {
        type: String,
        ref: 'Question',
        required: true 
    },

    audioUrl: {
        type: String,
        required: true
    },
    transcript: {
        type: String 
    },

}, { timestamps: true });

export const Voice = mongoose.model("Voice", voiceSchema);