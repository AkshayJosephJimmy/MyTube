import { addComment } from "../controllers/comments.controllers.js";
import { verifyToken } from "../Middleware/verifyToken.js";





export function getCommentsRoutes(app) {
app.post('/api/comments', verifyToken,addComment )

}




