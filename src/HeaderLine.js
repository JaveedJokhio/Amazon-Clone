import React from 'react';
import './HeaderLine.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function HeaderLine() {
  return (
    <div className='header_line'>
      <div className='header-title'>
        <p><LocationOnIcon className='icon'/> <strong>Delivery in Pakistan</strong></p>
      </div>
      <div className='deals'>
        <p>Today's Deals</p>
      </div>
      <div className='Customer-Service'>
        <p>Customer Service</p>
      </div>
      <div className='Registry'>
        <p>Registry</p>
      </div>
      <div className='Sell'>
        <p>Sell</p>
      </div>
    </div>
  );
}

export default HeaderLine;
