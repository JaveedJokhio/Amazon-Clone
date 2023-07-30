import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import axios from './axios'
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';





function Payment() {

  




    const navigate = useNavigate()


    const stripe = useStripe()
    const elements = useElements()

    const [{ basket, user }, dispatch] = useStateValue()

    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // generate special strip secret which allows us to  charge a customer
        const getCleintSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)

        }
        getCleintSecret();
    }, [basket])

    console.log("the secret is ", clientSecret)

    const handleSubmit = async (e) => {
        // strip code
        e.preventDefault();
        setProcessing(true)

        try {
            const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            });

            if (paymentIntent) {
                // Payment successful, save data to Firestore
                const orderRef = doc(db, 'users', user?.uid, 'orders', paymentIntent.id);
                await setDoc(orderRef, {
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                });

                setSucceeded(true);
                setError(null);
                setProcessing(false);

               

                dispatch({
                    type: 'EMPTY_BASKET'
                });

                navigate('/orders', { replace: true });

            } else {
                // Payment failed
                setError('Payment failed. Please try again.');
                setProcessing(false);
            }
        } catch (error) {
            // Handle the error if confirmation or saving to Firestore fails
            setError('Failed to process payment. Please try again.');
            setProcessing(false);
        }

    }
    const handleChange = (event) => {
        // here detect any changes & display error of card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")

    }

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout ({<Link to='/checkout'>{basket?.length} items</Link>}) </h1>
                {/* dilvery address */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>

                        <label>District:</label>
                        <input placeholder='District' className='inputs' />
                        <label>City:</label>
                        <input placeholder='City' className='inputs' />
                        <label>Address:</label>
                        <input placeholder='type address here' className='inputs' />

                    </div>

                </div>
                {/* Review Items */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {/* All products in basket */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>
                {/* payment method */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/* Here stripe will go */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment_PriceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Error */}
                            {error && <div>{error}</div>}

                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
