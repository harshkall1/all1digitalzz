import React, { useEffect } from 'react'
import Customherosection from '../Components/Custom-herosection/Customherosection'
import Contactus from '../Components/Contactus/Contactus'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <Customherosection title={"Contact Us"} />

            <Contactus />

        </>
    )
}

export default Contact