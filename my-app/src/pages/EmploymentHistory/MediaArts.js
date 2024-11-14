import React from 'react'
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA } from '../../components';
import logoMA from '../../assets/logos/logo_media_arts_large.png';
import birdPoster from '../../assets/mediaArts/Bird_Poster.png';
import grackleFront from '../../assets/mediaArts/Boat_Tailed_Grackle_Front.jpg';
import grackleBack from '../../assets/mediaArts/Boat_Tailed_Grackle_Back.jpg';
import birds from '../../assets/mediaArts/ma_birds.png';


function MediaArts() {
  return (
    <div>
        <div className="header">
            <Employment 
            logo={ logoMA }
            logoDescription="Media Arts logo" 
            positionDescription={
                <>
                As a university project manager, I managed the Interdisiplinary Media Arts Center its projects. I managed multiple 
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
                title="Sustainablilty Media Bridge Project"
                description={
                    <>
                    </>
                }
                images={
                    <>
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
                    <img src={ birdPoster } alt="" />
                    </>
                }
                imageCaption={""}
                />
            </div>

        </div>
    </div>
  )
}

export default MediaArts