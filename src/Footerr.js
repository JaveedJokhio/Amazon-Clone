import React from 'react'
import './Footer.css'

function Footer() {
    function scrollToTop() {
        // Scroll the page to the top with smooth behavior
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      

    return (
        <div className='footer'>
            <div className='footer-btn-btn'>
                <p className='footer-btn' onClick={scrollToTop}>Back to top</p>
            </div>
            <div className='rest-footer'>
                <footer class="amazon-footer">
                    <div class="container">
                        <div class="footer-links">
                            <div class="footer-section">
                                <h3>Get to Know Us</h3>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Press Releases</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h3>Make Money with Us</h3>
                                <ul>
                                    <li><a href="#">Sell on Amazon</a></li>
                                    <li><a href="#">Sell under Amazon Accelerator</a></li>
                                    <li><a href="#">Amazon Associates</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h3>Make Money with Us</h3>
                                <ul>
                                    <li><a href="#">Sell on Amazon</a></li>
                                    <li><a href="#">Sell under Amazon Accelerator</a></li>
                                    <li><a href="#">Amazon Associates</a></li>
                                </ul>
                            </div>
                            

                        </div>
                        <div class="footer-bottom">
                            <p>&copy; 2023 Developed by Javeed Jokhio All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer
