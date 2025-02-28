import React, { useEffect } from 'react'
import Herosection from '../Components/HeroSection/Herosection'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Services from '../Components/OurServices/Services'
import Chooseus from '../Components/ChooseUs/Chooseus'
import Milestones from '../Components/ChooseUs/Milestones'
import Testimonials from '../Components/testimonials/Testimonials'
import Newsletter from '../Components/Newsletter/Newsletter'
import Contactus from '../Components/Contactus/Contactus'

const Home = () => {

    useEffect(() => {
        Aos.init();
    })
    return (

        <>
            <Herosection />
            <Services />
            <Chooseus />
            <Milestones />
            <Testimonials />
            <Contactus/>
            <Newsletter />

        </>

    )
}

export default Home