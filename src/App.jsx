import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart, Home, Product } from './pages'
import Navbars from './common/Navbars'
import Footer from './common/Footer'
import Checkout from './components/Checkout'

const App = () => {
  return (
    <div>
      <Router>
        <Navbars/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App