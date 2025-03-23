import mongoose from "mongoose";

const mcqSchema = new mongoose.Schema({
    mcqId: {
        type: String,
        default: uuidv4,
        unique: true 
    },

    questionId: {
        type: String,
        ref: 'Question',
        required: true 
    },

    options: {
        type: [String],
        required: true 
    },

    correctAnswer: {
        type: String,
        required: true
    },

}, { timestamps: true });

export const Mcq = mongoose.model("Mcq", mcqSchema);