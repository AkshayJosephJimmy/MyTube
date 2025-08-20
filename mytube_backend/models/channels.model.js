
import mongoose from "mongoose";
import { Schema } from "mongoose";



const channelSchema= new Schema({
chanbelName: String,
subscribers:{type:Number,default:0},
vidios:[{type:Schema.Types.ObjectId,ref:"Video"}],
createdAt: { type: Date, default: Date.now }

})

 export const channelModel=mongoose.model("Channel",channelSchema);