import React from 'react'
import './footer.css'

import logo from '../../assets/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
    <div className="footer-container">
        <div className="footer-grid">
            {/* Logo & Social Icons */}
            <div className="footer-column">
                <img src={logo} alt="logo" className="footer-logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi omnis ducimus.</p>
                <div className="social-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
            </div>

            {/* Useful Links */}
            <div className="footer-column">
                <h3>Useful Links</h3>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Contact Us</a>
            </div>

            {/* Services */}
            <div className="footer-column">
                <h3>Services</h3>
                <a href="">Web Development</a>
                <a href="">SEO Optimization</a>
                <a href="">Digital Marketing</a>
                <a href="">Branding</a>
            </div>

            {/* Address */}
            <div className="footer-column">
                <h3>Address</h3>
                <p>B-8, Block B, Mayapuri Industrial Area, Phase 1, New Delhi - 10064</p>
            </div>
        </div>

        {/* Full-Width Map */}
        <div className="footer-map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28013.72001157709!2d77.0420444!3d28.6383026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04eb5ddfb485%3A0x91f90b5707638fcf!2sMayapuri%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1740655966704!5m2!1sen!2sin" 
                className="map" allowFullScreen loading="lazy"></iframe>
        </div>
    </div>
</footer>


    );
};

export default Footer;
