import React, { use } from 'react'
import SideBar from './SideBar'
import Thumbnail from './Thumbnail'
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../utils/videoSlice';
import FilterBar from './FilterBar.jsx';
import { useLocation } from 'react-router-dom';
import { SideBarContext } from '../utils/toggelContext.jsx';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { setUser } from '../utils/AuthContext.jsx';




function Home() {

//const api_key='AIzaSyChybMFGahJyBPOveab8QHXw9m9MMVZ7-w';
//const api_url=`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${api_key}`;
const dispatch=useDispatch();
const {videos,loading,error}=useSelector((state)=>state.video);
 const [selectedFilter, setSelectedFilter] = React.useState(null);
 const location = useLocation();
 React.useEffect(() => {
  if (location.pathname === "/") {
    setSelectedFilter(null); // Reset filter when user navigates to Home
  }
}, [location.pathname]);

React.useEffect(() => {
dispatch(fetchVideos());
   

},[dispatch]);
 const filteredVideos = selectedFilter
    ? videos.filter((video) =>
        video.title.toLowerCase().includes(selectedFilter.toLowerCase())
      )
    : videos;
 if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading videos</p>;

    
  return (
    <div className='flex '>
        
        
        <SideBar />
            <div className='flex flex-wrap gap-2'>
              <div className='flex flex-col w-full' >

                      <FilterBar selected={selectedFilter} onSelect={setSelectedFilter} />

      
              </div>
      {filteredVideos.map((video)=> <Thumbnail key={video._id} video={video} />)}
            </div>
              
    </div>
  )
}

export default Home



//AIzaSyChybMFGahJyBPOveab8QHXw9m9MMVZ7-w
//https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=YOUR_API_KEY
