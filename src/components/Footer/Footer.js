import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer py-4'>
            <div className='w-75 mx-auto d-flex footer-cover'>
                <div className="w-75 footer-left">
                    <div className='d-flex display-res'>
                    <ul >
                        <li>Contact us</li>
                        <li>Lollum on Themeforest</li>
                        <li>Contact</li>
                        <li>Purchase</li>
                        <li>About The Hotel</li>
                        <li>Place Order</li>
                    </ul>
                    <ul >
                        <li>About Drone World</li>
                        <li>Themeforest</li>
                        <li>Contact us</li>
                        <li>orders</li>
                        <li>Contact</li>
                    </ul>
                    <ul >
                        <li>Contact us</li>
                        <li>Lollum on Themeforest</li>
                        <li>Contact</li>
                        <li>Purchase</li>
                        <li>About The Hotel</li>
                        <li>About us</li>
                    </ul>
                    </div>
                </div>
                <div className="w-25 footer-right text-center">
                    <h2 className='footer-title'>Drone World</h2>
                    <h6 className='footer-des'>We provides all the best drones of the world . We always try to make our satifaction from our cutomers</h6>
                    <p>&copy; ALL RIGHTS RESERVED BY RH</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;