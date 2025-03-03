import React, { useEffect } from 'react'
import Customherosection from '../Components/Custom-herosection/Customherosection'
import ServiceCardGrid from '../Components/OurServices/ServiceCardGrid'
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
    },
    {
        name: "UI/UX Design",
        shortDescription: "Create visually appealing, user-friendly interfaces for web and mobile apps.",
        points: [
            "User-centric design approach",
            "Wireframing & prototyping",
            "Responsive and interactive designs",
            "Brand identity and visual storytelling"
        ],
        icon: <FaCode />
    },
    {
        name: "Content Writing",
        shortDescription: "Engaging, SEO-optimized content for blogs, websites, and marketing materials.",
        points: [
            "Blog and article writing",
            "SEO-friendly content strategy",
            "Copywriting for ads and sales pages",
            "Editing and proofreading services"
        ],
        icon: <FaBullhorn />
    },
    {
        name: "E-commerce Solutions",
        shortDescription: "Build and scale online stores with secure and user-friendly features.",
        points: [
            "Custom e-commerce website development",
            "Payment gateway integration",
            "Inventory and order management systems",
            "SEO and conversion optimization"
        ],
        icon: <FaServer />
    },
    {
        name: "Cybersecurity Services",
        shortDescription: "Protect your digital assets with advanced security solutions.",
        points: [
            "Network and application security",
            "Data encryption and compliance",
            "Penetration testing",
            "24/7 security monitoring"
        ],
        icon: <FaSearch />
    }
];


const Services = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Customherosection title="Our Services" />

            <section>
                <div className="container">

                    <ServiceCardGrid services={servicesData} />
                </div>
            </section>

        </>
    )
}

export default Services