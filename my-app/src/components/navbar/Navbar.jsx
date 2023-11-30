import React from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import './navbar.css';

//BEM --> Block Element Modifer

function Navbar() {
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3_navbar-links_logo">
            {/* <img src={logo} alt="logo" /> */}
          </div>

        </div>
    </div>
  )
}

export default Navbar