import * as voiceService from '../services/voiceService.js';

//Create new voice
export const createNewVoice = async (req, res) => {
    try {
        const voice = await voiceService.createVoice(req.body);
        res.status(201).json(voice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get voice by ID
export const getVoice = async (req, res) => {
    try {
        const voice = await voiceService.getVoiceById(req.params.id);
        res.status(200).json(voice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Update voice
export const voiceUpdate = async (req, res) => {
    try {
        const voice = await voiceService.updateVoice(req.params.id, req.body);
        res.status(200).json(voice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Delete voice
export const voiceDelete = async (req, res) => {
    try {
        const voice = await voiceService.deleteVoice(req.params.id);
        res.status(200).json(voice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};