import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ServiceCardGrid from "./ServiceCardGrid";
import "./services.css";
import { FaCode, FaBullhorn, FaServer, FaSearch } from "react-icons/fa";


const servicesData = [
    {
        name: "Software Development",
        shortDescription: "Custom web, mobile, and enterprise solutions for seamless digital experiences.",
        points: [
            "Custom web and mobile applications",
            "Enterprise software solutions",
            "Agile development methodology",
            "Seamless integration and support"
        ],
        icon: <FaCode />
    },
    {
        name: "Social Media Marketing",
        shortDescription: "Boost brand presence with engaging content, targeted ads, and data-driven strategies.",
        points: [
            "Targeted advertising campaigns",
            "Content strategy & brand storytelling",
            "Performance tracking & analytics",
            "Social media growth strategies"
        ],
        icon: <FaBullhorn />
    },
    {
        name: "Web Hosting",
        shortDescription: "Secure, high-speed hosting with reliable uptime and dedicated support.",
        points: [
            "99.9% uptime guarantee",
            "Scalable hosting solutions",
            "DDoS protection and SSL security",
            "24/7 technical support"
        ],
        icon: <FaServer />
    },
    {
        name: "SEO",
        shortDescription: "Optimize your website to rank higher, drive traffic, and increase visibility.",
        points: [
            "On-page and off-page SEO",
            "Technical SEO optimization",
            "Link-building strategies",
            "Keyword research and analysis"
        ],
        icon: <FaSearch />
    }
];

const Services = () => {
    return (
        <section className="services-section colored-bg" id="services">
            <div className="servicesContainer container">
                <div className="services-header">
                    <h2>Our Services</h2>
                    <a className="view-all-btn" href="#">
                        View all
                        <span className="icon">
                            <IoIosArrowRoundForward />
                        </span>
                    </a>
                </div>

                {/* Service Cards Grid */}
                <ServiceCardGrid services={servicesData} />
            </div>
        </section>
    );
};

export default Services;
