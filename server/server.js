import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

//Settings
dotenv.config()

const app= express();
const PORT=process.env.PORT //For using env file

app.use(cors());//For using cors
app.use(bodyParser.json())//For using bodyparser;This helps in viewing the content in postman

//Database Connection

mongoose.connect("mongodb+srv://Username:9nJ5kO4qi5X9Zygz@cluster0.y7qnml6.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("connected successfully"))
.catch((err)=>console.log(err));


//Routes
app.get('/about/:id',(req,res)=>{
    res.send({message:`${req.params.id} is a very serious number`})
})

app.post("/about",(req,res)=>{
    console.log(req.body)
    res.json({message:"fine"})
})

app.put("/about/p",(req,res)=>{
    console.log(req.body)
    res.json({message:"fine"})
})

app.delete("/about/d",(req,res)=>{
    console.log(req.body)
    res.json({message:"deleted"})
})

app.listen(PORT,()=>{
    console.log("Shit happens")
})


 