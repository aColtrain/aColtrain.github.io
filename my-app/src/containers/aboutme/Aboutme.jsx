import React from 'react'
import './aboutme.css'
import winter from '../../assets/About_winter.JPG';
import comcast from '../../assets/logos/logo_comcast_small.png';
import delta from '../../assets/logos/logo_delta_small.png';
import etd from '../../assets/logos/logo_etd_small.png';
import gtoit from '../../assets/logos/logo_gtoit_small.png';
import mediaarts from '../../assets/logos/logo_media_arts_small.png';
import { Feature } from '../../components';
import { Footer, Blog, Possibility, Skills, WhatGPT3, Header, ProjectThumbnails } from '../../containers';

const Aboutme = () => {
  return (
    <div className="">
        <div className="section__padding about__landing-content">
          <h1 className="gradient__text">Hey, I'm still Coltrain!</h1>
          <p>UX/UI designer with an emphasis in inclusion and accessiblily. </p>
          <div className="about__landing-button">
            <button>Linkedin</button>
            <button>Resume</button>
          </div>
        </div>
        
        <div className="section__padding about__employment">
          <img src={mediaarts} />
          <img src={delta} />
          <img src={comcast} />
          <img src={gtoit} />
          <img src={etd} />
        </div>
        <div className="section__padding about__education">
          <div>
            <h1 className="gradient__text">Education</h1>
          </div>
          <div>
            <Feature title='Georgia Institute of Technology' text='B.S. Computational Media Interaction Design & Media' />
            <Feature title='University of Limerick' text='Creative Media and Interaction Design' />
          </div>
        </div>
        <WhatGPT3 />
        <Possibility />
        

        
        

        
        <p>I love a good problem to solve. When im not at my computer, I am rock climbing, doing jigsaw puzzles, or hanging out with my dog winter! Life time learner. Recently took a class to learn how to setup and clean anchors for climbing outdoors and how to play mahjong.</p>
        <p>I am currently working on improving my web development skills.  </p>
        <div className="about__winter">
          <img width="50%" src={winter} />
        </div>
       
    </div>
  )
}

export default Aboutme