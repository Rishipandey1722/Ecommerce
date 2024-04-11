import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product'; // Import your main component
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import AddProduct from './components/Product/AddProduct';
import { useState } from 'react';
import Navbaar from './components/Header/Navbaar';
import ShopCategory from './components/ShopCategory';
import LoginSignup from './components/About/LoginSignup';
// import './components/Header/Navbaar.css'


function App() {

  const [cart, setCart] = useState([]); // Initialize cart state

  return (

    <Router>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mens" element={<ShopCategory category = "men"/>} />
        <Route path="/womens" element={<ShopCategory category = "women"/>} />
        <Route path="/kids" element={<ShopCategory category = "kid"/>} />

        <Route path="/login" element={<LoginSignup />} />


        <Route path="/add-product" element={<AddProduct/>} />

        <Route path="/view-cart" element={<Cart cart={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
