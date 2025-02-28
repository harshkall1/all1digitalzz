import React, { useState } from 'react'
import './header.css'

import logo from '../../assets/logo.png'
import { IoClose } from "react-icons/io5";

import { CgMenuRight } from "react-icons/cg";
const Header = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <header>
                <div className="innerHeader container">
                    <div className="logoarea">
                        <span className="logo">
                        </span>

                        <img src={logo} height={70} alt="" />
                    </div>

                    <div className="menuIcon" onClickCapture={() => setShowNav(!showNav)}>
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                    </div>

                    <nav className={showNav ? 'shownav' : ''}>


                        <IoClose className='close-nav-icon' onClickCapture={() => setShowNav(!showNav)} />



                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">contact us</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header