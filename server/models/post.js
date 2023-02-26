import mongoose from "mongoose";

const Schema=mongoose.Schema;

const postSchema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        required:true
    }
});

export default mongoose.Schema("post",postSchema);