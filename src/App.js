import './App.css';
import Header from './Header';
import Home from './Home';
import { Route, Routes } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from "./firebase.js";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footerr';


const promise = loadStripe('pk_test_51NY88SFsg59S9XRAEXa9xcTiIS4rGJ6IQRBlKkk61vJKIEle9VpaLjg4ld4pJzuWOniNa5NOzv2l7npZQXr6u2JN00UG7usHjD')

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // only runs once when app component reload.
    auth.onAuthStateChanged(authUser => {
      console.log('The User Is >>>', authUser)
      if (authUser) {
        // user just login or was login
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/orders" element={<>
          <Header />
          <Orders />
          <Footer/>
        </>} />
        <Route exact path="/checkout" element={<>
          <Header />
          <Checkout />
          <Footer/>

        </>} />
        <Route exact path="/payment" element={<>
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          <Footer/>

        </>} />
        <Route exact path="/" element={<>
          <Header />
          <Home />
          <Footer/>

        </>} />
      </Routes>

    </div>
  );
}

export default App;
