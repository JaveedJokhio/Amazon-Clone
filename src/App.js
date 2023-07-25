import './App.css';
import Header from './Header';
import Home from './Home';
import {Route, Routes } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';


function App() {
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
