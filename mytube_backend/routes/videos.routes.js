import { getVideos } from "../controllers/videos.controllers.js";



export function videosApi(app){

app.get('/api/videos', getVideos)

}



