import { addProjects } from "../controllers/projects.controllers";




function projectApi(app){

    app.post('/api/projects', addProjects);
}