import React,{useState, useEffect, useContext} from 'react'
import {useNavigate, Link} from "react-router-dom"
import FirebaseContext from '../context/FirebaseContext'
import * as Routes from "../constants/routes";
const Login = () => {
  const [error, setError] = useState("");
 const navigate = useNavigate();
const {firebaseApp} = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async(event) =>{
    event.preventDefault();
    try{
      await firebaseApp.auth().signInWithEmailAndPassword(emailAddress, password);
      navigate(Routes.DASHBOARD);
    }catch(error){
    setEmailAddress("");
    setPassword("");
    setError(error.message)
    }
  } 
  useEffect(()=>{
    document.title = "Instagram"
    console.log(emailAddress, password)
  },[])
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen" >
      <div className="flex w-3/5">
        <img src="https://plus.unsplash.com/premium_photo-1663133658093-02fda2114142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGlwaG9uZSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="girl" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
        <h1 className="flex justify-center w-full">
        <img className="max-w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IdyTPnhsz8Ug5toxhvIc1mVGuvsHy1G3kg&usqp=CAU" alt="insta" />
        </h1>
        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
        <form onSubmit={handleLogin} method="post">
          <input
          aria-label="Enter your email address"
          type="text"
          placeholder="Email address"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 
          border border-gray-primary rounded mb-2"
          onChange={({target})=>setEmailAddress(target.value)}
          value={emailAddress}
          />
           <input
          aria-label="Enter your Password address"
          type="password"
          placeholder="Password"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 
          border border-gray-primary rounded mb-2"
          onChange={({target})=>setPassword(target.value)}
          value={password}
          />
          <button disabled={isInvalid} type="submit" className={`bg-blue-500 w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}`}>Log In</button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
           <p className="text-sm">Don't have an account?{` `}</p>
           <Link to="/signup" className="font-bold text-blue-medium">Sign up</Link>
      </div>
      </div>
      </div>
  )
}

export default Login