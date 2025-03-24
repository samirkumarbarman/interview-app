import * as writtenService from '../services/writtenServices.js';

//Create new written
export const createNewWritten = async (req, res) => {
    try {
        const written = await writtenService.createWritten(req.body);
        res.status(201).json(written);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get written by ID
export const getWritten = async (req, res) => {
    try {
        const written = await writtenService.getWrittenById(req.params.id);
        res.status(200).json(written);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Update written
export const writtenUpdate = async (req, res) => {
    try {
        const written = await writtenService.updateWritten(req.params.id, req.body);
        res.status(200).json(written);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Delete written
export const writtenDelete = async (req, res) => {
    try {
        const written = await writtenService.deleteWritten(req.params.id);
        res.status(200).json(written);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};