
import { CommentModel } from '../models/comments.model.js';

import videoModel from '../models/videos.model.js';

export async function addComment(req, res) {
  const { videoId, content } = req.body;
  const userId = req.userId;

  if (!content) return res.status(400).json({ message: "Comment content is required" });

  try {
    const video = await videoModel.findById(videoId);
    if (!video) return res.status(404).json({ message: "Video not found" });

    const comment = await CommentModel.create({
      content,
      video: videoId,
      user: userId
    });
   

    res.status(201).json({ message: "Comment added", comment: populatedComment });
  } catch (err) {
    res.status(500).json({ message: "Error adding comment", error: err.message });
  }
}