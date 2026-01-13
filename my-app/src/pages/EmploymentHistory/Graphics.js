import React from 'react'
import deltaEngagmentOrignal from '../../assets/graphics/Delta__EngagmentBannerOriginal.png'
import deltaEngagmentRedesign from '../../assets/graphics/Delta__EngagmentBannerRedesign.png'
import imaBirdPoster from '../../assets/graphics/IMA__BirdPoster.png'
import imaBirdCardDisplay from '../../assets/graphics/IMA__BirdCardDisplay.png'
import imaBirdCard1 from '../../assets/graphics/IMA__BirdCardDetail1.png'
import imaBirdCard2 from '../../assets/graphics/IMA__BirdCardDetail2.png'
import imaBirdCard3 from '../../assets/graphics/IMA__BirdCardDetail3.png'
import imaEventPosters from '../../assets/graphics/IMA__EventPosters.png'
import imaEventPostersDisplay from '../../assets/graphics/IMA__EventPostersDisplay.png'
import mascotPoster from '../../assets/graphics/University_Mascot_Poster.png'
import mascotDetail from '../../assets/graphics/University__Mascot__Detail.png'
import mascot1 from '../../assets/graphics/University__Mascot1.png'
import mascot2 from '../../assets/graphics/University__Mascot2.png'
import mascot3 from '../../assets/graphics/University__Mascot3.png'
import aoeAnim1 from '../../assets/graphics/AOE__Animation1.gif'
import aoeAnim2 from '../../assets/graphics/AOE__Animation2.gif'

import birdPoster from '../../assets/mediaArts/Bird_Poster.png';
import grackleFront from '../../assets/mediaArts/Boat_Tailed_Grackle_Front.jpg';
import grackleBack from '../../assets/mediaArts/Boat_Tailed_Grackle_Back.jpg';
import birds from '../../assets/mediaArts/ma_birds.png';
import bannerFinal from '../../assets/delta_banner_final.png';
import banner from '../../assets/delta_banner.png';
import bannerOriginal from '../../assets/delta_banner_original.png';
import eventPoster from '../../assets/mediaArts/ma_eventPoster.png';
import GCOPoster1 from '../../assets/GCO_MarketingPoster.png';
import GCOPoster2 from '../../assets/GCO_MarketingPoster2.png';
import { ArticleHead, ArticleL, ArticleR, ArticleInfo, CTA, Scope, Employment } from '../../components';
import '../../components/employment/employment.css';

function Graphics() {
  return (
    <div>
        <div className="header employment__name section__padding">
            <h1 className="gradient__text">Graphic Design & Motion Design</h1>
        </div>
        
        <div className="">
            <div className="GCO Poster">
                <ArticleInfo
                title={"Climbing Marketing Poster"}
                description={
                    <>
                    Designing a poster to stand out on a bulletin of posters. The mix of color blocking and phography gives it an eye catching look. The 
                    poster is also pair with stickers to draw viewers in. 
                    </>
                }
                category={"Marketing, Poster Design"}
                deliverables={"Interactive Poster"}
                imgs={
                    <>
                    <div className="">
                        <img src={GCOPoster1}/>
                        <img src={GCOPoster2}/>
                    </div>
                    </>
                }
                />    
            </div>
            <div className="bird cards">
                <ArticleInfo
                title={"Bird Cards and Poster"}
                description={
                    <>
                    Table settings and an event poster were created for the Savannah Museum bird event. The work utilizes circles to
                    highlight the subjects and create a focal point in the graphic.  
                    </>
                }
                category={"Graphic Design, Poster Design"}
                deliverables={"Information Cards, Poster"}
                imgs={
                    <>
                    <div>
                        <img src={imaBirdPoster}/>
                        <img src={imaBirdCardDisplay}/>
                    </div>
                    <div>
                        <img src={imaBirdCard1}/>
                        <img src={imaBirdCard2}/>
                        <img src={imaBirdCard3}/>
                    </div>
                    </>
                }
                />    
            </div>
            <div className="Delta Banner">
                <ArticleInfo
                title={"Engagement Banner"}
                description={
                    <>
                    A redesign of a tabletop poster for engagement events. The original design on the left
                    and the redesign is on the right. Engagment increased 70%.
                    </>
                }
                category={"Graphic Design, Poster Design"}
                deliverables={"Interactive Poster"}
                imgs={
                    <>
                    <div>
                        <img src={deltaEngagmentOrignal}/>
                        <img src={deltaEngagmentRedesign}/>
                    </div>
                    </>
                }
                />    
            </div>
            <div className="University Mascot">
                <ArticleInfo
                title={"University Mascot"}
                description={
                    <>
                    A commissioned piece for a client who wanted the University of Georgia mascot in a
                    University of Tennessee jersey.
                    </>
                }
                category={"Graphic Design, Poster Design"}
                deliverables={"Poster"}
                imgs={
                    <>
                    <div>
                        <img src={mascotPoster}/>
                    
                        <img src={mascotDetail} />
                        {/* <div>
                            <img src={mascot1}/>
                        </div>
                        <div>
                            <img src={mascot2}/>
                        </div>
                        <div>
                            <img src={mascot3}/>
                        </div> */}
                    </div>
                    
                        
                    
                    

                    </>
                }
                />    
            </div>
            
            <div className="IMA Event Posters">
                <ArticleInfo
                title={"Event Posters"}
                description={
                    <>
                    Event posters for the Interdisciplinary Media Arts Center. Features bright colors to stand out 
                    against other posters. Utilizes QR codes for RSVPing.
                    </>
                }
                category={"Graphic Design, Poster Design"}
                deliverables={"Event Poster"}
                imgs={
                    <>
                    <div>
                        <img src={ imaEventPosters }/>
                        <img src={ imaEventPostersDisplay }/>
                    </div>
                    </>
                }
                />    
            </div>
            
            <div className="AOE Animations">
                <ArticleInfo
                title={"Recruitment Animation"}
                description={
                    <>
                    A 2D animation created frame by frame for Alpha Omega Epsilon recruitment. To incorporate
                    the monopoly theme, I animated the monopoly man's arms to be raised over his head and moved to 
                    in front of his body with his hands forming the Alpha Omega Epsilon symbol. The second animation 
                    is animating a dice roll. This was made for Instagram with the post dimensions in mind. 
                    </>
                }
                category={"2D Animation"}
                deliverables={"Gifs for social media"}
                imgs={
                    <>
                    <div className="gif">
                        <img src={aoeAnim1}/>
                        <img src={aoeAnim2}/>
                    </div>
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