import { searchVideos } from "../controllers/search.controllers.js";


export function getSearchRoutes(app) {
    app.get('/api/search',searchVideos)
}