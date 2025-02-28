import React from "react";
import "./contactus.css"; // Make sure to create and import the CSS file
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Contactus = () => {
    return (
        <section className="contact-section">
        <div className="container contact-wrapper">
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone number" />
              <textarea name="message" placeholder="Comment" rows="4" required></textarea>
              <button type="submit" className=" primary-button">SEND MESSAGE</button>
            </form>
            <p className="captcha-info">
              This site is protected by reCAPTCHA and the Google 
              <a href="#"> Privacy Policy </a> and 
              <a href="#"> Terms of Service </a> apply.
            </p>
          </div>
  
          {/* Contact Info */}
          <div className="form-contact-info">
            <h2>We are here to help!</h2>
            <p>
              Let us know how we can best serve you. Use the contact form to email us 
              or select from the topics below that best fit your needs. 
              It's an honor to support you in your journey towards better health.
            </p>
  
            {/* Contact Details */}
            <div className="contact-details">
              <p><FaPhone className="contact-icon" /> <strong>Phone:</strong> +123 456 7890</p>
              <p><FaEnvelope className="contact-icon" /> <strong>Email:</strong> contact@yourdomain.com</p>
              <div className="social-icons form-social-icons">
                <a href="#" className="social-link"><FaFacebookF /></a>
                <a href="#" className="social-link"><FaTwitter /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
                <a href="#" className="social-link"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
};

export default Contactus;
