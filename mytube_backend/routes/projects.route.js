import { addProjects } from "../controllers/projects.controllers.js";
import { upload } from "../Middleware/multerMiddleWare.js";




function projectApi(app){

    app.post('/api/projects',upload.single('video'), addProjects);
}
export default projectApi;