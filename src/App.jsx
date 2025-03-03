import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import Footer from './Components/footer/Footer'
import Topbar from './Components/topbar/Topbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './Pages/Services'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Error from './Pages/Error'
import Contactus from './Components/Contactus/Contactus'
import Contact from './Pages/Contact'
import About from './Pages/About'
import FAQ from './Pages/FAQ'

function App() {


  useEffect(() => {
    Aos.init();
  })

  return (
    <>


      <BrowserRouter>
        <Topbar />
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/faqs' element={<FAQ />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />

      </BrowserRouter>




    </>
  )
}

export default App
