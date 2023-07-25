import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signIn=(e)=>{
        e.preventDefault()

    // firebase login sheet

    }

        const register =(e)=>{
        e.preventDefault()
          // firebase register sheet
        
        }

  return (
    <div className='login'>
        <Link to='/'>
        <img className='login_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG24.png' alt='amazon-logo' />
        </Link>
    <div className='login_container'>
        <h1>Sign in</h1>
        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>
            
            <button className='login_button' type='submit' onClick={signIn}>Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
        </p>
        <button className='login_signup_button' onClick={register}>Create your Amazon Account</button>
    </div>
    </div>
  )
}

export default Login
