import React from 'react';
import './projectThumbnails.css';
import comcastThumbnail from '../assets/Comcast_MiniMart_Thumbnail1.png';
import { Project } from '../components';


function ProjectThumbnails() {
  return (
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
  )
}

export default ProjectThumbnails