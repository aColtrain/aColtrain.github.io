import React from 'react';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';
import logoMA from '../../assets/logos/logo_media_arts_large.png';
import birdPoster from '../../assets/mediaArts/Bird_Poster.png';
import grackleFront from '../../assets/mediaArts/Boat_Tailed_Grackle_Front.jpg';
import grackleBack from '../../assets/mediaArts/Boat_Tailed_Grackle_Back.jpg';
import birds from '../../assets/mediaArts/ma_birds.png';
import bridge from '../../assets/mediaArts/Media_Bridge_Project.png';
import bridgeLocation from '../../assets/mediaArts/ma_bridgeLocation.png'
import eventPoster from '../../assets/mediaArts/ma_eventPoster.png';
import { ScrollRestoration } from "react-router-dom";

function MediaArts() {
  return (
    <div>
        {/* <ScrollToHashElement/>
        <div className="sidenav">
            <div>
                <a href="#MediaBridge"><p>Media Bridge</p></a>
                <a href="#Bird"><p>Bird Cards</p></a>
                <a href="#LED"><p>LED Card Events</p></a>
            </div>
        </div> */}
  
        <div className="header">
            <Employment 
            name={"Media Bridge"}
            logo={ logoMA }
            logoDescription="Media Arts logo" 
            positionDescription={
                <>
                The media bridge is a screen located on the underside of a bridge connecting 2 of the Georgia Tech Libraries. For 
                this project, the goal was to work with a biology professor to create an interactive project on sustainability to be displayed 
                on the media bridge. The final iteration of the project was designed to understand the demographic of its viewers. This project 
                received 2 grants from Sustainability Next and iPat resulting in $45,000 in funding.
                </>
            } 
            employer={"Interdisciplinary Media Arts Center"}
            jobTitle="University Project Manager"
            deliverables="Interactive Sustainibility Design, Grant Proposals"
            tools="p5.js, Figma"
            teamSize={
                <>
                9
                <a id="MediaBridge" />
                </>
            }
            />
        </div>
        <div className="section__padding">
          <Scope
          title1={
          <>
          </>
          }
          text1={
            <>
            <ul>
              <li>Collaborate with people in different fields</li>
              <li>Interactive design</li>

            </ul>
            
            </>
          }
          title2={
            <>
            </>
            }
          text2={
            <>
            <ul>
              <li>University students walking to class</li>
              <li>Age: 18-24</li>
            </ul>
            </>
          }
          title3={
            <>
            </>
            }
            text3={
            <>
            <ul>
              <li>Make it omnidirectional</li>
             
            </ul>
            </>
          }
          />          
        </div>
        <div className="MediaBridge"> 
            <div className="section__padding">
                <ArticleR
                title="Sustainability Media Bridge Project"
                description={
                    <>
                    The image of the design may look funny on the webpage but it is designed to be read from above and approached by all 
                    angles. You can see the  text is oriented inward. The bold colors and thick lines of comic styles is perfect to draw in a
                    constant moving audience.
                    </>
                }
                images={
                    <>
                    <img src={ bridge } alt="" />
                    <img src={ bridgeLocation } alt="" />
                    </>
                }
                imageCaption={""}
                />

            </div>
            {/* <div className="section__padding">
                <ArticleL
                title={"Initial Approach"}
                />
            </div> */}
            <div className="section__padding" id="Bird">
                <CTA 
                title= "Skills Developed"
                description= "Collaboration, Design Solutions, Interactive Design, Grant Writing"
                />
            </div>
        </div>

        {/* <div className="BirdGraphics">
            <div className="section__padding">
                <ArticleHead
                title="Bird Information Cards & Poster"
                description={
                    <>
                    These info cards were designed to be table settings at a museum bird event. I was given reference images of the birds. I 
                    removed the background and took color samples of the original image to create a background that would make the bird the 
                    focal point of the card. For the back of the cards, I kept it simple to keep the discriptions legible. I tied the front of the
                    card to the back by adding the feather of the bird as a detail above the text.

                    </>
                }
                images={
                    <>
                    <img src={ birds } alt="" />
                    
                    </>
                }
                imageCaption={""}
                />
            </div>
            
            <div className="section__padding">
                <ArticleR
                title="Poster"
                description={
                    <>
                    I designed a poster to accompany the info cards. For this poster, I needed to communicate the instructions of the project for participants while maintaining a consistent design aesthetic. I incorporated all of the bird imagery from the info cards and a gradient background meant to simulate the birds perched in trees or flying in the sky. I also used the gradient to keep the design in line with the style of the info cards' color backgrounds. The goal of this design was to keep its elements simple enough that they wouldn't distract from the instructions, but also to keep them in harmony with the look and feel of the info cards.
                    </>
                }
                images={
                    <>
                    <img src={ birdPoster } alt="" />
                    </>
                }
                />
            </div>
            <div className="section__padding" id="LED">
                <CTA 
                title= "Skills Developed"
                description= "Graphic Design, Printing"
                />
            </div>

        </div> */}

        {/* <div className="Events">
            <div className="section__padding">
                <ArticleHead
                title="LED Card Events"
                description={
                    <>
                    The center hosted multiple LED card making workshops. These events taught
                    attendees how to create simple circuits with a button and LED light embeded into a holiday greeting card. Attendees were also given art
                    supplies to decorate their cards to their choosing. 
                    My role included designing flyers and placing them in the high traffic areas, purchasing circuit and art supplies, purchasing 
                    snacks, running the event, and troubleshooting any issues with the circuits. Attendance ranged from 25-35 people.

                    </>
                }
                images={
                    <>
                    <img src={ eventPoster } alt="" />
                    </>
                }
                />
            </div>
            <div className="section__padding">
                <CTA 
                title= "Skills Developed"
                description= "Event Planning, Project Management, Graphic Design, Teaching, Communication"
                />
            </div>

            
        </div> */}
    </div>
  )
}

export default MediaArts