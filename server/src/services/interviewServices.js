import { Interview } from '../models/interviewModel.js';

//Create Interview
export const createInterview = async (interviewData) => {
    const newInterview = new Interview(interviewData);
    await newInterview.save();
    return newInterview;
};

//Get Interview by Id
export const getInterviewById = async (interviewId) => {
    const interview = await Interview.findOne({ interviewId });
    if (!interview) throw new Error('Interview not found');
    return interview;
};

//Get All Interview
export const getAllInterview = async () => {
    const interview = await Interview.find();
    return interview;
};

//Update Interview
export const updateInterview = async (interviewId, update) => {
    const updateInterview = await Interview.findByIdAndUpdate(interviewId, update, { new: true, runValidators: true });
    if (!updateInterview) throw new Error('Interview not found');
    return updateInterview;
};

//Delete Interview
export const deleteInterview = async (interviewId) => {
    const interview = await Interview.findByIdAndDelete(interviewId);
    if (!interview) throw new Error('Interview not found');
    return interview;
};