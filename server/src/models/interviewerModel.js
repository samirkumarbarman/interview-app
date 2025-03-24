import mongoose from "mongoose";
import { v4 as UUIDV4 } from 'uuid';

const interviewerSchema = new mongoose.Schema({
    interviewerId: {
        type: String,
        default: UUIDV4,
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

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ['interviewer', 'candidate', 'admin'],
        default: 'interviewer',
    },

}, { timestamps: true });

interviewerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

export const Interviewer = mongoose.model("Interviewer", interviewerSchema);