import React, { useContext } from 'react';
import { useState } from 'react';
import Logo from '../../olx-logo.png'; 
import './Signup.css';
import { FirebaseContext } from '../../contexts/firebaseContext';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');

  const navigate=useNavigate()

  const db = getFirestore();
  const  handlesubmit=async(e)=>{
    e.preventDefault();
    try
    {
    const result=await createUserWithEmailAndPassword(auth,email,password);
    await updateProfile(result.user, {
      displayName: name
    });
    await addDoc(collection(db, 'users'), {
      id: result.user.uid,
      displayName: name,
      phone: phone,
    }).then(()=>{
      navigate('/login');
    })}
    catch(e){
      alert(e.message)
    }
  }

  console.log(name,email,phone,password)
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img> 
        <form onSubmit={(e)=>handlesubmit(e)}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login' style={{textDecoration:null}}>Login</Link>
      </div>
    </div>
  );
}
