import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    candidateId: { 
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

export const Candidate = mongoose.model('Candidate', candidateSchema);