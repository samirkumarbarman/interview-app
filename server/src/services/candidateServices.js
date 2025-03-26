import path from "path";
import { Candidate } from "../models/candidateModel.js";
import bcrypt from "bcryptjs";

//Get Candidate by Id
export const getCandidateById = async (candidateId) => {
    const candidate = await Candidate.findOne({ candidateId }).select('-password');
    if (!candidate) throw new Error('Candidate not found');
    return candidate;
};

//Get All Candidate
export const getAllCandidate = async () => {
    const candidates = (await Candidate.find()).select('-password');
    return candidates;
};

//Update Candidate
export const updateCandidate = async (candidateId, update) => {
    if (update.password) {
        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(update.password, salt);
    };
    const updateCandidate = await Candidate.findByIdAndUpdate(candidateId, update, { new
        : true , runValidators: true });
    if (!updateCandidate) throw new Error('Candidate not found');
    return updateCandidate;
};

//Delete Candidate
export const deleteCandidate = async (candidateId) => {
    const candidate = await Candidate.findByIdAndDelete(candidateId);
    if (!candidate) throw new Error('Candidate not found');
    return candidate;
};

// Upload cv
export const uploadCv = async (candidateId, cvFile) =>{
    try {
        const candidate = await Candidate.findOne({candidateId});
        if (!candidate){
            throw new Error ("Candidate not found");
        }

        const cvPath = path.join('uploads', cvFile.filename);
        candidate.cv = cvPath;

        await candidate.save();
        return candidate;
    } catch (error) {
        throw new Error (error.message);
    }
};