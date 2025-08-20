import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import authReducer from "./AuthContext.jsx";


const myStore=configureStore({
    reducer:{
        video: videoReducer,
        auth:authReducer
    }
})



export default myStore;







