import React, { useState } from 'react';
import './Careerlist.css';
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

import { IoLocationSharp } from "react-icons/io5";

// Modal Component
const JobModal = ({ job, closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={closeModal}> 
                    <RxCross2 className={'colored-icon'} size={40} />
                </button>
                <h4 className='modal-title'>{job.title}</h4>
                <p className='modal-location'>
                    <IoLocationSharp /> {job.location}
                </p>
                <p className='modal-description'>{job.description}</p>
                <ul className='modal-points'>
                    {job.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <button className='btn primary-button'>Apply Now</button>
            </div>
        </div>
    );
};

const CareerList = () => {
    const [modalJob, setModalJob] = useState(null);

    const jobData = [
        {
            title: "Web Developer",
            location: "Mayapuri / New Delhi",
            description: "We are looking for a skilled Web Developer to build and maintain functional web applications.",
            points: [
                "Develop and maintain web applications.",
                "Collaborate with designers to implement UI/UX designs.",
                "Write clean, scalable, and efficient code.",
                "Test and debug applications.",
                "Ensure website performance and security."
            ]
        },
        {
            title: "Web Designer",
            location: "Mayapuri / New Delhi",
            description: "Looking for a creative Web Designer to design and create visually appealing websites.",
            points: [
                "Design visually attractive and user-friendly websites.",
                "Collaborate with developers to ensure seamless integration.",
                "Ensure mobile and cross-browser compatibility.",
                "Create mockups and prototypes for new designs.",
                "Stay updated on the latest web design trends and technologies."
            ]
        },
        {
            title: "Graphic Designer",
            location: "Mayapuri / New Delhi",
            description: "We are looking for a creative Graphic Designer to create engaging graphics for digital and print media.",
            points: [
                "Design logos, brochures, banners, and other marketing materials.",
                "Create engaging social media graphics.",
                "Work with marketing and product teams to create visuals for campaigns.",
                "Ensure brand consistency across all designs.",
                "Stay updated on design trends and software tools."
            ]
        },
        {
            title: "Content Creator",
            location: "Mayapuri / New Delhi",
            description: "We are seeking a talented Content Creator to produce engaging and informative content for various platforms.",
            points: [
                "Create content for blogs, social media, and websites.",
                "Work with teams to develop content strategies.",
                "Research and write articles, video scripts, and social media posts.",
                "Ensure content is optimized for SEO and user engagement.",
                "Monitor content performance and make improvements."
            ]
        },
        {
            title: "Video Editor",
            location: "Mayapuri / New Delhi",
            description: "Looking for a skilled Video Editor to produce high-quality videos for various media channels.",
            points: [
                "Edit video content for social media, websites, and ads.",
                "Work with the creative team to ensure high-quality production.",
                "Add music, graphics, and special effects to enhance videos.",
                "Ensure videos are aligned with brand messaging and style.",
                "Collaborate with content creators to develop video ideas."
            ]
        },
        {
            title: "HR",
            location: "Mayapuri / New Delhi",
            description: "We are looking for an experienced HR to manage hiring processes and employee relations.",
            points: [
                "Manage recruitment processes and ensure timely hiring.",
                "Oversee employee benefits and compensation.",
                "Foster a positive work environment and company culture.",
                "Resolve employee conflicts and maintain records.",
                "Ensure compliance with labor laws and regulations."
            ]
        }
    ];

    const openModal = (job) => {
        setModalJob(job);
    };

    const closeModal = () => {
        setModalJob(null);
    };

    return (
        <>
            <section className='career-section'>
                <div className="careerlist container">
                    <h3><PiSuitcaseSimpleFill size={35} className='colored-icon' /> Open Job Positions</h3>

                    <div className="jobGrid">
                        {jobData.map((job, index) => (
                            <div key={index} className="jobcard colored-bg" onClick={() => openModal(job)}>
                                <div className="left-slide">
                                    <h4 className='job-title'>{job.title}</h4>
                                    <p className='job-location'>
                                        <IoLocationSharp /> {job.location}
                                    </p>
                                </div>
                                <div className="right-section">
                                    <button className='btn primary-button'>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {modalJob && <JobModal job={modalJob} closeModal={closeModal} />}
        </>
    );
};

export default CareerList;
