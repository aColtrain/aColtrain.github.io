import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
        <h1> Footer </h1>
        <div className="portfolio__footer section__padding">
          <nav className="portfolio__footer-content page__width section__padding"> 
            <ul>
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/about"> About </Link></li>
              <li><Link to="/contact">  Contact </Link></li>
              <li><Link to="/projects"> Project </Link></li>
            </ul>
          </nav>
          
          <p className="copyright">© Coltrain 2024</p>
        </div>

        
        
    </div>
    
  )
}

export default Footer