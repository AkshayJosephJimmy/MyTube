import { useState } from "react"

 function Register(){

    const [newUser,setNewUser]=useState('');
    const [newEmail,setNewEmail]=useState('');
    const [newPassword,setNewPassword]=useState('');
    async function handleSubmit(e) {
        e.preventDefault();

      const res=  await fetch('http://localhost:5050/api/register', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: newUser,
                email: newEmail,
                password: newPassword
        })
        
       
    })
    if(res.ok){
        alert('user registered successfully');
        setNewUser('');
        setNewEmail('');
        setNewPassword('');
    }else{
        alert('error in registering user');
    }
}


    return(
        <div>
            <h1>Register</h1>
             <form className='p-4 flex flex-col ' onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder="Username" value={newUser} onChange={(e)=>setNewUser(e.target.value)}className="border p-2 rounded w-2xl mb-4" />
        <input type='email' placeholder="Email" value={newEmail} onChange={(e)=>setNewEmail(e.target.value)} className="border p-2 rounded w-2xl mb-4" />
        <input type="password" placeholder="Password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="border p-2 rounded w-2xl mb-4" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-2xl">Register</button>
       
      </form>
        </div>
    )
}
export default Register