import React, { useEffect } from 'react'
import Herosection from '../Components/HeroSection/Herosection'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Services from '../Components/OurServices/Services'
import Chooseus from '../Components/ChooseUs/Chooseus'
import Milestones from '../Components/ChooseUs/Milestones'
import Testimonials from '../Components/testimonials/Testimonials'

const Home = () => {

    useEffect(() => {
        Aos.init();
    })
    return (

        <>
            <Herosection />
            <Services />
            <Chooseus/>
            <Milestones/>
            <Testimonials/>
        </>

    )
}

export default Home