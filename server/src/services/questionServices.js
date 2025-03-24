import { Question } from '../models/questionModel.js';

//Create Question
export const createQuestion = async (questionData) => {
    const newQuestion = new Question(questionData);
    await newQuestion.save();
    return newQuestion;
};

//Get Question by Id
export const getQuestionById = async (questionId) => {
    const question = await Question.findOne({ questionId });
    if (!question) throw new Error('Question not found');
    return question;
};

//Get All Question
export const getAllQuestions = async () => {
    const questions = await Question.find();
    return questions;
};

//Update Question
export const updateQuestion = async (questionId, update) => {
    const updateQuestion = await Question.findByIdAndUpdate(questionId, update, { new: true, runValidators: true });
    if (!updateQuestion) throw new Error('Question not found');
    return updateQuestion;
};

//Delete Question
export const deleteQuestion = async (questionId) => {
    const question = await Question.findByIdAndDelete(questionId);
    if (!question) throw new Error('Question not found');
    return question;
};
