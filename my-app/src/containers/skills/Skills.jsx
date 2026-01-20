import React from 'react';
import './skills.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Design',
    text: 'Figma, Axure RP, Adobe XD, Adobe Illustrator, Adobe Photoshop, Web Design, App Design, User Research'
  },
  {
    title: 'Devlopment',
    text: 'React, HTML, CSS, CMS, Drupal, WordPress, Squarespace, Hubspot, Godaddy'
  },
  {
    title: 'SEO',
    text: 'Google Analytics'
  },
  // {
  //   title: 'Code',
  //   text: 'Java, Python, Processing (processing.py & p5.js), MATLab, JavaFx, JavaScript'
  // },
  // {
  //   title: 'Video',
  //   text: 'Adobe After Effects, DaVinci Resolve, iMovie, Procreate'
  // },
  // {
  //   title: '3D',
  //   text: 'Unity, Maya, A-Frame, Solidworks, 3D Animation'
  // },
  {
    title: 'Soft Skills',
    text: 'Communication,  Problem Solving, Adaptability, Critical Thinking, Empathy'
  }
]

const Skills = () => {
  return (
    <div>
      <div className="gpt3__features section__padding" id="about">
        <div className="gpt3__features-heading">
          <h1 className="gradient__text">Education</h1>
        </div>
        
        <div className="gpt3__features-container">
          <Feature title='Georgia Institute of Technology' text='B.S. Computational Media' />
          <Feature title='University of Limerick' text='Creative Media and Interaction Design' />
        </div>
      </div>
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
    </div>
    
  )
}

export default Skills