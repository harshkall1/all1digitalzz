import React, { useEffect } from 'react'
import error from '../assets/404.png'
import { Link } from 'react-router-dom'
const Error = () => {

        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  return (
    <section>
        <div className="err-bx container">
            <img src={error} className='errorimg' alt="" />

                <p>Page Not Found</p>
            <Link to={"/"} className='btn primary-button'>
                Back to Home
            </Link>
        </div>
    </section>
  )
}

export default Error