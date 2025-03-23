import { Written } from "../models/writtenModel.js";

//Create Written
export const createWritten = async (writtenData) => {
    const newWritten = new Written(writtenData);
    await newWritten.save();
    return newWritten;
};

//Get Written by Id
export const getWrittenById = async (writtenId) => {
    const written = await Written.findOne({ writtenId });
    if (!written) throw new Error('Written not found');
    return written;
};

//Update Written
export const updateWritten = async (writtenId, update) => {
    const updateWritten = await Written.findByIdAndUpdate(writtenId, update, { new: true, runValidators: true });
    if (!updateWritten) throw new Error('Written not found');
    return updateWritten;
};

//Delete Written
export const deleteWritten = async (writtenId) => {
    const written = await Written.findByIdAndDelete(writtenId);
    if (!written) throw new Error('Written not found');
    return written;
};