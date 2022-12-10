import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import {auth} from './firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const login = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
          //logged in , redirect to home
          navigate("/");
          
      }
  
      )
      .catch(e => 
      
          alert(e.message)
  
        )
  }
  const createAccount = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth,email, password)
      .then((auth) => {
          //create a user and logged in , redirect to home
  
          navigate("/");
      })
      .catch(e => alert(e.message))
  }

  return (
    <div className='login'>
        <Link className='link' to='/'><h2 className='login__logo'>Shop-In</h2></Link>

        <div className='login__container'>
    
            <h1>Sign in</h1>
            <form>
                <h5>E-mail/Username</h5><input value={email} onChange={(event) => {
                  setEmail(event.target.value)
                }} type="text" />
                <h5>Password</h5><input value={password} onChange={(event) => {
                  setPasword(event.target.value)
                }} type="password" />
                <div>
                  <span>By Clicking Sign in You Agree the terms and conditions</span>
                </div>
                <button onClick={login} className='login__signInButton'>Sign In</button>
            </form>
           
            <button onClick={createAccount} className='login__createAccountButton'>Create Account</button>
          </div>
        
    </div>
    
  )
}

export default Login
