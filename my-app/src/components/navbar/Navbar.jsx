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
  {/* <Link to="/projects"> Project </Link> */}
  <Link to="/delta"> Delta </Link>
  <Link to="/comcast"> Comcast </Link>
  <Link to="/media-arts">Media Arts</Link>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="page__width">
    <div className="port__navbar section__padding">
      <div className="gpt3__navbar-links ">
        <div className="gpt3__navbar-links_logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <Link to="/"><p> Home </p></Link>
          <Link to="/about"><p> About </p></Link>
          <Link to="/work"><p> Work </p></Link>
          {/* <p>UX UI Design</p>
          <p>Marketing</p>
          <Link to="/Graphics"><p> Graphic Design </p></Link> */}
          
          {/* <Link to="/contact"><p> Contact </p></Link> */}
          {/* <a href={ resumePDF } target="_blank"><p> Resume </p></a> */}
        </div>
      </div>
      <div className="gpt3__navbar-contact">        
        {/* <a href={ resumePDF } target="_blank">
          <button type="button"> Resume </button>
        </a> */}    
        <Link to="/contact"><button type="button"> Contact </button></Link>    
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)}/> 
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)}/> 
        }
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            
            <Link to="/media-arts">Media Arts</Link>
            {/* <Link to="/projects"> Project </Link> */}
            <Link to="/delta"> Delta </Link>
            <Link to="/comcast">  Comcast </Link>
            <div className="gpt3__navbar-menu_container-links-contact">
              
              <Link to="/contact"><button type="button"> Contact </button></Link>    
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
    </div>
  ) 
};
export default Navbar