import React from 'react'
import './herosection.css'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        autoplaySpeed: 2000,         pauseOnHover: false, 
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
                    <div className="aboutus-bx" data-aos="fade-up" data-aos-duration="1000" >
                        <div>

                            <h2>Who we are?</h2>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque blandit sem. Vivamus facilisis neque ut vulputate venenatis. Cras et quam lectus. Phasellus lacus urna, dignissim nec lorem nec,  interdum posuere neque. Nullam auctor volutpat sapien, sed rhoncus odio lobortis vel.
                            </p>

                            <div className="about-ctas">
                                <button className='btn primary-button'>Contact Now</button>
                                <button className='btn secondary-button'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection