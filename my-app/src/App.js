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
import SkyProUI from './pages/EmploymentHistory/SkyproUI';
import MiniMart from './pages/EmploymentHistory/MiniMart';
import MediaArts from './pages/EmploymentHistory/MediaArts';
import Graphics from './pages/EmploymentHistory/Graphics';
import MealManifesting from './pages/EmploymentHistory/MealManifesting';
import VideoDemo from './pages/EmploymentHistory/VideoDemo';
import ZogranMedia from './pages/EmploymentHistory/ZogranMedia';
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    
    <Router>
      <ScrollToTop />
      <Navbar />    
      <div className="page__width"> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skypro-ui" element={<SkyProUI />} />
        <Route path="/minimart" element={<MiniMart />} />
        <Route path="/media-arts" element={<MediaArts />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/meal-manifesting" element={<MealManifesting />} />
        <Route path="/video-demo" element={<VideoDemo />} />
        <Route path="/zogran-media" element={<ZogranMedia />} />
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