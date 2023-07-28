import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase.js"; 
import HeaderLine from './HeaderLine';

const Header = () => {

  const [{basket,user},dispatch]=useStateValue()

  const handleAuthentication=()=>{
    if(user){
      auth.signOut()
    }
  }

  return (
    <>
    <div className='header'>
      <Link to='/'>
      <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo' />

      </Link>

      <div className='header_search'>
        <input className='header_searchInput' type='text' placeholder='Search Amazon' />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <Link to={!user && '/login'}>
        <div className='header_option' onClick={handleAuthentication}>
          <span className='header_optionLineOne'>Hello {user? `${user?.email}` : 'User'}</span>
          <span className='header_optionLineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        <Link to={'/orders'}>
        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'> & Order</span>
        </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
        <div className='optionBasket'>
         
         <Badge badgeContent={basket?.length} color="warning">
           <ShoppingBasketIcon />
         </Badge>
         

         <span className='header_optionLineTwo header_basketCount'> {' '}</span>
       </div>
        </Link>
        
      </div>
      
    </div>
    <HeaderLine/>
    </>
  )
}

export default Header
