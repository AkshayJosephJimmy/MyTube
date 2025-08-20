import React from 'react'
import { SideBarContext } from '../utils/toggelContext';
import { IoMdHome } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";




function SideBar() {

   const { isSideBar,  } = React.useContext(SideBarContext);
  return (
    <div className={`bg-gray-100 h-screen ${isSideBar ? 'w-3xl' : 'w-17'} items-center`} >
      <ul className='space-y-6 '>
        <li className={`p-2 hover:bg-gray-200 m-3 mb-6 ${isSideBar ?`flex flex-row`:`flex flex-col items-center justify-center text-center`}`}><IoMdHome className='size-6'/><span className='text-xs'>home</span></li>
        <li className={`p-2 hover:bg-gray-200 m-3 mb-6 ${isSideBar ?`flex flex-row`:`flex flex-col items-center justify-center text-center`}`}><IoIosTrendingUp className='size-6' /><span className='text-xs'>Trending</span></li>
        <li className={`p-2 hover:bg-gray-200 m-3 mb-6 ${isSideBar ?`flex flex-row`:`flex flex-col items-center justify-center text-center`}`}><MdSubscriptions className='size-6'/><span className='text-xs'>Subscripton</span></li>
        <li className={`p-2 hover:bg-gray-200 m-3 mb-6 ${isSideBar ?`flex flex-row`:`flex flex-col items-center justify-center text-center`}`}><MdOutlineVideoLibrary className='size-6'/><span className='text-xs'>Library</span></li>
        
        
      </ul>
    </div>
  )
}

export default SideBar
