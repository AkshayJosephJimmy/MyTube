import React from 'react'
import { Link } from 'react-router-dom'

function Thumbnail({video}) {
  return (
    <Link to={`/watch/${video._id}`} className="no-underline">
    <div className='w-100 h-80 bg-white shadow-lg rounded-lg p-4 flex flex-col items-start' >
        <img src={video.thumbnailUrl} alt="Thumbnail" className="w-full h-50 rounded-lg shadow-md" />
        <h2 className="text-sm font-semibold mt-2">{video.title}</h2>
        <span className="text-sm text-gray-600">{video.channelName} </span>
        <span className="text-sm text-gray-500">{video.views} </span>
        
    </div>
    </Link>
  )
}

export default Thumbnail
