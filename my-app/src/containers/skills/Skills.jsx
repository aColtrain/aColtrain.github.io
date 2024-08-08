import React from 'react';
import './skills.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Design',
    text: 'Figma, Canva, Drupal, Axure RP, Adobe XD, Adobe Illustrator, Adobe PhotoShop, '
  },
  {
    title: 'Devlopment',
    text: 'React, HTML, CSS, Drupal, WordPress'
  },
  {
    title: 'Code',
    text: 'Java, JavaFx, JavaScript, C Programming, Python, Processing, MATLab'
  },
  {
    title: 'Video',
    text: 'Adobe After Effects, DaVinci Resolve, iMovie'
  },
  {
    title: '3D',
    text: 'Unity, Maya, A-Frame, Solidworks'
  }
]

const Skills = () => {
  return (
    <div className="gpt3__features section__padding" id="about">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Software Skills & Languages</h1>
        <p>Request a nice bed</p>
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