import mongoose from "mongoose";

const interviewerSchema = new mongoose.Schema({
    interviewerId: {
        type: String,
        default: uuidv4,
        unique: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String
    },

    profilePicture: {
        type: String
    },

}, { timestamps: true });

export const Interviewer = mongoose.model("Interviewer", interviewerSchema);