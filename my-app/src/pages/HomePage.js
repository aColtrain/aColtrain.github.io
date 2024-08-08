import React from 'react';
import { Footer, Blog, Possibility, Skills, WhatGPT3, Header, ProjectThumbnails } from '../containers';
import { Project } from '../components';
import comcastThumbnail from '../assets/Comcast_MiniMart_Thumbnail1.png';

// const projectTile = [
//   // {
//   // ProjectImg: '', 
//   // ProjectName: '', 
//   // ProjectDescription: '',
//   // ProjectTags: '',
//   // }
//   {
//     ProjectImg: '', 
//     ProjectName: 'eCommerce Market', 
//     ProjectDescription: 'Redesign of a eCommerce Market Place for small-medium sized businesses',
//     ProjectTags: 'UX/UI Design UX/UI Research',
    
//   },
//   {
//     ProjectImg: '', 
//     ProjectName: '', 
//     ProjectDescription: '',
//     ProjectTags: '',
    
//   }
  
// ]
const HomePage = () => {
  return (
    <div>
      <Header />



      {/* <h1>Possibility</h1> */}
      {/* <Possibility /> */}
      {/* <h1>Skills</h1> */}
      <Skills />
      {/* <h1>Whatgpt3</h1> */}
      {/* <WhatGPT3 /> */}
      <ProjectThumbnails />
      
      <div className="portfolio__project-layout section__padding">
        <div className="portfolio__tile-left">
          <Project 
          projectImg={comcastThumbnail}
          projectName="MiniMart"
          projectDescription="Redesign of a eCommerce marketplace for small-medium sized businesses"
          projectTags="UX/UI Design | User Research" />
        </div>
        <div className="portfolio__tile-right">
          <Project 
          projectImg={comcastThumbnail}
          projectName="MiniMart"
          projectDescription="Redesign of a eCommerce marketplace for small-medium sized businesses"
          projectTags="Design" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
