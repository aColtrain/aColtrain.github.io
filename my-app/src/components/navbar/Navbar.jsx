import React, { useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { RiMenuLine, RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="port__navbar">
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact">  Contact </Link>
      <Link to="/projects"> Project </Link>
    </div>
    // <>
    //   <Nav>
    //     <NavMenu>
    //       <NavLink>

    //       </NavLink>
    //     </NavMenu>
    //   </Nav>
    // </>
  )
}

export default Navbar

// //BEM --> Block Element Modifer
// const Menu = () => (
//   <>
//   <p><a href="#home">Home</a></p>
//   <p><a href="#projects">Projects</a></p>
//   <p><a href="#about">About</a></p>
//   <p><a href="#contact">Contact</a></p>
//   <p><a href="#resume">Resume</a></p>
//   </>
// )

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   return (
//     <div className="gpt3__navbar">
//       <div className="gpt3__navbar-links">
//         <div className="gpt3__navbar-links_logo">
//           <img src={logo} alt="logo" />
//         </div>
//         <div className="gpt3__navbar-links_container">
//           <Menu />
//         </div>
//       </div>
//       <div className="gpt3__navbar-contact">
//         <p>Contact in</p>
//         <button type="button">Contact</button>
//       </div>
//       <div className="gpt3__navbar-menu">
//         {toggleMenu
//           ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/> 
//           : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/> 
//         }
//         {toggleMenu && (
//         <div className="gpt3__navbar-menu_container scale-up-center">
//           <div className="gpt3__navbar-menu_container-links">
//             <Menu />
//             <div className="gpt3__navbar-menu_container-links-contact">
//               <p>Contact in</p>
//               <button type="button">Contact</button>
//             </div>
//           </div>
//         </div>
//         )}
//       </div>
//     </div>
//   ) 
// };
// export default Navbar