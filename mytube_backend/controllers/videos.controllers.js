import videoModel from "../models/videos.model.js";


export async function getVideos(req,res) {

const videos=await videoModel.find()
res.status(200).json({videos})
   
    
}