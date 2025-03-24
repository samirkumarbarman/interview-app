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
    const candidate = (await Candidate.find()).selcet('-password');
    return candidate;
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