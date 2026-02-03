import React from 'react'
import { Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';
import screens from '../../assets/trueNorth_screens.png';

function TrueNorthTherapy() {
  return (
    <div>
        <div>
            <Employment 
            name={"True North Therapy"}
            logo={ <></> }
            positionDescription={
                <>
                Creating an inclusive, affirming brand for an LGBTQIA+ therapy service through logo design, visual identity, 
                and accessible web styling that communicates trust, warmth, and emotional safety.
               {/* Web development, comparative research, brand identity, logo design, photography  */}
            
                </>
            } 
            employer={"True North Therapy"}
            jobTitle="Website Designer & Developer"
            deliverables="Website"
            tools="Figma, GoDaddy"
            teamSize={
                <>
                9
                <a id="MediaBridge" />
                </>
            }
            />
        </div>
        {/* <div className="section__padding">
            <h2>Overview</h2>
            <p>Creating an inclusive, affirming brand for an LGBTQIA+ therapy service through logo design, visual identity, 
                and accessible web styling that communicates trust, warmth, and emotional safety.</p>
        </div> */}
        {/* <div className="section__padding">
            <Scope
            title1={
            <>
            Situation
            </>}
            text1={
                <>
                <ul>
                <li>Client is transitioning from improve to marketing and need a website that reflects that</li>
                </ul>
                
                </>
            }
            title2={
                <>
                Painpoints
                </>}
            text2={
                <>
                <ul>
                <li>Design process was too long</li>
                </ul>
                </>
            }
            title3={
                <>
                Tasks
                </>}
            text3={
                <>
                <ul>
                <li>Find software that supports design and prototype needs</li>
                </ul>
                </>
            }
            />          
        </div> */}
        <div className="section__padding">
            <img src={ screens } alt="" />
        </div>
    </div>
  )
}

export default TrueNorthTherapy