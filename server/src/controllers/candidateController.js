import * as candidateService from '../services/candidateService.js';

//Get all candidates
export const getCandidates = async (req, res) => {
    try {
        const candidates = await candidateService.getCandidates();
        res.status(200).json(candidates);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get candidate by ID
export const getCandidate = async (req, res) => {
    try {
        const candidate = await candidateService.getCandidate(req.params.id);
        res.status(200).json(candidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Update candidate
export const candidateUpdate = async (req, res) => {
    try {
        const candidate = await candidateService.candidateUpdate(req.params.id, req.body);
        res.status(200).json(candidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Delete candidate
export const candidateDelete = async (req, res) => {
    try {
        const candidate = await candidateService.candidateDelete(req.params.id);
        res.status(200).json(candidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};