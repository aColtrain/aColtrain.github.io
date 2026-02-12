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
import gcoThumb from '../../assets/GCO_Thumbnail.png';
import tntsThumb from '../../assets/TNTS_Thumbnail.png';
import bluSafeThumb from '../../assets/BluSafe_Thumbnail.png';
import zogranMediaThumb from '../../assets/ZogranMedia_Thumbnail.png';

import zogranmedia from '../../assets/logos/logo_zogranmedia_small.png';
import { Project } from '../../components';


function ProjectThumbnails() {
  return (
    <div className="section__padding">
        <div className="portfolio__project-layout">
            <div className="flex-item getclimbingoutside">
                <Link to="/get-climbing-outside">
                    <Project
                    projectImg={gcoThumb}
                    projectName="Get Climbing Outside"
                    projectDescription="Marketing Website Redesign"
                    projectTags="UX/UI Web Design | Hubspot | Branding"/>    
                </Link>
            </div> 
            <div className="flex-item truenorththerapy">
                <Link to="/true-north-therapy">
                    <Project
                    projectImg={tntsThumb}
                    projectName="True North Therapy"
                    projectDescription="Marketing Website Redesign"
                    projectTags="UX/UI Web Design | Godaddy | Branding | Logo Design"/>    
                </Link>
            </div>

        </div>
        <div className="portfolio__project-layout">
            <div className="flex-item zogranmedia">
                <Link to="/zogran-media">
                    <Project
                    projectImg={zogranMediaThumb}
                    projectName="Zogran Media"
                    projectDescription="Marketing Website Redesign"
                    projectTags="UX/UI Web Design | Squarespace | Branding"/>    
                </Link>
            </div> 
            <div className="flex-item blusafe">
                <Link to="/blusafe">
                    <Project
                    projectImg={bluSafeThumb}
                    projectName="BluSafe"
                    projectDescription="Marketing Website Redesign"
                    projectTags="UX/UI Web Design | Squarespace | Branding"/>    
                </Link>
            </div> 
        </div>
        <div className="portfolio__project-layout">
            <div className="flex-item skyproui">
                <Link to="/skypro-ui">
                    <Project
                    projectImg={deltaSkyPro}
                    projectName="SkyPro UI"
                    projectDescription="SkyPro UI is an extensive design library containing guidelines and reusable components."
                    projectTags=" Design Library | Software Migration | Figma " />    
                </Link>
            </div> 
            <div className="flex-item graphics">
                <Link to="/graphics">
                    <Project
                    projectImg={imaBirds}
                    projectName="Graphic Design & Motion Design"
                    projectDescription={
                        <>
                        Collection of designs.
                        </>
                    }
                    projectTags="Graphic Design | Printing | Figma" />    
                </Link>
            </div> 
        </div>
        <div className="portfolio__project-layout">
            <div className="flex-item mediaArts">
                <Link to="/media-arts">
                    <Project
                    projectImg={imaMedia}
                    projectName="Media Bridge"
                    projectDescription={
                        <>
                        Interdisciplinary project between the Media Arts Center and a Georgia Tech Biology Professor to make an interactive
                        project on a large-scale digital screen.
                        </>
                    }
                    projectTags="Graphic Design | Interaction Design | Figma | p5.js" />    
                </Link>
            </div> 
            
            <div className="flex-item minimart">
                <Link to="/minimart">
                    <Project
                    projectImg={comcastThumbnail}
                    projectName="MiniMart"
                    projectDescription="Redesign of a eCommerce marketplace for small-medium sized businesses."
                    projectTags="UX/UI Web Design | User Research | Prototyping" />    
                </Link>
            </div>
        </div>
        <div className="portfolio__project-layout">
            <div className="flex-item meals">
                <Link to="/meal-manifesting">
                    <Project
                    projectImg={deltaMeal}
                    projectName="Streamlining In-Flight Meal Selection"
                    projectDescription={
                        <>
                        A system that allows flight attendants to receive customer pre-order information, log meal orders, and keep track of meal 
                        inventory in flight.
                        </>
                    }
                    projectTags="UX/UI App Design | Figma" />    
                </Link>
            </div>
            <div className="flex-item video">
                <Link to="/video-demo">
                    <Project
                    projectImg={deltaDemo}
                    projectName="Video Demos"
                    projectDescription={
                        <>
                        An initiative to have short form video content for flight attendants to know what resources they 
                        have in their devices for managing a flight.
                        </>
                    }
                    projectTags="Video Production | Video Editing | iMovie" />    
                </Link>
            </div>
        </div>
        {/* <div className="portfolio__project-layout">
            <div className="flex-item meals">
                <Link to="/zogran-media">
                    <Project
                    projectImg={deltaMeal}
                    projectName="Meal Inventory & Manifesting"
                    projectDescription={
                        <>
                        A system that allows flight attendants to receive customer pre-order information, log meal orders, and keep track of meal 
                        inventory in flight.
                        </>
                    }
                    projectTags="UX/UI App Design | Figma" />    
                </Link>
            </div>
            <div className="flex-item video">
                
            </div>
        </div> */}
    </div>
    /* <Project 
    projectImg={etdThumbnail}
    projectName="Effective Team Dynamics"
    projectDescription="Redesign of a eCommerce marketplace for small-medium sized businesses"
    projectTags="Web Redesign | Brand Identity" />    */
  )
}

export default ProjectThumbnails