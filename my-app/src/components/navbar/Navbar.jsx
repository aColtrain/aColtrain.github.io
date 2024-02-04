import React from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

//BEM --> Block Element Modifer

function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#home">Contact</a></p>
          <p><a href="#resume">Resume</a></p>
        </div>
      </div>
    </div>
  )
  
}

export default Navbar