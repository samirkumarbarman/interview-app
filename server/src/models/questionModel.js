import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionId: {
        type: String,
        default: uuidv4,
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
