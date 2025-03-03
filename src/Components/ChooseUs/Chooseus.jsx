import React from 'react'
import './chooseus.css'
import chooseus from '../../assets/chooseus.png'
const Chooseus = () => {
    return (
        <>

            <section className='chooseus'>

                <div className="container innerChooseus">
                    <h2>Why to choose us</h2>
                    <div className="option-grid">
                        <div className="option op1" data-aos="fade-right"
                        >
                            <h3>100+ projects</h3>
                            <p>
                            With 120+ completed projects and 50+ active clients, we deliver tailored solutions across industries.
                            </p>
                        </div>

                        <div className="option op2" data-aos="fade-left"
                            data-aos-delay="400">
                            <h3>Support</h3>
              
                            <p>We resolve 1,200+ tickets monthly with a 95% satisfaction rate, ensuring quick and efficient support.</p>
                        </div>


                        <div className="option op3" data-aos="fade-right"
                            data-aos-delay="500">
                            <h3>Development</h3>
                            <p>
                            We focus on delivering high-quality solutions with a streamlined approach, ensuring efficiency and growth.
                            </p>
                        </div>


                        <div className="option op4" data-aos="fade-left"
                            data-aos-delay="650" >
                            <h3>Effective</h3>
                            <p>Our solutions enhance productivity and strengthen client relationships through smart automation.</p>
                        </div>

                        <img src={chooseus} alt="why to choose us " />
                    </div>
                </div>


            </section>

        </>
    )
}

export default Chooseus