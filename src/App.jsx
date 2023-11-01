import React from 'react'
import Products from './components/products/Products.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Pizza from './components/restaurant/Pizza.jsx'
import Home from './components/home/Home.jsx'
import NotFound from './components/pageNotFound/NotFound.jsx'
import Footer from './components/footer/Footer.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/restaurant' element={<Pizza />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}
