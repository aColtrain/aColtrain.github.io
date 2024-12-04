import React from 'react';
import './skills.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Design',
    text: 'Figma, Canva, Drupal, Axure RP, Adobe XD, Adobe Illustrator, Adobe Photoshop, Miro, User Experience Design, User Interface Design, User Research, Web Design, App Design, 2D Animation'
  },
  {
    title: 'Devlopment',
    text: 'React, HTML, CSS, Drupal, WordPress'
  },
  {
    title: 'Code',
    text: 'Java, JavaFx, JavaScript, C Programming, Python, Processing (processing.py & p5.js), MATLab'
  },
  {
    title: 'Video',
    text: 'Adobe After Effects, DaVinci Resolve, iMovie, Procreate'
  },
  {
    title: '3D',
    text: 'Unity, Maya, A-Frame, Solidworks, 3D Animation'
  },
  {
    title: 'Soft Skills',
    text: 'Communication, Empathy, Problem Solving, Adaptability, Attention to Detail, Critical Thinking'
  }
]

const Skills = () => {
  return (
    <div className="gpt3__features section__padding" id="about">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Skills & Languages</h1>
        <p>Interaction Design + Media Software Developement</p>
      </div>
      
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (  
          <Feature title={item.title} text={item.text} key={ item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Skills