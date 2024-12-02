import React from 'react'
import './aboutme.css'
import { Link } from "react-router-dom";

import comcast from '../../assets/logos/logo_comcast_small.png';
import delta from '../../assets/logos/logo_delta_small.png';
import etd from '../../assets/logos/logo_etd_small.png';
import gtoit from '../../assets/logos/logo_gtoit_small.png';
import mediaarts from '../../assets/logos/logo_media_arts_small.png';
import { Feature } from '../../components';
import { Footer, Blog, Possibility, Skills, WhatGPT3, Header, ProjectThumbnails } from '../../containers';
import resumePDF from '../../assets/Coltrain_Design_Resume.pdf';
import avatar from '../../assets/ColtrainWinterAvatar.png';

const Menu = () => (
  <>
  <Link to="/"> Home </Link>
  <Link to="/about"> About </Link>
  <Link to="/contact">  Contact </Link>
  <Link to="/projects"> Project </Link>
  <Link to="/delta"> Delta </Link>
  <Link to="/comcast"> Comcast </Link>
  <Link to="/media-arts">Media Arts</Link>
  </>
)

const Aboutme = () => {
  return (
    <div className="">
      <div className="about__header section__padding">
        <div className="about__header-content">
          <h1 className="gradient__text">Hey, <br/> I'm still Coltrain!</h1>
          <p>UX/UI designer with an emphasis in inclusion and accessiblily. </p>
          <div className="about__landing-button">
            <a href="https://www.linkedin.com/in/coltrain/" target="_blank">
              <button>Linkedin</button>
            </a>
            <a href={ resumePDF } target="_blank">
              <button type="button"> Resume </button>
            </a>
          </div>
        </div>
        <div className="about__header-image">
          <img src={ avatar } alt="avatar" />
        </div>
      </div>
      <div className="section__padding about__employment">
        <Link to="/media-arts"><img src={mediaarts} /></Link>
        <Link to="/delta"><img src={delta} /></Link>
        <Link to="/comcast"><img src={comcast} /></Link>
        <img src={etd} />
        <img src={gtoit} />
      </div>
      {/* Beyond the work */}
      <Possibility /> 
      <div className="section__padding about__education">
        <div>
          <h1 className="gradient__text">Education</h1>
        </div>
        <div>
          <Feature title='Georgia Institute of Technology' text='B.S. Computational Media Interaction Design & Media' />
          <Feature title='University of Limerick' text='Creative Media and Interaction Design' />
        </div>
      </div>
        {/* What is compuational media */}
      <WhatGPT3 /> 
        
        
      {/* <p>I love a good problem to solve. When im not at my computer, I am rock climbing, doing jigsaw puzzles, or hanging out with my dog winter! Life time learner. Recently took a class to learn how to setup and clean anchors for climbing outdoors and how to play mahjong.</p>
      <p>I am currently working on improving my web development skills.  </p>
      */}
       
    </div>
  )
}

export default Aboutme