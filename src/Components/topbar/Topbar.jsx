import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./TopBar.css"; 

const Topbar = () => {
    return (
        <div className="top-bar">
            <div className="container topbar-container">

                {/* Contact Info */}
                <div className="contact-info">
                    <a href="mailto:info@example.com">info@example.com</a>
                    <span>|</span>
                    <a href="tel:+1234567890">+1 234 567 890</a>
                </div>

                {/* Social Icons */}
                <div className="social-icons-top">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
