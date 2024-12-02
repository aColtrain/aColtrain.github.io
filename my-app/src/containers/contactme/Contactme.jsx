import React from 'react';
import './contactme.css';
import linkedin from '../../assets/logo_linkedin_small_blue.png';
import email from '../../assets/icon_email_blue.png';

import contactImage from '../../assets/contact_image.png';

function Contact() {
  return (
    <div className="contact section__padding">
      <div className="contact__image">
        <img src={ contactImage } alt="" />
      </div>
      <div className="contact__content">
        
        <p>
        "Networking is not just about connecting people. It's about connecting people with people, people with ideas, and people with opportunities." 
        </p>
        <h1 className="gradient__text"> Let's Connect! </h1>
        <div className="contact__logo">          
          <a href="https://www.linkedin.com/in/coltrain/">
            <img src={ linkedin } alt="linkedin logo" /> 
            <p>linkedin.com/in/coltrain</p>
          </a>
          <a href="mailto:atlascoltrain@gmail.com">
            <img src={ email } alt="email icon" />
            <p>atlascoltrain@gmail.com</p>
          </a>
          
        </div>
        
      </div>
    </div>
  )
}

export default Contact