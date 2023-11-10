import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Register from './pages/register';
import About from './pages/about';
import SignIn from './pages/signin';
import ArtistGallery from './pages/artistGallery'; // Naming Convention of the elements must be CamelCase


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/products' element = {<Products />} />
        <Route path='/about' element = {<About />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/signin' element = {<SignIn />} />
        <Route path='/artist-gallery' element = {<ArtistGallery />} />
      </Routes>
    </Router>
  );
}

export default App;