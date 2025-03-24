import * as interviewerService from '../services/interviewerService.js';

//Get all interviewers
export const getInterviewers = async (req, res) => {
    try {
        const interviewers = await interviewerService.getInterviewers();
        res.status(200).json(interviewers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get interviewer by ID
export const getInterviewer = async (req, res) => {
    try {
        const interviewer = await interviewerService.getInterviewer(req.params.id);
        res.status(200).json(interviewer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Update interviewer
export const interviewerUpdate = async (req, res) => {
    try {
        const interviewer = await interviewerService.interviewerUpdate(req.params.id, req.body);
        res.status(200).json(interviewer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Delete interviewer   
export const interviewerDelete = async (req, res) => {
    try {
        const interviewer = await interviewerService.interviewerDelete(req.params.id);
        res.status(200).json(interviewer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};