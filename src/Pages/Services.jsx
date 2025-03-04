import React, { useEffect } from 'react'
import Customherosection from '../Components/Custom-herosection/Customherosection'
import ServiceCardGrid from '../Components/OurServices/ServiceCardGrid'
import { FaCode, FaBullhorn, FaServer, FaSearch } from "react-icons/fa";



const servicesData = [
    {
        name: "Software Development",
        shortDescription: "Custom web, mobile, and enterprise solutions for seamless digital experiences.",
        longDescription: "We specialize in crafting high-quality software solutions tailored to meet your business needs. Whether it's a web application, mobile app, or an enterprise-level system, our team follows agile methodologies to ensure a smooth development process. From initial planning and prototyping to deployment and maintenance, we provide end-to-end software development services with seamless integration and support.",
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
        longDescription: "Our social media marketing services help businesses grow their online presence through strategic content creation, targeted advertising, and data-driven insights. We focus on engaging audiences, building brand identity, and optimizing campaigns to maximize reach and conversions. Whether you need organic growth strategies or paid ad management, we tailor solutions to meet your goals.",
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
        longDescription: "Ensure your website remains fast, secure, and accessible with our reliable web hosting solutions. We offer scalable hosting plans, DDoS protection, SSL security, and round-the-clock technical support. Whether you're running a personal blog or a high-traffic business website, our hosting services provide the stability and performance you need.",
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
        longDescription: "Search engine optimization (SEO) is key to increasing online visibility and driving organic traffic to your website. Our SEO experts focus on both on-page and off-page optimization, technical SEO, and content-driven strategies. From keyword research to link building, we ensure your website ranks higher in search results, attracting more potential customers.",
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
        longDescription: "A well-designed user interface is crucial for providing an intuitive and enjoyable user experience. Our UI/UX designers create responsive, interactive, and visually appealing designs that enhance usability and brand identity. From wireframing and prototyping to final design implementation, we ensure a seamless and engaging experience for users.",
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
        longDescription: "High-quality content is essential for attracting and retaining audiences. Our content writing services include blog and article writing, copywriting for marketing campaigns, and SEO-friendly content strategies. We craft compelling narratives that align with your brand voice, enhance engagement, and improve search engine rankings.",
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
        longDescription: "Our e-commerce solutions empower businesses to create scalable, secure, and high-performing online stores. We provide custom development, payment gateway integration, inventory management, and SEO optimization to ensure seamless shopping experiences. Whether you're launching a new store or optimizing an existing one, we help you drive sales and conversions.",
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
        longDescription: "Cyber threats are evolving, and businesses need proactive security measures to safeguard their digital assets. Our cybersecurity services include network and application security, penetration testing, data encryption, and compliance solutions. We provide 24/7 monitoring and threat detection to ensure your business remains protected against cyber risks.",
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

            <section className='colored-bg'>
                <div className="container">

                    <ServiceCardGrid services={servicesData} />
                </div>
            </section>

        </>
    )
}

export default Services