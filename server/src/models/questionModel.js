import mongoose from "mongoose";
import { v4 as UUIDV4 } from 'uuid';

const questionSchema = new mongoose.Schema({
    questionId: {
        type: String,
        default: UUIDV4,
        unique: true 
    },

    questionText: {
        type: String,
        required: true 
    },

    questionType: {
        type: String,
        required: true 
    },

}, { timestamps: true });

export const Question = mongoose.model("Question", questionSchema);
