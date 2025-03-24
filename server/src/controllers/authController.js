import * as authServices from "../services/authServices.js";

//Register Candidate
export const registerNewCandidate = async (req, res) => {
    try {
        const candidate = await authServices.registerCandidate(req.body);
        res.status(201).json(candidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Register Interviewer
export const registerNewInterviewer = async (req, res) => {
    try {
        const interviewer = await authServices.registerInterviewer(req.body);
        res.status(201).json(interviewer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Login Candidate
export const candidateLogin = async (req, res) =>{
    try {
        const token = await authServices.loginCandidate(req.body);
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Login Interviewer
export const interviewerLogin = async (req, res) =>{
    try {
        const token = await authServices.loginInterviewer(req.body);
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};