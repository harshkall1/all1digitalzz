import React from "react";
import "./Testimonials.css";
import { FaRegStar, FaStar } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Emily Carter",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit porta massa, ut lacinia.",
        rating: 4,
    },
    {
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit porta massa, ut lacinia.",
        rating: 5,
    },
    {
        name: "Emily Carter",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit porta massa, ut lacinia.",
        rating: 4,
    },
];

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
