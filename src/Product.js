import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({id, title,image,price,rating}) => {

  const [{basket},dispatch]= useStateValue();
console.log('this is basket',basket)
  const addToBasket=()=>{
    // dispatch items to cart
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }
    })
  }


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
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
