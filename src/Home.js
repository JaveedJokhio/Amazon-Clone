import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg' alt='banner' />
                <div className='home_row'>

                    <Product title="Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio" price={29.99} image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SX466_.jpg" rating={5} />
                   
                    <Product title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band" price={20} image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg" rating={4} />
              

                </div>
                <div className='home_row'>
                <Product title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray" price={270} image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX466_.jpg" rating={4} />

                <Product title="Fitbit Charge 5 Advanced Health & Fitness Tracker with Built-in GPS" price={119} image="https://m.media-amazon.com/images/I/61YXnbbNrgL._AC_SX569_.jpg" rating={5} />

                <Product title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB" price={299} image="https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_SX425_.jpg" rating={5} />


                </div>
                <div className='home_row'>
                <Product title="COSRX Snail Mucin 96% Power Repairing Essence 3.38 fl.oz, 100ml, Hydrating Serum for Face with Snail Secretion Filtrate for Dull and Damaged Skin, Not Tested on Animals, No Parabens, Korean Skincare" price={15.80} image="https://m.media-amazon.com/images/I/51IF5kpotSL._SX425_.jpg" rating={5} />


                </div>

            </div>
        </div>
    )
}

export default Home
