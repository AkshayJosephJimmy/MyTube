import React from 'react'
import ReactDOM from 'react-dom'
import Tags from './Tags';

function Modal({isOpen,setIsOpen}) {
    
    const [tag,setTag]=React.useState("");
    const [tags,setTags]=React.useState([]);
    
function handleClose(){
    setIsOpen(false)
}

function handleTag(e){
setTag(e.target.value)

}
function handleTagAdd(e){
e.preventDefault();
if(tag==="" || tags.includes(tag)) return;

    setTags([...tags,tag])
}
function removeTag(t){
    setTags(tags.filter(tag=>tag!==t))
}
    
  


if(isOpen){

    
    return ReactDOM.createPortal(
        <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center' onClick={()=>handleClose()}>

    <div className='bg-white p-4 rounded' onClick={(e)=>e.stopPropagation()}>
        <form className='flex flex-col gap-4'>
            <label for='name'>Project Name</label>
            <input type='text' id='name' className='border-2 border-black'/>
            <label for='description'>Description</label>
            <input type='text' id='description' className='border-2 border-black'/>
            <label for='tags'>Tags</label>
            <input type='text' id='tags' placeholder='React,creative,AI,videography'onChange={(e)=>handleTag(e)} value={tag} className='border-2 border-black'/>
            <div className='flex flex-row gap-2 w-full overflow-auto'>

            {tags.map((t)=><Tags  key={t} >{t} <span className='ml-2 text-[14px] font-bold 'onClick={()=>removeTag(t)} >x</span></Tags>)}
            </div>
            <button onClick={handleTagAdd}>add</button>
            <label for='video'>Upload video (optional)</label>
            <input type='file' id='video' className='border-2 border-black'/>
            <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Create Project</button>
        </form>
      
    </div>
    </div>,document.getElementById('portal')
    
)
}
}



export default Modal
