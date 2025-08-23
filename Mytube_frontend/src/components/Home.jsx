import React, { use } from 'react'
import SideBar from './SideBar'
import Modal from './Modal';
import { set } from 'mongoose';





function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleCLicl() {
  console.log("Button clicked");
  setIsOpen(!isOpen);
  console.log(isOpen)
  
  // You can add more functionality here, like navigating to a different page or opening a modal
}

return(
<div>
  <button className='bg-amber-300 border-amber-300' onClick={handleCLicl}>Add Project</button>
   
  <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
    
  </Modal>

</div>

)

}

export default Home



//AIzaSyChybMFGahJyBPOveab8QHXw9m9MMVZ7-w
//https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=YOUR_API_KEY
