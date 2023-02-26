import mongoose from "mongoose";

const Schema=mongoose.Schema;

const commentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    }
});

export default mongoose.model("comment",commentSchema);