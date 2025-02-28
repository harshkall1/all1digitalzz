import { useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import Footer from './Components/footer/Footer'
import Topbar from './Components/topbar/Topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Topbar />
      <Header />

      <Home />

      <Footer />
    </>
  )
}

export default App
