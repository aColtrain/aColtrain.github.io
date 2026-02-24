import React from 'react'
import './graphicDesignCollage.css';
import deltaBanner from '../../assets/delta_banner.png'
import deltaBannerOriginal from '../../assets/delta_banner_original.png'
import deltaBannerFinal from '../../assets/delta_banner_final.png'
import GCOPoster2 from '../../assets/GCO_MarketingPoster2.png';
import genderAffirmingPoster from '../../assets/genderAffirming_Posters.png';
import mascotPoster from '../../assets/graphics/University_Mascot_Poster.png'
import deltaEngagmentRedesign from '../../assets/graphics/Delta__EngagmentBannerRedesign.png'
import imaBirdPoster from '../../assets/graphics/IMA__BirdPoster.png'
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
            <div className="animation">
                <div>
                    <img src={ aoeAnim1 } />
                    <p>Caption</p>
                </div>
                <div>
                    <img src={ aoeAnim2 } />
                    <p>Caption</p>
                </div>
            </div>


            
            <img src={ deltaEngagmentRedesign } />
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