
import { projectModel } from "../models/projects.model.js";

 export function addProjects(req,res){

projectModel.create(req.body)
.then((data)=>{
    res.status(201).json({
        message: "Project created successfully",
        data: data
    });
})
.catch((error)=>{
    res.status(500).json({
        message: "Error creating project AV1",
        error: error.message
    });
});
console.log(res)
 }
