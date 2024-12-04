import React from 'react';
import { Link } from "react-router-dom";
import './projectThumbnails.css';
import comcastThumbnail from '../../assets/Comcast_MiniMart_Thumbnail.png';
import etdThumbnail from '../../assets/ETD_Website_Thumbnail.png';
import deltaThumbnail from '../../assets/Delta_Discrepancy_Thumbnail.png';
import deltaMeal from '../../assets/Delta_Meal_Thumbnail.png';
import deltaSkyPro from '../../assets/Delta_SkyPro_Thumbnail.png';
import deltaDemo from '../../assets/Delta_Demo_Thumbnail.png';
import imaBirds from '../../assets/IMA_Birds_Thumbnail.png';
import imaMedia from '../../assets/IMA_Media_Thumbnail.png';
import { Project } from '../../components';


function ProjectThumbnails() {
  return (
    <div className="section__padding">
        <div className="portfolio__project-layout">
            <div className="flex-item">
                <Link to="/comcast#MiniMart">
                    <Project
                    projectImg={comcastThumbnail}
                    projectName="MiniMart"
                    projectDescription="Redesign of a eCommerce marketplace for small-medium sized businesses"
                    projectTags="Case Study | UX/UI Web Design | User Research" />    
                </Link>
            </div>
            <div className="flex-item">
            <   Link to="/delta#SkyPro">
                    <Project
                    projectImg={deltaSkyPro}
                    projectName="SkyPro UI"
                    projectDescription="Redesign of a air line reporting platform"
                    projectTags="UX/UI App Design" />    
                </Link>
            </div> 
        </div>
        <div className="portfolio__project-layout">
            <div className="flex-item">
                <Link to="/delta#Meal">
                    <Project
                    projectImg={deltaMeal}
                    projectName="Meal Inventory & Manifesting"
                    projectDescription="Redesign of a air line reporting platform"
                    projectTags="UX/UI App Design" />    
                </Link>
            </div>
            <div className="flex-item">
                <Link to="/media-arts#Bird">
                    <Project
                    projectImg={imaBirds}
                    projectName="Bird Information Cards"
                    projectDescription="Redesign of a air line reporting platform"
                    projectTags="UX/UI App Design" />    
                </Link>
            </div> 
        </div>
        <div className="portfolio__project-layout">
            <div className="flex-item">
                <Link to="/delta#Video">
                    <Project
                    projectImg={deltaDemo}
                    projectName="Video Demos"
                    projectDescription="Redesign of a air line reporting platform"
                    projectTags="UX/UI App Design" />    
                </Link>
            </div>
            <div className="flex-item">
                <Link to="/media-arts#MediaBridge">
                    <Project
                    projectImg={imaMedia}
                    projectName="Media Bridge"
                    projectDescription="Redesign of a air line reporting platform"
                    projectTags="UX/UI App Design" />    
                </Link>
            </div> 
        </div>
    </div>
    /* <Project 
    projectImg={etdThumbnail}
    projectName="Effective Team Dynamics"
    projectDescription="Redesign of a eCommerce marketplace for small-medium sized businesses"
    projectTags="Web Redesign | Brand Identity" />    */
  )
}

export default ProjectThumbnails