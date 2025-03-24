import * as questionService from '../services/questionServices.js';

//Create new question
export const createNewQuestion = async (req, res) => {
    try {
        const question = await questionService.createQuestion(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get all questions
export const getQuestions = async (req, res) => {
    try {
        const questions = await questionService.getAllQuestions();
        res.status(200).json(questions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get question by ID
export const getQuestion = async (req, res) => {
    try {
        const question = await questionService.getQuestionById(req.params.id);
        res.status(200).json(question);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Update question
export const questionUpdate = async (req, res) => {
    try {
        const question = await questionService.updateQuestion(req.params.id, req.body);
        res.status(200).json(question);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Delete question
export const questionDelete = async (req, res) => {
    try {
        const question = await questionService.deleteQuestion(req.params.id);
        res.status(200).json(question);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};