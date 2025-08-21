
import mongoose from "mongoose";
import { Schema } from "mongoose";



const channelSchema= new Schema({
chanbelName: String,
follow:{type:Number,default:0},
project: [{type:Schema.Types.ObjectId,ref:"Projects"}],

createdAt: { type: Date, default: Date.now }

})

 export const channelModel=mongoose.model("Channel",channelSchema);