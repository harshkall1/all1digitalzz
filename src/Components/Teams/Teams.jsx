import React from "react";
import Slider from "react-slick";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Teams.css"; // Custom CSS
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

// Import images
import maleAvatar from "../../assets/male-avator.png";
import femaleAvatar from "../../assets/female-avator.png";

const teamMembers = [

    {
        name: "Ananya",
        role: "HR Lead",
        image: femaleAvatar,
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },

    {
        name: "Shagun",
        role: "Admin",
        image: femaleAvatar,
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },

    {
        name: "Anupriya",
        role: "Web Designer",
        image: femaleAvatar,
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Harsh",
        role: "Web Designer",
        image: maleAvatar,
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },

    {
        name: "Varun Maurya",
        role: "Content Writer",
        image: maleAvatar,
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        name: "Saksham Gursahani",
        role: "Video Editor",
        image: maleAvatar,
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
];

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            <IoIosArrowDropleftCircle size={40} />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            <IoIosArrowDroprightCircle size={40} />
        </div>
    );
};

const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    prevArrow: null,
                    nextArrow: null,
                },
            },
        ],
    };

    return (
        <section className="team-section colored-bg">
            <div className="container">
                <h2 className="team-title">Our Team</h2>
                <Slider {...settings} className="team-slider">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <img
                                src={member.image}
                                alt={`${member.name} - ${member.role}`}
                                className="team-img"
                                loading="lazy"
                            />
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <div className="team-social">
                                {member.social.facebook && (
                                    <a href={member.social.facebook} className="social-icon">
                                        <FaFacebookF />
                                    </a>
                                )}
                                {member.social.twitter && (
                                    <a href={member.social.twitter} className="social-icon">
                                        <FaTwitter />
                                    </a>
                                )}
                                {member.social.linkedin && (
                                    <a href={member.social.linkedin} className="social-icon">
                                        <FaLinkedinIn />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Team;
