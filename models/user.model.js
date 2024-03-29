import mongoose from "mongoose";


const useSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    lastname:String,
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    salt:{
        type:String
    }
},{timeStemp:true,versionKey:false});




export const User=mongoose.model("userAuths",useSchema);


