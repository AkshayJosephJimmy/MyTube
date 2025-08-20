import videoModel from "../models/videos.model.js";



export async function searchVideos(req, res) {
    const { query } = req.query;
    try {
        const videos = await videoModel.find({
            title: { $regex: query, $options: "i" } // Case-insensitive search
        });
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: "Error fetching videos" });
    }
}