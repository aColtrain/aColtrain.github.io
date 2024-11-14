import React, { useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { RiMenuLine, RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/logo_coltrain_multicolored.png';
import './navbar.css';
import { Link } from "react-router-dom";
import resumePDF from '../../assets/Coltrain_Design_Resume.pdf'

//BEM --> Block Element Modifer
const Menu = () => (
  <>
  <Link to="/"> Home </Link>
  <Link to="/about"> About </Link>
  <Link to="/contact">  Contact </Link>
  <Link to="/projects"> Project </Link>
  <Link to="/delta"> Delta </Link>
  <Link to="/comcast"> Comcast </Link>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="port__navbar page__width">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Link to="/"><p> Home </p></Link>
          <Link to="/about"><p> About </p></Link>
          
          <Link to="/projects"><p> Projects </p></Link>
          <Link to="/delta"><p> Delta </p></Link>
          <Link to="/comcast"> <p>Comcast </p> </Link>
        </div>
      </div>
      <div className="gpt3__navbar-contact">
        <Link to="/contact"><p> Contact </p></Link>
        <a href={ resumePDF } target="_blank">
          <button type="button"> Resume </button>
        </a>
        
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/> 
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/> 
        }
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact">  Contact </Link>
            <Link to="/projects"> Project </Link>
            <Link to="/delta"> Delta </Link>
            <div className="gpt3__navbar-menu_container-links-contact">
              <p>Contact in</p>
              <button type="button">Contact</button>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  ) 
};
export default Navbar