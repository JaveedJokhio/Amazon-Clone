import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {

  const [{basket},dispatch]=useStateValue()

  return (
    <div className='checkout'>
    <div className='chechout_left'>
        <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg' alt='checkoutimg'/>
        <div >
        <h2 className='checkout_title'>Your Shopping Basket</h2>
        {basket.map(item=>(
          <CheckoutProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}
    {/* Basket */}
    {/* Basket */}
    {/* Basket */}

    </div>

    </div>
    <div  className='chechout_right'>
    <Subtotal/>
    </div>
    </div>

  )
}

export default Checkout
