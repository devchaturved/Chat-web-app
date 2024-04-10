import mongoose from 'mongoose';

const massageSchema = new mongoose.Schema({
    senderId:{
        type:  mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    receiverId:{
        type:  mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    message:{
        type : String,
        required:true
    }
    // CreatedAt and updatedAt fields are added to database becouse of timestamps
}, {timestamps:true}
);

const Message = mongoose.model("Message",massageSchema)
export default Message;