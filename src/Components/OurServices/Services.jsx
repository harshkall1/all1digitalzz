import React from 'react'
import './services.css'


import { IoIosArrowRoundForward } from "react-icons/io";

const Services = () => {
    return (

        <>
            <section className='services-section'>
                <div className="servicesContainer container">
                    <div className="services-header">
                        <h2>Our Services</h2>


                        <a className='view-all-btn' href="#">
                            View all
                            <span className='icon'>
                                <IoIosArrowRoundForward />
                            </span>
                        </a>
                    </div>

                    <div
                        className="service-cards"

                    >
                        <div className="service-card"
                            data-aos="fade-up"

                        >
                            <div className="service-icon">
                                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>

                            <div className="card-content">
                                <h3>Software Development</h3>
                                <p>We create custom web, mobile, and enterprise solutions for seamless digital experiences.</p>
                            </div>
                        </div>

                        <div className="service-card" data-aos="fade-up">
                            <div className="service-icon">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                            </div>

                            <div className="card-content">
                                <h3>Social Media marketing</h3>
                                <p>We grow your brand with engaging content, targeted ads, and data-driven strategies.</p>
                            </div>
                        </div>

                        <div className="service-card" data-aos="fade-up">
                            <div className="service-icon">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 21H5C4.06812 21 3.60218 21 3.23463 20.8478C2.74458 20.6448 2.35523 20.2554 2.15224 19.7654C2 19.3978 2 18.9319 2 18C2 17.0681 2 16.6022 2.15224 16.2346C2.35523 15.7446 2.74458 15.3552 3.23463 15.1522C3.60218 15 4.06812 15 5 15H19C19.9319 15 20.3978 15 20.7654 15.1522C21.2554 15.3552 21.6448 15.7446 21.8478 16.2346C22 16.6022 22 17.0681 22 18C22 18.9319 22 19.3978 21.8478 19.7654C21.6448 20.2554 21.2554 20.6448 20.7654 20.8478C20.3978 21 19.9319 21 19 21H18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 12C2 11.0681 2 10.6022 2.15224 10.2346C2.35523 9.74458 2.74458 9.35523 3.23463 9.15224C3.60218 9 4.06812 9 5 9H19C19.9319 9 20.3978 9 20.7654 9.15224C21.2554 9.35523 21.6448 9.74458 21.8478 10.2346C22 10.6022 22 11.0681 22 12C22 12.9319 22 13.3978 21.8478 13.7654C21.6448 14.2554 21.2554 14.6448 20.7654 14.8478C20.3978 15 19.9319 15 19 15H5C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12Z" stroke="#000000" stroke-width="1.5"></path> <path d="M10 3H19C19.9319 3 20.3978 3 20.7654 3.15224C21.2554 3.35523 21.6448 3.74458 21.8478 4.23463C22 4.60218 22 5.06812 22 6C22 6.93188 22 7.39782 21.8478 7.76537C21.6448 8.25542 21.2554 8.64477 20.7654 8.84776C20.3978 9 19.9319 9 19 9H5C4.06812 9 3.60218 9 3.23463 8.84776C2.74458 8.64477 2.35523 8.25542 2.15224 7.76537C2 7.39782 2 6.93188 2 6C2 5.06812 2 4.60218 2.15224 4.23463C2.35523 3.74458 2.74458 3.35523 3.23463 3.15224C3.60218 3 4.06812 3 5 3H6" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="5" cy="12" r="1" fill="#000000"></circle> <circle cx="5" cy="6" r="1" fill="#000000"></circle> <circle cx="5" cy="18" r="1" fill="#000000"></circle> </g></svg>
                            </div>

                            <div className="card-content">
                                <h3>Web Hosting</h3>
                                <p>We offer secure, high-speed hosting with reliable uptime and support.</p>
                            </div>
                        </div>


                        <div className="service-card" data-aos="fade-up">
                            <div className="service-icon">
                                <svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.293,18.707a1,1,0,0,1,0-1.414l3-3a1,1,0,0,1,1.262-.125l2.318,1.545,2.42-2.42a1,1,0,0,1,1.414,1.414l-3,3a1,1,0,0,1-1.262.125L6.127,16.287l-2.42,2.42a1,1,0,0,1-1.414,0ZM22,3V21a1,1,0,0,1-1,1H3a1,1,0,0,1,0-2H20V8H4v4a1,1,0,0,1-2,0V3A1,1,0,0,1,3,2H21A1,1,0,0,1,22,3ZM4,6H20V4H4Zm10.707,6.707,1-1a1,1,0,0,0-1.414-1.414l-1,1a1,1,0,1,0,1.414,1.414Z"></path></g></svg>
                            </div>

                            <div className="card-content">
                                <h3>SEO</h3>
                                <p>We optimize your website to rank higher, drive traffic, and boost visibility.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services