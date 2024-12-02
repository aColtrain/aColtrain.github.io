import React from 'react';
import './contactme.css';

import contactImage from '../../assets/contact_image.png'

function Contact() {
  return (
    <div className="contact section__padding">
      <div className="contact-image">
        <img src={ contactImage } alt="" />
      </div>
      <div className="contact_content">
        <h1 className="gradient__text"> Let's Connect! </h1>
        <p>words words word please connect!</p>
      </div>
    </div>
  )
}

export default Contact