import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";
import { Brand } from "../../components";
import inlogo from '../../assets/logo_linkedin_small_white.png';
import gitlogo from '../../assets/logo_github_small_white.png';
import emaillogo from '../../assets/icon_email.png';
import resumePDF from '../../assets/AtlasColtrain_Design_Figma_WebandMobile_4yrs_Resume.pdf'
const today = new Date();
const year = today.getFullYear();

function Footer() {
  return (
    <div className="background">
        <div className="portfolio__footer page__width">
        
          <nav className="portfolio__footer-content section__padding"> 
            <div>
              <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/about"> About </Link></li>
                <li><a href={ resumePDF } target="_blank">  Resume </a></li>
                <li><Link to="/contact">  Contact </Link></li>
                {/* <li><Link to="/projects"> Project </Link></li> */}
              </ul>
            </div>
            
            <div className="portfolio__footer-right"> 
              <div className="portfolio__footer-credits">
                <p> Designed in <a>Figma</a> and coded in <a>Visual Studio Code</a> by <a>Coltrain</a>. Built with <a>React.js</a> and <a>CSS</a>, deployed with <a>Github</a>. </p>
              </div>
              <div className="portfolio__footer-logos">
                <a href="https://www.linkedin.com/in/coltrain/" target="_blank">
                  <img src= { inlogo } alt="LinkedIn logo"></img>
                </a>
                <a href="https://github.com/aColtrain" target="_blank">
                  <img src= { gitlogo } alt="Github logo" />
                </a>
                <a href="mailto:atlascoltrain@gmail.com">
                  <img src= { emaillogo } alt="email" />
                </a>
              </div>
            </div>
          </nav>
          <p className="copyright">© Coltrain {year}</p>
        </div>

        
        
    </div>
    
  )
}

export default Footer