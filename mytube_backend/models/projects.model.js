import mongoose from "mongoose";

const projectSchema= new mongoose.Schema({
    projectName:String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    channel: { type: mongoose.Schema.Types.ObjectId, ref: "Channel" },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
    tags: [{ type: String }]
})

export const projectModel=mongoose.model("Projects",projectSchema);