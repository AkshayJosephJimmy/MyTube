

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
  description: String,
  videoUrl: String,
  channelName: String,
  channelId: { type: mongoose.Schema.Types.ObjectId, ref: "Channel" },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Projects" },
  
  
});

const videoModel = mongoose.model('Video', videoSchema);

export default videoModel;
    