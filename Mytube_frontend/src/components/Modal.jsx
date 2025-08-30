import React from 'react'
import ReactDOM from 'react-dom'
import Tags from './Tags';
import axios from 'axios';

function Modal({isOpen,setIsOpen}) {
    
    const [tag,setTag]=React.useState("");
    const [tags,setTags]=React.useState([]);
    const [projectName,setProjectName]=React.useState("");
    const [description,setDescription]=React.useState("");
    const [video,setVideo]=React.useState(null);
   
    

const formdata=new FormData();
formdata.append('projectName',projectName);
formdata.append('description',description);
formdata.append('video',video);
formdata.append('tags',JSON.stringify(tags));


function handleTagAdd(e){
e.preventDefault();
if(tag==="" || tags.includes(tag)) return;

    setTags([...tags,tag])
}
function removeTag(t){
    setTags(tags.filter(tag=>tag!==t))
}

    function handleCreateProject(e){
        console.log("handleCreateProject called"); 
        e.stopPropagation();
        e.preventDefault();

        axios.post('http://localhost:5050/api/projects',formdata,{
            headers:{
                'Content-Type':'multipart/form-data'  
            }
        }).then((res)=>{
            console.log(res.data);
            setIsOpen(false);
            alert('Project created successfully');
        }).catch((err)=>{
            console.log(err);
            alert('Error creating project');
        });
    }
  


if(isOpen){

    
    return ReactDOM.createPortal(
        <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center' onClick={()=>{setIsOpen(false)}}>

    <div className='bg-white p-4 rounded' onClick={(e)=>e.stopPropagation()}>
        <form className='flex flex-col gap-4'onSubmit={handleCreateProject}>
            <label htmlFor='name'>Project Name</label>
            <input type='text' id='name' onChange={(e)=>{setProjectName(e.target.value)}} value={projectName}className='border-2 border-black'/>

            <label htmlFor='description'>Description</label>
            <input type='text' id='description' onChange={(e)=>{setDescription(e.target.value)}} value={description} className='border-2 border-black'/>

            <label htmlFor='tags'>Tags</label>
            <input type='text' id='tags' placeholder='React,creative,AI,videography'onChange={(e)=>{setTag(e.target.value)}} value={tag} className='border-2 border-black'/>

            <div className='flex flex-row gap-2 w-full overflow-auto'>

            {tags.map((t)=><Tags  key={t} >{t} <span className='ml-2 text-[14px] font-bold 'onClick={()=>removeTag(t)} >x</span></Tags>)}
            </div>

            <button onClick={handleTagAdd}>add</button>

            <label htmlFor='video'>Upload video (optional)</label>
            <input type='file' id='video' onChange={(e)=>{setVideo(e.target.files[0])}} className='border-2 border-black'/>
            <button type='submit'  className='bg-blue-500 text-white p-2 rounded'>Create Project</button>
        </form>
      
    </div> 
    </div>,document.getElementById('portal')
    
)
}
}



export default Modal
