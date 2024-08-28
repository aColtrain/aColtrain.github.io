import React from 'react';
import './projectThumbnails.css';
import comcastThumbnail from '../../assets/Comcast_MiniMart_Thumbnail.png';
import etdThumbnail from '../../assets/ETD_Website_Thumbnail.png';
import deltaThumbnail from "../../assets/Delta_Discrepancy_Thumbnail.png"
import { Project } from '../../components';


function ProjectThumbnails() {
  return (
    <div className="section__padding">
        <div className="portfolio__project-layout">
            <div className="flex-item">
                <Project
                projectImg={comcastThumbnail}
                projectName="MiniMart"
                projectDescription="Redesign of a eCommerce marketplace for small-medium sized businesses"
                projectTags="UX/UI Web Design | User Research" />    

            </div>
            <div className="flex-item">
                <Project 
                projectImg={etdThumbnail}
                projectName="Effective Team Dynamics"
                projectDescription="Redesign a research website about team building"
                projectTags="Web Redesign | Brand Identity" />   

            </div> 
        </div>
        <div className="portfolio__project-layout">
            <div className="flex-item">
                <Project
                projectImg={deltaThumbnail}
                projectName="Cabin Discrepancy"
                projectDescription="Redesign of a air line reporting platform"
                projectTags="UX/UI App Design" />    

            </div>
            <div className="flex-item">
                {/* <Project 
                projectImg={etdThumbnail}
                projectName="Effective Team Dynamics"
                projectDescription="Redesign of a eCommerce marketplace for small-medium sized businesses"
                projectTags="Web Redesign | Brand Identity" />    */}

            </div> 
        </div>
   
        
    </div>
    
    
    
  )
}

export default ProjectThumbnails