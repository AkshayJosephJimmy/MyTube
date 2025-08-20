import { signin } from "../controllers/signin.controllers.js";





 export function getSigninRoutes(app) {
app.post('/api/signin',signin )

}