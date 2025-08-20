import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//since we are using fetch for api call ,we nedd createAsyncThunk
const api_key='AIzaSyChybMFGahJyBPOveab8QHXw9m9MMVZ7-w';
const api_url=`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${api_key}`;
   export const fetchVideos=  createAsyncThunk('video/fetchVideos', async () => {
        const res = await fetch('http://localhost:5050/api/videos');
        const data = await res.json();
        return data.videos;
      });

const video=createSlice({
    name:"video",
    initialState:{
        videos:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchVideos.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchVideos.fulfilled,(state,action)=>{
            state.loading=false;
            state.videos=action.payload;
        })
        .addCase(fetchVideos.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }

})
export default video.reducer;



