import { registerUser } from "../controllers/users.controllers.js";


export  function usersApi(app){
app.post('/api/register',registerUser)
}