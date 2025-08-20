

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
  description: String,
  videoUrl: String,
  thumbnailUrl: String,
  channelName: String,
  views: { type: Number, default: 0 },
  likesCount: { type: Number, default: 0 },
  
});

const videoModel = mongoose.model('Video', videoSchema);

export default videoModel;
    