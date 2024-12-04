import React from 'react';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA } from '../../components';
import logoMA from '../../assets/logos/logo_media_arts_large.png';
import birdPoster from '../../assets/mediaArts/Bird_Poster.png';
import grackleFront from '../../assets/mediaArts/Boat_Tailed_Grackle_Front.jpg';
import grackleBack from '../../assets/mediaArts/Boat_Tailed_Grackle_Back.jpg';
import birds from '../../assets/mediaArts/ma_birds.png';
import bridge from '../../assets/mediaArts/Media_Bridge_Project.png';
import bridgeLocation from '../../assets/mediaArts/ma_bridgeLocation.png'
import eventPoster from '../../assets/mediaArts/ma_eventPoster.png';

function MediaArts() {
  return (
    <div>
        <ScrollToHashElement/>
        <div className="sidenav">
            <div>
                <a href="#MediaBridge"><p>Media Bridge</p></a>
                <a href="#Bird"><p>Bird Cards</p></a>
                <a href="#LED"><p>LED Card Events</p></a>
            </div>
        </div>
        <div className="header">
            <Employment 
            logo={ logoMA }
            logoDescription="Media Arts logo" 
            positionDescription={
                <>
                As a university project manager, I managed the Interdisiplinary Media Arts, IMA, Center its projects. I managed multiple
                regional and national grant applications, website content, interior decoration, graphic design, and event coordination.
                </>
            } 
            jobTitle="University Project Manager"
            teamSize={
                <>
                9
                <a id="MediaBridge" />
                </>
            }
            />
        </div>
        <div className="MediaBridge"> 
            <div className="section__padding">
                <ArticleHead
                title="Sustainability Media Bridge Project"
                description={
                    <>
                    The media bridge is a screen located on the underside of a bridge connecting 2 of the Georgia Tech Libraries. For 
                    this project, the goal was to work with a biology professor to create an interactive project on sustainability displayed 
                    on the media bridge. 
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
            <div className="section__padding" id="Bird">
                <CTA 
                title= "Skills Developed"
                description= "Collaboration, Design Solutions, Interactive Design, Grant Writing"
                />
            </div>
        </div>

        <div className="BirdGraphics">
            <div className="section__padding">
                <ArticleHead
                title="Bird Information Cards & Poster"
                description={
                    <>
                    These info cards were designed to be table settings at a museum bird event. I was given reference images of the birds. I 
                    removed the background and took color samples of the original image to create a background that would induce the viewer to focus on the bird and the text.

                    </>
                }
                images={
                    <>
                    <img src={ birds } alt="" />
                    {/* <img src={ birdPoster } alt="" /> */}
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

        </div>

        <div className="Events">
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

            
        </div>
    </div>
  )
}

export default MediaArts