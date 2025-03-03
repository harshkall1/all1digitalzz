import React from 'react'
import './herosection.css'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const slides = [
    {
        title: "All 1 Digitalz",
        description: "We provide the best digital solutions for your business growth.",
    },
    {
        title: "Innovate & Elevate",
        description: "Transforming ideas into digital success with cutting-edge solutions.",
    },
    {
        title: "Future-Ready Digital Solutions",
        description: "Embrace the future with our top-notch digital strategies and execution.",
    },
];

const Herosection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, pauseOnHover: false,
    };

    return (
        <>
            <div className="herosection">
                <div className="hero-overlay">
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index}>
                                <div data-aos="fade-up" data-aos-duration="1000" className="heroContent container">
                                    <div className="hero-flex">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>





            <div className="aboutus">
                <div className="container">
                    <div id='about' className="aboutus-bx" data-aos="fade-up" data-aos-duration="1000" >
                        <div >




                            <h2>Who we are?</h2>

                            <p>
                                We are a results-driven digital marketing agency dedicated to helping businesses grow in the digital landscape. Our team of experts specializes in SEO, social media marketing, content creation, PPC advertising, and data-driven strategies to enhance brand visibility and engagement. With a passion for innovation and a commitment to delivering measurable results, we create customized marketing solutions that drive traffic, generate leads, and maximize ROI.

                                Let us elevate your brand and turn your digital presence into a powerful business asset.
                            </p>

                            <div className="about-ctas about-bx-links">
                                <Link to="/contact">

                                    <button className='btn primary-button'>Contact Now</button>
                                </Link>
                                <Link to={'/about'}>
                                    <button className='btn secondary-button'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection