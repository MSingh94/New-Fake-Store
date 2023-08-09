import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


import Homepage from './pages/homepage/Homepage'
import ProductDetails from './pages/product-details/ProductDetails'
import Contact from './pages/Contact/Contact'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import CartContextProvider from './contexts/CartContext'
import Header from './Components/header/header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
      <BrowserRouter>
      <CartContextProvider>
        <Header/>

        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/details/:productId" element={<ProductDetails />}/>
          <Route path="/cart" element={<ShoppingCart />}/>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/Contact' element={<Contact />} />
        </Routes>

        <Footer />
      </CartContextProvider>
      </BrowserRouter>
  )
}
export default App 