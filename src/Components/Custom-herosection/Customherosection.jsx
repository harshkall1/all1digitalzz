import React from 'react'
import './custom-hero.css'
const Customherosection = ({ title }) => {
    return (
        <div className='custom-hero'>
            <section className='custom-hero-overlay'>
                <div className="container">

                <h1>{title}</h1>
                </div>
            </section>


        </div>
    )
}

export default Customherosection