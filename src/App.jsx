import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/header/Navbar"
import Home from "./pages/1.home/Home"
import Services from "./pages/2.services/Services"
import Portfolio from "./pages/3.portfolio/Portfolio"
import Contact from "./pages/4.contact/Contact"
import Footer from "./components/footer/Footer"



function App() {
  

  return (
    <div>
      <Router>  
        <Navbar />

        <Routes>  
        <Route exact path='/' element={<Home />} />
        <Route path='/services' element={ <Services />} />
        <Route path='/portfolio' element={ <Portfolio />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='*' element={ <Home />} />
        </Routes>

        <Footer />

      </Router>
    </div>
  )
}

export default App
