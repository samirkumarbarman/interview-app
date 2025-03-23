import { Voice } from '../models/voiceModel.js';

//Create Voice
export const createVoice = async (voiceData) => {
    const newVoice = new Voice(voiceData);
    await newVoice.save();
    return newVoice;
};

//Get Voice by Id
export const getVoiceById = async (voiceId) => {
    const voice = await Voice.findOne({ voiceId });
    if (!voice) throw new Error('Voice not found');
    return voice;
};

//Upadate Voice
export const updateVoice = async (voiceId, update) => {
    const updateVoice = await Voice.findByIdAndUpdate(voiceId, update, { new: true, runValidators: true });
    if (!updateVoice) throw new Error('Voice not found');
    return updateVoice;
};

//Delete Voice
export const deleteVoice = async (voiceId) => {
    const voice = await Voice.findByIdAndDelete(voiceId);
    if (!voice) throw new Error('Voice not found');
    return voice;
};