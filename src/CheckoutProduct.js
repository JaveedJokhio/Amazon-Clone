import { useState } from 'react'
import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, image, title, price, rating, hideButton}) {
    const [removing, setRemoving] = useState(false);

    const [{ basket }, dispatch] = useStateValue()

    // Remove item from basket
    const removeFromBasket = () => {
        setRemoving(true);
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })

    }
    // Handle the removal transition end event
    const handleTransitionEnd = () => {
        if (removing) {
            setRemoving(false); // Reset the removal status
        }
    };
    return (

        <div className={`checkoutProduct ${removing ? 'removing' : ''}`}
            onTransitionEnd={handleTransitionEnd}>
            <img className='checkoutProduct_image' src={image} />
            <div className='checkoutProduct_info' >
                <p className='checkoutProduct_title' >{title}</p>
                <p className='checkoutProduct_price' >
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span className="yellow-star">&#9733;</span>
                        ))}
                </div>
                {!hideButton && (
                <button className='checkoutProduct_button' onClick={removeFromBasket}>Remove from Basket</button>
                )}


            </div>
        </div>

    )
}

export default CheckoutProduct
