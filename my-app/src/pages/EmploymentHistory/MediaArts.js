import React from 'react'
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
        <div className="header">
            <Employment 
            logo={ logoMA }
            logoDescription="Media Arts logo" 
            positionDescription={
                <>
                As a university project manager, I managed the Interdisiplinary Media Arts, IMA, Center its projects. I managed multiple
                regional and national grant applications, website content, interior decoration, graphics and event coordination.
                </>
            } 
            jobTitle="University Project Manager"
            teamSize="9"
            impact1="Team Impact"
            impact1List=""
            impact2="Products Impact"
            impact2List=""
            />
        </div>
        <div className="MediaBridge"> 
            <div className="section__padding">
                <ArticleHead
                title="Sustainability Media Bridge Project"
                description={
                    <>
                    The media bridge is a screen located on the underside of a bridge connecting 2 of the Georgia Tech Libraries. For 
                    this project, the goal was to work with a biology professor to create a project on sustainability on the media bridge.
                    
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
        </div>

        <div className="BirdGraphics">
            <div className="section__padding">
                <ArticleHead
                title="Bird Information Cards & Poster"
                description={
                    <>

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
                    
                    </>
                }
                images={
                    <>
                    <img src={ birdPoster } alt="" />
                    </>
                }
                />
            </div>

        </div>

        <div className="Events">
            <div className="section__padding">
                <ArticleHead
                title="LED Card Events"
                description={
                    <>
                    </>
                }
                images={
                    <>
                    <img src={ eventPoster } alt="" />
                    </>
                }
                />
            </div>

            
        </div>
    </div>
  )
}

export default MediaArts