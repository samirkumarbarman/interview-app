import { Chat } from "../models/chatModel.js";

export const svaeMessage = async (sender, senderModel, receiver, receiverModel, message) =>{
    const chat = new Chat({sender, senderModel, receiver, receiverModel, message});
    await chat.save();
    return chat;
};

export const getMessage = async (userId, userModel, contactId, contactModel) =>{
    const message = await Chat.find({
        $or :
        [
            { sender: userId, senderModel: userModel, receiver: contactId, receiverModel: contactModel },
      { sender: contactId, senderModel: contactModel, receiver: userId, receiverModel: userModel },
        ],
    }).sort({ timestamp : 1 });
    return message;
};