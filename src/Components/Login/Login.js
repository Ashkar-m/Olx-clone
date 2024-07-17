import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Firebase, { auth } from '../../firebase/config';
import { FirebaseContext } from '../../contexts/firebaseContext';
import { signInWithEmailAndPassword } from 'firebase/auth';



function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const navigate=useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      navigate('/');
      
    }).catch((e)=>{
      alert(e.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
