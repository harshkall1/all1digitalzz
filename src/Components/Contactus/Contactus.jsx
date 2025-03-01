import React, { useState, useRef } from "react";
import "./contactus.css"; // Make sure to create and import the CSS file
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Loader from "./Loader";

const Contactus = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Start loading state
        setLoading(true);

        const serverid = "service_ewcts0c";
        const templateid = "template_za27e1a";
        const publickey = "rmriLuNeWPdtVhBVj";

        emailjs
            .sendForm(serverid, templateid, formRef.current, {
                publicKey: publickey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Reset the form
                    formRef.current.reset();
                    alert("Message sent successfully");
                },
                (error) => {
                    console.log('FAILED...', error);
                    alert("Something went wrong");
                }
            )
            .finally(() => {
                // Stop loading after email is sent or failed
                setLoading(false);
            });
    };

    return (
        <section id="contact-us" className="contact-section">
            <div className="container contact-wrapper">
                <div className="contact-form-container">
                    <form  ref={formRef} className="contact-form" onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="form_name"
                            placeholder="Name"
                            required
                            disabled={loading}
                        />
                        <input
                            type="email"
                            name="form_email"
                            placeholder="Email"
                            required
                            disabled={loading}
                        />
                        <input
                            type="tel"
                            name="form_phone"
                            placeholder="Phone number"
                            required

                            disabled={loading}
                        />
                        <textarea
                            name="message"
                            placeholder="Comment"
                            rows="4"
                            required
                            disabled={loading}
                        ></textarea>
                        <button type="submit" disabled={loading} className="primary-button">
                            {loading ? <Loader /> : "Send Message"}
                        </button>
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
