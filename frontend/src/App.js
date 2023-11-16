import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home';
import Products from './pages/products';
import Register from './pages/register';
import About from './pages/about';
import ArtistGallery from './pages/artistGallery'; // Naming Convention of the elements must be CamelCase
import OrderForm from './pages/orderForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/products' element = {<Products />} />
        <Route path='/about' element = {<About />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/order-form' element = {<OrderForm />} />
        <Route path='/artist-gallery' element = {<ArtistGallery />} />
      </Routes>
    </Router>
  );
}

export default App;