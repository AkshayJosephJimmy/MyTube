import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setUser } from '../utils/AuthContext';
import { useDispatch } from 'react-redux';
import { setToken } from '../utils/AuthContext';


function SignIn() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const res=await fetch('http://localhost:5050/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });
    const data= await res.json();
    dispatch(setUser(data.user));
    dispatch(setToken(data.token));
    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      alert('User signed in successfully');
    navigate('/');
    
  }else
      alert('Error signing in user');
}

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form className='p-4 flex flex-col' onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}className="border p-2 rounded w-2xl mb-4" />
        <input type='email' placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border p-2 rounded w-2xl mb-4" />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border p-2 rounded w-2xl mb-4" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-2xl">Sign In</button>
       
      </form>
     <Link to={'/register'} ><p>register for new users</p></Link>
    </div>
  )
}

export default SignIn
