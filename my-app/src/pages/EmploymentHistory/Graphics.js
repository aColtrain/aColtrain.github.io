import React from 'react'
import birdPoster from '../../assets/mediaArts/Bird_Poster.png';
import grackleFront from '../../assets/mediaArts/Boat_Tailed_Grackle_Front.jpg';
import grackleBack from '../../assets/mediaArts/Boat_Tailed_Grackle_Back.jpg';
import birds from '../../assets/mediaArts/ma_birds.png';
import bannerFinal from '../../assets/delta_banner_final.png';
import { ArticleHead, ArticleL, ArticleR, ArticleInfo, CTA, Scope, Employment } from '../../components';
import '../../components/employment/employment.css';

function Graphics() {
  return (
    <div>
        <div className="header employment__name section__padding">
            <h1 className="gradient__text">Graphics</h1>
        </div>
        <div className="">
            <div className="bird cards">
                <ArticleInfo
                title={"Bird Cards and Poster"}
                description={
                    <>
                    Table settings and an event poster was created for the Savannah Museum bird event. The work utilizes circles to
                    highlight the subject and create a focal point in the graphic.  
                    </>
                }
                category={"Graphic Design, Poster Design"}
                deliverables={"Information Cards, Poster"}
                imgs={
                    <>
                    <div><img src={birds}/></div>
                    <div><img src={birdPoster}/></div>
                    </>
                }
                />    
            </div>
            <div className="Delta Banner">
                <ArticleInfo
                title={"Engagement Banner"}
                description={
                    <>
                    Tabletop poster for engagement events
                    </>
                }
                category={"Graphic Design, Poster Design"}
                deliverables={"Interactive Poster"}
                imgs={
                    <>
                    <div><img src={bannerFinal}/></div>
                    
                    </>
                }
                />    
            </div>
            <div className="University Mascot">
                <ArticleInfo
                title={"University Mascot"}
                description={
                    <>
                    lorem ipsum
                    </>
                }
                category={"Graphic Design, Poster Design"}
                deliverables={"Poster"}
                imgs={
                    <>
                    <div><img src={""}/></div>
                    </>
                }
                />    
            </div>
            <div className="AOE Animations">
                <ArticleInfo
                title={"Recruitment Animation"}
                description={
                    <>
                    lorem ipsum
                    </>
                }
                category={"2D Animation"}
                deliverables={"Gifs for social media"}
                imgs={
                    <>
                    <div><img src={""}/></div>
                    </>
                }
                />    
            </div>
            {/* <div className="section__padding">
                <ArticleL
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
            </div> */}
            {/* <div className="section__padding">
                <CTA 
                title= "Skills Developed"
                description= "Graphic Design, Printing"
                />
            </div> */}

        </div> 
    </div>
  )
}

export default Graphics