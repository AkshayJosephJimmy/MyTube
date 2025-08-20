import React from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import Comments from './Comments.jsx';

function WatchView() {
const videos=useSelector((state) => state.video.videos);
console.log(`${videos} helo`)

const curretVideo=videos.find((vid) => vid._id == useParams().id);
// Log for debugging
  console.log("curretVideo:", curretVideo);


 




    const { id } = useParams();
    console.log(id);
     if (!curretVideo || !curretVideo.videoUrl) {
    return <p>Loading...</p>;
  }
  return (
    <div>
        <iframe
  width="100%"
  src={curretVideo.videoUrl.replace("watch?v=", "embed/")}
  height="480"
  controls
  light="https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg"
  
  
  //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //allowFullScreen
></iframe>
        <div>
            <p className="font-bold">{curretVideo.title}</p>
            <p>{curretVideo.description}</p>
            <p>{curretVideo.channelName}</p>
            <p>{curretVideo.views} views</p>
            <p>{curretVideo.likeCount} likes</p>
           
        </div>

        <Comments videoId={curretVideo._id}/>
      
    </div>
  )
}

export default WatchView
//{curretVideo.videoUrl.replace("watch?v=", "embed/")}