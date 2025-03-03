import React, { useEffect } from 'react'
import Customherosection from '../Components/Custom-herosection/Customherosection'
import aboutimg from '../assets/aboutus.png'
import project from '../assets/project.png'
import feature from '../assets/features.png'
import { Link } from 'react-router-dom'
import Team from '../Components/Teams/Teams'
const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <Customherosection title={"About us"}></Customherosection>

            <section className='about-us-page'>
                <div className="container">
                    <div className="img-bx">
                        <img src={aboutimg} alt="" />
                    </div>
                    <div className="c-bx">
                        <div className="aboutus-page-conetent">
                        <h4>About us</h4>

                            <h2>
                                Who we are ?
                            </h2>

                            <p><strong>All1 Digitalz</strong> is a leading IT service provider based in <strong>Delhi, India</strong>. We specialize in a broad spectrum of IT services, including website development, software development, digital marketing, and more. Our experienced team of professionals is dedicated to helping our clients achieve their business objectives, no matter the scale. We understand the significance of leveraging the latest technologies and techniques to ensure our clients receive optimal results.</p>
                            <br />

                            <p>Our mission is to deliver outstanding customer service and high-quality solutions tailored to meet our clients' unique needs. We are committed to providing access to cutting-edge tools and technology, empowering our clients to maintain a competitive edge in the digital landscape. With our unwavering focus on excellence, <strong>All1 Digitalz</strong> stands as the ideal choice for IT services.</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className='about-us-page colored-bg'>
                <div className="container">

                    <div className="c-bx">
                        <div className="aboutus-page-conetent">
                            <h2>
                                Updated IT Technology provide by All1 Digitalz
                            </h2>
                            <p><strong>All1 Digitalz</strong> is a leading provider of updated IT technology solutions. We offer a wide range of services to meet all of our customers' needs, from cloud computing to data security. Our team of experienced IT professionals is dedicated to providing the latest technology and innovation to help our customers succeed in their businesses.</p>
                            <br />
                            <p>We understand the importance of staying up-to-date with the latest IT trends and advancements, and we work hard to provide our customers with the most advanced solutions available. Whether you are looking for a comprehensive IT solution or just need help with specific tasks, <strong>All1 Digitalz</strong> has the expertise and resources to meet your needs. We pride ourselves on delivering exceptional customer service and IT solutions tailored to your individual needs.</p>

                        </div>
                    </div>
                    <div className="img-bx">
                        <img src={project} alt="" />
                    </div>
                </div>
            </section>

            <section className="about-us-page ">
                <div className="container">
                    <div className="img-bx">
                        <img src={feature} alt="Features Illustration" />
                    </div>
                    <div className="c-bx">
                        <div className="aboutus-page-conetent">
                            <h4>Features</h4>
                            <h2>We Have Also Some Features That Provided by ALL1 DIgitalz</h2>
                            <p>
                                We have also some features that provided by ALL1 DIgitalz like web designing,
                                development, and many more. We have a team of highly skilled and experienced
                                professionals who are always ready to assist you in every step of the web
                                development process. We also offer a wide range of services like e-commerce
                                development, security, and maintenance. So, if you are looking for a reliable
                                and affordable web development company, then ALL1 DIgitalz is the right choice for you.
                            </p>
                            <ul>
                                <li>🚀 Freelancing Training Course</li>
                                <li>💡 Technological Consultation</li>
                                <li>🏢 Monthly Paid Workspace</li>
                                <li>🎓 IT Learning Institute</li>
                                <li>📈 Digital Marketing</li>
                            </ul>
                            <Link to={'/contact'}>
                                <button className="btn primary-button">Contact now</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>


            <Team/>

        </>
    )
}

export default About