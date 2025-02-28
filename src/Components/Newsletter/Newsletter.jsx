import "./newsletter.css";
import { FaEnvelope } from "react-icons/fa";
import newsletter from '../../assets/newsletter.png'

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="container newsletter-container">
                <div className="newsletter-image">
                    <img src={newsletter} alt="Newsletter" />
                </div>
                <div className="newsletter-content">
                    <h2>Subscribe to our Newsletter!</h2>
                    <p>Subscribe to our newsletter and stay updated with the latest trends, exclusive offers, and exciting news delivered straight to your inbox!</p>
                    <div className="newsletter-form">
                        <div className="input-wrapper">
                            <FaEnvelope className="email-icon" />
                            <input type="email" placeholder="Your email" />
                        </div>
                        <button className="btn primary-button">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
