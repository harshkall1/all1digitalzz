import React from "react";
import "./Testimonials.css";
import { FaRegStar, FaStar } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        "name": "Emily Carter",
        "review": "The team provided an outstanding SEO strategy that significantly boosted our website traffic. Highly recommended!",
        "rating": 5
    },
    {
        "name": "John Doe",
        "review": "Excellent software development services! They delivered a seamless and high-performing web application ahead of schedule.",
        "rating": 5
    },
    {
        "name": "Sophia Williams",
        "review": "Their social media marketing strategies helped us gain a larger audience and improve engagement. Great results!",
        "rating": 4
    },
    {
        "name": "Michael Brown",
        "review": "Reliable web hosting with top-notch support. Our site has been running smoothly with zero downtime.",
        "rating": 5
    },
    {
        "name": "Emma Johnson",
        "review": "Professional and efficient team! Their SEO and marketing efforts helped our business grow significantly.",
        "rating": 5
    }
]
;

const Testimonials = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 894,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }


        ]
    };

    return (
        <section className="testimonials-section">
            <div className="container">

                <h2 className="section-title">What our clients say's</h2>
                <div className="testimonials-container">


                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-box">
                                <div className="testimonial-flex">

                                    <h3 className="client-name">{testimonial.name}</h3>
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            i < testimonial.rating ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star empty" />
                                        ))}
                                    </div>
                                    <p className="client-review">{testimonial.review}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>




                </div>
            </div>
        </section>
    );
};

export default Testimonials;
