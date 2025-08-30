import express from 'express';
import mongoose, { get } from 'mongoose';
import { videosApi } from './routes/videos.routes.js';
import cors from 'cors';
import { usersApi } from './routes/users.routes.js';
import { getSigninRoutes } from './routes/signin.routes.js';
import { getSearchRoutes } from './routes/search.routes.js';
import { getCommentsRoutes } from './routes/comments.route.js';
import projectApi from './routes/projects.route.js';



const app = express();

const PORT=5050;

mongoose.connect('mongodb+srv://akshayjosephjimmy05:69Osc0N9POrSaObh@cluster0.ezg4wml.mongodb.net/')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.use(cors());
app.use(express.json());
videosApi(app);
usersApi(app);
getSigninRoutes(app);
getSearchRoutes(app);
getCommentsRoutes(app);
projectApi(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//akshayjosephjimmy05
//69Osc0N9POrSaObh
//mongodb+srv://akshayjosephjimmy05:69Osc0N9POrSaObh@cluster0.ezg4wml.mongodb.net/