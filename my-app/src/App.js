import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Delta from './pages/EmploymentHistory/Delta'
import Comcast from './pages/EmploymentHistory/Comcast'
import MediaArts from './pages/EmploymentHistory/MediaArts'


const App = () => {
  return (
    
    <Router>
      <Navbar />    
      <div className="page__width"> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/delta" element={<Delta />} />
        <Route path="/comcast" element={<Comcast />} />
        <Route path="/media-arts" element={<MediaArts />} />
      </Routes>
      </div>
      <Footer />
    </Router>
    

    // <div className="App">
      
    //   {/* <Home />
    //   <About /> */}
    //   <Navbar />
    //   <Header />
    //   {/* <div className="gradient__bg">
    //     <Navbar />
    //     <Header />
    //   </div> */}
    //   <Brand />
    //   <WhatGPT3 />
    //   <Features />
    //   <Possibility />
    //   <CTA />
    //   <Blog />
    //   <Footer /> 
    // </div>
  );
}

export default App