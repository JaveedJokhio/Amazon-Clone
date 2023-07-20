import React from 'react'
import './Product.css'

const Product = ({id, title,image,price,rating}) => {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating).fill().map((_, i) => (
            <p key={i}><span className="yellow-star">&#9733;</span></p>
          ))}
        </div>
        
      </div>
      <img className='product_img' src={image} alt='img'/>
        <button>Add to Basket</button>
    </div>
  )
}

export default Product
