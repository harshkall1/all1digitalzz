import React, { useState } from 'react'
import './header.css'

import logo from '../../assets/logo.png'
import { IoClose } from "react-icons/io5";

import { CgMenuRight } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';


const Header = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <header>
                <div className="innerHeader container">
                    <div className="logoarea">
                        <Link to="/">
                            <img src={logo} height={70} alt="" />
                        </Link>
                    </div>

                    <div className="menuIcon" onClickCapture={() => setShowNav(!showNav)}>
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                    </div>

                    <nav className={showNav ? 'shownav' : ''}>


                        <IoClose className='close-nav-icon' onClickCapture={() => setShowNav(!showNav)} />



                        <NavLink to="/" onClickCapture={() => setShowNav(!showNav)}>Home</NavLink>
                        <NavLink to="/about" onClickCapture={() => setShowNav(!showNav)}>About</NavLink>
                        <NavLink to="/services" onClickCapture={() => setShowNav(!showNav)}>Services</NavLink>
                        <NavLink to="/faqs" onClickCapture={() => setShowNav(!showNav)}>FAQs</NavLink>
                        <NavLink to="/contact" onClickCapture={() => setShowNav(!showNav)}>contact us</NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header