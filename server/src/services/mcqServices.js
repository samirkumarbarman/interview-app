import { Mcq } from '../models/mcqModel.js';

//Create Mcq
export const createMcq = async (mcqData) => {
    const newMcq = new Mcq(mcqData);
    await newMcq.save();
    return newMcq;
};

//Get Mcq by Id
export const GetMcqById = async (mcqId) => {
    const mcq = await Mcq.findOne({ mcqId });
    if (!mcq) throw new Error('Mcq not found');
    return mcq;
};

//Get All Mcq
export const getAllMcq = async () => {
    const mcq = await Mcq.find();
    return mcq;
};

//Update Mcq
export const updateMcq = async (mcqId, update) => {
    const updateMcq = await Mcq.findByIdAndUpdate(mcqId, update, { new: true, runValidators: true });
    if (!updateMcq) throw new Error('Mcq not found');
    return updateMcq;
};

//Delete Mcq
export const deleteMcq = async (mcqId) => {
    const mcq = await Mcq.findByIdAndDelete(mcqId);
    if (!mcq) throw new Error('Mcq not found');
    return mcq;
};