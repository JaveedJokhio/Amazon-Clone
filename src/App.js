import './App.css';
import Header from './Header';
import Home from './Home';
import {Route, Routes } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from "./firebase.js";  
import { useStateValue } from './StateProvider';


function App() {

  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    // only runs once when app component reload.
    auth.onAuthStateChanged(authUser=>{
      console.log('The User Is >>>', authUser)
      if(authUser){
        // user just login or was login
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[])


  return (
    <div className="App">
     <Routes>
     <Route exact path="/login" element={<Login />} />
     
        <Route exact path="/checkout" element={<>
          <Header />
          <Checkout />
        </>} />
        <Route exact path="/" element={<>
          <Header />
          <Home />
        </>} />
     </Routes>
    
    </div>
  );
}

export default App;
