import React, { useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { RiMenuLine, RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/coltrainlogo.png';
import './navbar.css';
import { Link } from "react-router-dom";

//BEM --> Block Element Modifer
const Menu = () => (
  <>
  <Link to="/"> Home </Link>
  <Link to="/about"> About </Link>
  <Link to="/contact">  Contact </Link>
  <Link to="/projects"> Project </Link>
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
        </div>
      </div>
      <div className="gpt3__navbar-contact">
        <Link to="/contact"><p> Contact </p></Link>
        <button type="button"> Resume </button>
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