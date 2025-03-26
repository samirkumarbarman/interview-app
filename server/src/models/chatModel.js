import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    sender :{
        type: mongoose.Schema.Types.ObjectId,
        refPath : 'senderModel',
        required:true,
    },

    senderModel :{
        type : String,
        enum : ['Candidate', 'Interviewer'],
        required : true,
    },

    receiver :{
        type : mongoose.Schema.Types.ObjectId,
        refPath : 'reveiverModel',
        required : true,
    },

    receiverModel :{
        type : String,
        enum : ['Candidate', 'Interviewer'],
        required : true,
    },

    message :{
        type : String,
        required : true,
    },

    timestamp :{
        type : Date,
        default : Date.now,
    },

}, { timestamps : true });

export const Chat = mongoose.model('Chat', chatSchema);