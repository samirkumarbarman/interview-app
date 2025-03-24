import * as interviewService from '../services/interviewServices.js';

//Create new interview
export const createNewInterview = async (req, res) => {
    try {
        const interview = await interviewService.createInterview(req.body);
        res.status(201).json(interview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get all interviews
export const getInterviews = async (req, res) => {
    try {
        const interviews = await interviewService.getInterviews();
        res.status(200).json(interviews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get interview by ID
export const getInterview = async (req, res) => {
    try {
        const interview = await interviewService.getInterview(req.params.id);
        res.status(200).json(interview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Update interview
export const interviewUpdate = async (req, res) => {
    try {
        const interview = await interviewService.interviewUpdate(req.params.id, req.body);
        res.status(200).json(interview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Delete interview
export const interviewDelete = async (req, res) => {
    try {
        const interview = await interviewService.interviewDelete(req.params.id);
        res.status(200).json(interview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};