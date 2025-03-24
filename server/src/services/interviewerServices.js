import { Interviewer } from "../models/interviewerModel.js";
import bcrypt from "bcryptjs";

//Get Interviewer by Id
export const getInterviewerById = async (interviewerId) => {
    const interviewer = await Interviewer.findOne({ interviewerId }).select('-password');
    if (!interviewer) throw new Error('Interviewer not found');
    return interviewer;
};

//Get All Interviewer
export const getAllInterviewer = async () => {
    const interviewer = (await Interviewer.find()).select('-password');
    return interviewer;
};

//Update Interviewer
export const updateInterviewer = async (interviewerId, update) => {
    if (update.password) {
        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(update.password, salt);
    };
    const updateInterviewer = await Interviewer.findByIdAndUpdate(interviewerId, update, { new
        : true , runValidators: true });
    if (!updateInterviewer) throw new Error('Interviewer not found');
    return updateInterviewer;
};

//Delete Interviewer
export const deleteInterviewer = async (interviewerId) => {
    const interviewer = await Interviewer.findByIdAndDelete(interviewerId);
    if (!interviewer) throw new Error('Interviewer not found');
    return interviewer;
};