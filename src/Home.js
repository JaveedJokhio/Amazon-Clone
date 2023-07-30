import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg' alt='banner' />
                <div className='home_row'>

                    <Product id='1' title="Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio" price={29.99} image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SX466_.jpg" rating={5} />
                   
                    <Product id='2' title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band" price={20} image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg" rating={4} />
              

                </div>
                <div className='home_row'>
                <Product id='7' 
                title="Apple MacBook Air (13-inch Retina display, 1.6GHz dual-core Intel Core i5, 128GB) - Gold (Renewed)" 
                price={550} 
                image="https://m.media-amazon.com/images/I/71thf1SYnGL._AC_SL1500_.jpg" 
                rating={5} />

                <Product id='8' title="ZAGG InvisibleShield Ultra Clear – Compatible with Apple Watch Ultra, Watch Size: 49mm Face - Film Screen Protector" price={14} image="https://m.media-amazon.com/images/I/71KHrMHx9eL._AC_SX679_.jpg" rating={5} />

                <Product id='9' 
                title="ZAGG InvisibleShield Glass+ Screen Protector for Apple iPhone 13/ 13 Pro - Impact & Scratch Protection, Easy to Install" price={10} 
                image="https://m.media-amazon.com/images/I/61nYfhjNGKL._AC_SX679_.jpg" rating={5} />


                </div>
                <div className='home_row'>
                <Product id='3' title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray" price={270} image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX466_.jpg" rating={4} />

                <Product id='4' title="Fitbit Charge 5 Advanced Health & Fitness Tracker with Built-in GPS" price={119} image="https://m.media-amazon.com/images/I/61YXnbbNrgL._AC_SX569_.jpg" rating={5} />

                <Product id='5' 
                title="The Ultimate Sketchbook for Creative Kids - Notebook for Drawing, Writing,120 Pages," price={10} 
                image="https://m.media-amazon.com/images/I/511cN5spUbL._SX384_BO1,204,203,200_.jpg" rating={4} />
                <Product id='10' title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB" price={299} image="https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_SX425_.jpg" rating={5} />


                </div>
                <div className='home_row'>
                <Product id='11' 
                title="JYDQM Beach Pants Set Men's Hawaiian Collection Beach Style Suit Collar Print Short Sleeves" price={260} 
                image="https://m.media-amazon.com/images/I/719kT+2k0EL._AC_SY300_SX300_.jpg" rating={4} />

                <Product id='12' title="Under Armour boys Short Sleeve Tee and Short Set, Lightweight and Breathable" price={24} image="https://m.media-amazon.com/images/I/71Vpr1LmkuL._AC_UX425_.jpg" rating={5} />

                <Product id='13' 
                title="PS by Paul Smith Mens Reg Fit T-Shirt Broken Board" price={95} 
                image="https://m.media-amazon.com/images/I/616szjO-80L._AC_UX522_.jpg" rating={4} />

                <Product id='14' title="PS by Paul Smith Tall Size Mens Casual Fit Jacket" price={395} image="https://m.media-amazon.com/images/I/71aKIeFdtML._AC_UY500_.jpg" rating={5} />


                </div>
                <div className='home_row'>
                <Product id='6' title="COSRX Snail Mucin 96% Power Repairing Essence 3.38 fl.oz, 100ml, Hydrating Serum for Face with Snail Secretion Filtrate for Dull and Damaged Skin, Not Tested on Animals, No Parabens, Korean Skincare" price={15.80} image="https://m.media-amazon.com/images/I/51IF5kpotSL._SX425_.jpg" rating={5} />


                </div>

            </div>
        </div>
    )
}

export default Home
