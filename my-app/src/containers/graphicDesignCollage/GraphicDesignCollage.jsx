import React from 'react'
import './graphicDesignCollage.css';

import deltaVideoLanding from '../../assets/delta_videodemo_landing.png'
import museumBirdCards from '../../assets/mediaArts/museumBirdCards.png'
import deltaBanner from '../../assets/lab_deltaBanner.png'
import GCOPoster2 from '../../assets/GCO_MarketingPoster2.png'
import tnLogo from '../../assets/graphics/TN_logo.png'
import tnPhoto from '../../assets/graphics/TN_photography.png'
import tnLaptop from '../../assets/graphics/TN_laptop.png'
import mascotPoster4 from '../../assets/graphics/University__Mascot4.png'

// import deltaBanner from '../../assets/delta_banner.png'
import deltaBannerOriginal from '../../assets/delta_banner_original.png'
import deltaBannerFinal from '../../assets/delta_banner_final.png'


import genderAffirmingPoster from '../../assets/genderAffirming_Posters.png'
import mascotPoster from '../../assets/graphics/University_Mascot_Poster.png'

import egretFront from '../../assets/mediaArts/Great_Egret_Front.png'
import egretBack from '../../assets/mediaArts/Great_Egret_Back.png'
import ospreyFront from '../../assets/mediaArts/Osprey_Front.png'
import ospreyBack from '../../assets/mediaArts/Osprey_Back.png'
import imaBirdPoster from '../../assets/mediaArts/Bird_Poster.png'
import boatTailFront from '../../assets/mediaArts/Boat_Tailed_Grackle_Front.png'
import boatTailBack from '../../assets/mediaArts/Boat_Tailed_Grackle_Back.png'
import cardinalFront from '../../assets/mediaArts/Northern_Cardinal_Front.png'
import cardinalBack from '../../assets/mediaArts/Northern_Cardinal_Back.png'
import mockingbirdFront from '../../assets/mediaArts/Northern_Mockingbird_Front.jpg'
import mockingbirdBack from '../../assets/mediaArts/Northern_Mockingbird_Back.png'

import imaBirdCardDisplay from '../../assets/graphics/IMA__BirdCardDisplay.png'
import imaEventPosters from '../../assets/graphics/IMA__EventPosters.png'
import aoeAnim1 from '../../assets/graphics/AOE__Animation1.gif'
import aoeAnim2 from '../../assets/graphics/AOE__Animation2.gif'


function GraphicDesignCollage() {
  return (
    <div className="grid col">
        <div className="row">
            <div className="deltaDemo">
                <img src={ deltaVideoLanding } />
                <h2>Delta Air Lines | Rapid Stake Holder Visualization</h2>
                <p>Rapid internal deliverable to align stakeholders on a new passenger flow under extreme time and budget constraints.</p>
                <p>Video Production | Video Editing</p>
            </div>
            <div className="museumBirdCards">
                <img src={ museumBirdCards } />
                <h2>Museum Engagement Visual System</h2>
                <p>Goal: Interactive Discovery</p>
                <p>Logic: Patter-Matched ID</p>
                <p>Craft: Geometric Construction</p>
            </div>
        </div>
        <div className="row">
            <div className="deltaBannerRedesign row">
                <img src={ deltaBanner } />
                <div className="">
                    <h2>Engagement Visual System</h2>
                    <p> Redesigned the Delta IFS banners to increase visual impact and color variety, ensuring high visibility in a crowded event spaces</p>
                </div>
            </div>
            <div className="gcoPoster">
                <img src={ GCOPoster2 } />
            </div>
        </div>
        <div className="row">
            <div className="trueNorth">
                <img src= { ospreyFront } />
                <img src= { ospreyFront } />
                <img src= { ospreyFront } />
            </div>
        </div>
        <div className="row">
            <div className="genderAffirmingPosters">
                <img src={ genderAffirmingPoster } />
            </div>
            <div className="universityPoster">
                <img src={ mascotPoster4 } />
            </div>
            <div className="aoeanim">
                <img src={ aoeAnim1 } />
            </div>
        </div>
        <div className="row">
            <div className="aoeanim">
                <img src={ aoeAnim2 } />
            </div>
        </div>


{/* 


        <div className="gallery">
            <div className="deltaBanner">
                <div>
                    <img src={ deltaBannerFinal } />
                    <p>ENGAGEMENT BANNER REDESIGN</p>
                </div>
                <div>
                    <img src={ deltaBanner } />
                    <p>CAPTION</p>
                </div>
                <div>
                    <img src={ deltaBannerOriginal } />
                    <p>ENGAGEMENT BANNER ORIGINAL </p>
                </div>
            </div>
            <div className="posters">
                <div>
                    <img src={ GCOPoster2 } />
                    <p>BULLETIN POSTER FOR ADVERTISING</p>
                </div>
                <div>
                    <img src={ genderAffirmingPoster } />
                    <p>GRASS-ROOT WORKSHOP POSTER SERIES</p>
                </div>
                <div>
                    <img src={ mascotPoster } />
                    <p>ILLASTRATION</p>
                </div>
            </div>
            <div className="birds">
                <div className="birdTop">
                    <div className="birdCards">
                        <img src={ egretFront } />
                        <img src={ egretBack } />
                        <img src={ ospreyFront } />
                        <img src={ ospreyBack } />
                        <p>CAPTION</p>
                    </div>
                    <div className="birdsPoster">
                        <img src={ imaBirdPoster } />
                        <p>MUSEUM ENGAGEMENT VISUALS</p>
                    </div>
                    <div className="birdCards">
                        <img src={ boatTailFront } />
                        <img src={ boatTailBack } />
                        <img src={ cardinalFront } />
                        <img src={ cardinalBack } />
                        <p>CAPTION</p>
                    </div>
                </div>
                <div className="birdBottom">
                    <img src={ mockingbirdFront } />
                    <img src={ mockingbirdBack } />
                </div>
            </div>
            <div className="animation">
                <div>
                    <img src={ aoeAnim1 } />
                    <p>HAND-DRAWN 2D ANIMATION FOR SOCIAL MEDIA</p>
                </div>
                <div>
                    <img src={ aoeAnim2 } />
                    <p>CAPTION</p>
                </div>
            </div>


            
     
            
                                

            
        </div> */}
    </div>
  )
}

export default GraphicDesignCollage