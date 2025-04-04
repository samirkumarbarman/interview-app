import mongoose from 'mongoose';
import { v4 as UUIDV4 } from 'uuid';

const candidateSchema = new mongoose.Schema({
    candidateId: { 
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
        enum: ['candidate', 'interviewer', 'admin'],
        default: 'candidate',
    },

    cv : {
        type : String,
    },

}, { timestamps: true });

candidateSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

export const Candidate = mongoose.model('Candidate', candidateSchema);