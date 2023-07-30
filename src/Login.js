import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup} from "firebase/auth"
import { auth,provider } from "./firebase.js"; // update path 

function Login() {

    const [value,setValue] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const signIn = (e) => {
        e.preventDefault()

        // firebase login sheet
        signInWithEmailAndPassword(auth, email, password).then((auth) => {
            console.log(auth);
             if (auth) {
                 // if successfully signed in, redirect the new user to the home page
                 navigate("/", { replace: true })
            }
            }).catch(error => alert("Register First",error.message));
        
         

    }

    const register = (e) => {
        e.preventDefault()
        // firebase register sheet
        // auth instance as first param
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate("/", { replace: true })
                    console.log(auth)
                }
            })
            .catch(error => alert(error.message))

    }

    const handleClick = () => { // Corrected function definition
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user.email);
                localStorage.setItem("email", data.user.email);
                navigate("/", { replace: true });
            })
            .catch((error) => alert(error.message));
    }
    

   useEffect(()=>{
    setValue(localStorage.getItem("email"))
   })

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG24.png' alt='amazon-logo' />
            </Link>
            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='login_button' type='submit' onClick={signIn}>Sign In</button>
                </form>
                <div className='google-icon'>
                    
                <button onClick={handleClick}>
                    <img src='https://img.freepik.com/free-icon/search_318-265146.jpg' className='google-icon-img'/>Sign in with Google</button>
                </div>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>
                <button className='login_signup_button' onClick={register}>Create your Amazon Account</button>
                
            </div>
        </div>
    )
}

export default Login
