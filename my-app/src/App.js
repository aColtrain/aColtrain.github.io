import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import Home from './pages/HomePage';
import About from './pages/About';

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer /> 
    </div>
  )
}

export default App