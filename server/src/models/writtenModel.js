import mongoose from "mongoose";

const writtenSchema = new mongoose.Schema({
    writtenAnswerId: {
        type: String,
        default: uuidv4,
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

    answerText: {
        type: String,
        required: true 
    },

}, { timestamps: true });

export const Written = mongoose.model("Written", writtenSchema);