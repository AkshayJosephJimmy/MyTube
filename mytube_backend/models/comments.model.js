import { Schema } from "mongoose";
import mongoose from "mongoose";




const comentSchema= new Schema({
content: {
    type: String,
    required: true,
    trim: true
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

})

 export const CommentModel = mongoose.model('Comment', comentSchema);