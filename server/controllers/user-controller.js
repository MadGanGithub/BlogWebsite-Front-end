import User from "../models/user.js"

export const getUser=async (req,res,next)=>{
    var users;
    try{
        users=await User.find();
    }catch(err){
        console.log("Error found");
    }
    if(!users){
        return res.status(404).json({message:"Shit happens"});
    }
    return res.status(200).json({users});
};


export const signup=async (req,res,next)=>{
    const {name,email,password}=req.body;

    let existingUser;
    try{
        existingUser=await User.findOne({email});
    }catch(err){
        console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message:"Username exist already"});
    }
    const user=new User({    
        name,
        password,
        email
    });

    try{
        await user.save();
    }catch(err){
        console.log(err);
    }

    return res.status(201).json({user});

}
