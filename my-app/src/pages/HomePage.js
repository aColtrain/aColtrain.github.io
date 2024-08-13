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
      
    </div>
  )
}

export default HomePage
