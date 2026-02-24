import React from 'react'
import './graphicDesignCollage.css';
import deltaBanner from '../../assets/delta_banner.png'
import deltaBannerOriginal from '../../assets/delta_banner_original.png'
import deltaBannerFinal from '../../assets/delta_banner_final.png'

import GCOPoster2 from '../../assets/GCO_MarketingPoster2.png'
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
    <div>
        <div className="gallery">
            <div className="deltaBanner">
                <div>
                    <img src={ deltaBannerFinal } />
                    <p>CAPTION</p>
                </div>
                <div>
                    <img src={ deltaBanner } />
                    <p>CAPTION</p>
                </div>
                <div>
                    <img src={ deltaBannerOriginal } />
                    <p>CAPTION</p>
                </div>
            </div>
            <div className="posters">
                <div>
                    <img src={ GCOPoster2 } />
                    <p>CAPTION</p>
                </div>
                <div>
                    <img src={ genderAffirmingPoster } />
                    <p>CAPTION</p>
                </div>
                <div>
                    <img src={ mascotPoster } />
                    <p>CAPTION</p>
                </div>
            </div>
            <div className="birds">
                <div className="birdTop">
                    <div className="birdCards">
                        <img src={ egretFront } />
                        <img src={ egretBack } />
                        <img src={ ospreyFront } />
                        <img src={ ospreyBack } />
                        {/* <p>CAPTION</p> */}
                    </div>
                    <div className="birdsPoster">
                        <img src={ imaBirdPoster } />
                        <p>CAPTION</p>
                    </div>
                    <div className="birdCards">
                        <img src={ boatTailFront } />
                        <img src={ boatTailBack } />
                        <img src={ cardinalFront } />
                        <img src={ cardinalBack } />
                        {/* <p>CAPTION</p> */}
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
                    <p>CAPTION</p>
                </div>
                <div>
                    <img src={ aoeAnim2 } />
                    <p>CAPTION</p>
                </div>
            </div>


            
     
            <img src={ imaBirdPoster }/>
            <img src={ imaBirdCardDisplay }/>
            <img src={ mascotPoster }/>
            <img src={ imaEventPosters }/>
            <img className="gif" src={aoeAnim1}/>
            <img className="gif" src={aoeAnim2}/>
                                

            
        </div>
    </div>
  )
}

export default GraphicDesignCollage