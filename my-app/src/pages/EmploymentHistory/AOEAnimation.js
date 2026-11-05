import React from 'react'
import { EyebrowHeader, Employment, BmIntro } from "../../components"
import aoeAnim1 from '../../assets/graphics/AOE__Animation1.gif'
import aoeAnim2 from '../../assets/graphics/AOE__Animation2.gif'
import aoeAnim3 from '../../assets/graphics/AOE__Animation3.gif'
import aoeAnim4 from '../../assets/graphics/AOE__Animation4.gif'
import aoeTime from '../../assets/graphics/AOE__Animation_Timelapse.mp4'
import '../../containers/graphicDesignCollage/graphicDesignCollage.css';

function AOEAnimation() {
  return (
    <div>
        <div>
            <div className="column50 section__padding">
                <div className="center">
                    <img className="width75" src={ aoeAnim3 } alt="" />
                </div>
                <div className="center">
                    <img className="width75" src={ aoeAnim4 } alt="" />
                </div>
                
            </div>
            
            <BmIntro 
            eyebrow={"2D Animation and Social Media Campaign"}
            name= { "Alpha Omega Epsilon Recruitment"}
            positionDescription={
                <>
                Created two 2D animation promoting Alpha Omega Epsilon's recruitment event, using a Monopoly-inspired theme to connect the recruitment experience with the sorority's identity.
                Custom illustrations and playful motion bring the campaign to life wile communicating the idea of finding a home in AOE.
                </>
                }
            />
        </div>
        <div>
            <img src={ aoeTime } alt="" />
        </div>
        <div className="center" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <video width="75%" height="auto" controls autoPlay muted loop>
                <source src={ aoeTime } type="video/mp4" />
                
            </video>
        </div>
    

        {/* <div className="row center">
            <div className="aoeanim">
               
                    <img src={ aoeAnim1 } />
                
            </div>
            <div className="aoeanim">
                
                    <img src={ aoeAnim2 } />
            
            </div>
        </div> */}
        <div className="section__padding">
            <EyebrowHeader
            eyebrow={"Creative Direction"}
            title={"From Game Night to Sisterhood"}
            />
            <ul>
                <li><p>Character animation: Animated the Monopoly Man raising the AOE hand symbol, combining a recognizable game character with soroity branding.</p></li>
                <li><p>Illustrated Storytelling: Animated rolling dice and a dolphin gmae piece representing the soroity's animal.</p></li>
                <li><p>Meaningful Motion: Animated the game piece landing on the final space, where a house appears to symbolize finding a home in AOE.</p></li>
                <li><p>Campaign Consistency: Created two complimentary animations that use the same Monopoly-inspired theme to promote recruitment across social media.</p></li>
            </ul>
        </div>
    </div>
  )
}

export default AOEAnimation