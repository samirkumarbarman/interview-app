import * as mcqService from '../services/mcqService.js';

//Create new MCQ
export const createNewMcq = async (req, res) => {
    try {
        const mcq = await mcqService.createNewMcq(req.body);
        res.status(201).json(mcq);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get all MCQs
export const getMcqs = async (req, res) => {
    try {
        const mcqs = await mcqService.getMcqs();
        res.status(200).json(mcqs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get MCQ by ID
export const getMcq = async (req, res) => {
    try {
        const mcq = await mcqService.getMcq(req.params.id);
        res.status(200).json(mcq);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Update MCQ
export const mcqUpdate = async (req, res) => {
    try {
        const mcq = await mcqService.mcqUpdate(req.params.id, req.body);
        res.status(200).json(mcq);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Delete MCQ
export const mcqDelete = async (req, res) => {
    try {
        const mcq = await mcqService.mcqDelete(req.params.id);
        res.status(200).json(mcq);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};