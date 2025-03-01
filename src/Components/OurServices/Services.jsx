import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCode, FaBullhorn, FaServer, FaSearch } from "react-icons/fa";

import Servicesmodal from "./Servicesmodal";

import "./services.css";


const servicesData = [
    {
        id: 1,
        name: "Software Development",
        shortDescription: "Custom web, mobile, and enterprise solutions for seamless digital experiences.",
        longDescription: "We provide cutting-edge software solutions, including web applications, mobile app development, and enterprise-level platforms. Our development process ensures efficiency, scalability, and security to meet your business needs.",
        points: [
            "Custom web and mobile applications",
            "Enterprise software solutions",
            "Agile development methodology",
            "Seamless integration and support"
        ],
        icon: <FaCode />
    },
    {
        id: 2,
        name: "Social Media Marketing",
        shortDescription: "Boost brand presence with engaging content, targeted ads, and data-driven strategies.",
        longDescription: "Our social media marketing strategies are designed to enhance brand visibility and engagement. We create compelling content, run data-driven advertising campaigns, and optimize social media channels to maximize reach and conversions.",
        points: [
            "Targeted advertising campaigns",
            "Content strategy & brand storytelling",
            "Performance tracking & analytics",
            "Social media growth strategies"
        ],
        icon: <FaBullhorn />
    },
    {
        id: 3,
        name: "Web Hosting",
        shortDescription: "Secure, high-speed hosting with reliable uptime and dedicated support.",
        longDescription: "We offer premium web hosting services with top-tier security, excellent uptime, and dedicated support. Whether you need shared hosting, VPS, or cloud hosting, our services ensure fast and reliable website performance.",
        points: [
            "99.9% uptime guarantee",
            "Scalable hosting solutions",
            "DDoS protection and SSL security",
            "24/7 technical support"
        ],
        icon: <FaServer />
    },
    {
        id: 4,
        name: "SEO",
        shortDescription: "Optimize your website to rank higher, drive traffic, and increase visibility.",
        longDescription: "Our SEO services improve your website's search engine rankings, driving organic traffic and increasing visibility. From keyword optimization to technical SEO, we ensure your website reaches the right audience.",
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
    const [selectedService, setSelectedService] = useState(null);
    const [modal, setModal] = useState(false)

    const handleModel = (service) => {
        if (modal && selectedService?.id === service.id) {
            setSelectedService(null);
            setModal(false);
        } else {
            setSelectedService(service);
            setModal(true);
        }
    };

    return (
        <>
            <section className="services-section" id="services">
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

                    <div className="service-cards">
                        {servicesData.map((service) => (
                            <div
                                className="service-card"
                                key={service.id}
                                onClick={() => handleModel(service)}
                                data-aos="fade-up"
                            >
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <div className="card-content">
                                    <h3>{service.name}</h3>
                                    <p>{service.shortDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
            {modal && selectedService && (
                <Servicesmodal
                    service={selectedService}
                    onClose={() => {
                        setSelectedService(null);
                        setModal(false);
                    }}
                />
            )}

        </>
    );
};

export default Services;
