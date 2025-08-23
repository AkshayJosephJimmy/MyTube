import React from 'react'
import ReactDOM from 'react-dom'

function Modal({isOpen,setIsOpen}) {
    
function handleClose(){
    setIsOpen(false)
}
  


if(isOpen){

    
    return ReactDOM.createPortal(
        <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center' onClick={()=>handleClose()}>

    <div className='bg-white p-4 rounded'>
        <form>
            
        </form>
      
    </div>
    </div>,document.getElementById('portal')
    
)
}
}


export default Modal
