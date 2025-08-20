import { Schema } from "mongoose";
import mongoose from "mongoose";


const userSchema= new Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
     channel: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' } 

})

 export  const userModel=mongoose.model('user',userSchema)