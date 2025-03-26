import * as chatServices from "../services/chatServices.js"

export const saveNewMessage = async (req, res) =>{
    try {
        const {sender, senderModel, receiver, receiverModel, message} = req.body;
        const chat = await chatServices.svaeMessage(sender, senderModel, receiver, receiverModel, message);
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNewMessage = async (req, res) =>{
    try {
        const { userId, userModel, contactId, contactModel } = req.params;
        const messages = await getMessages(userId, userModel, contactId, contactModel);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}