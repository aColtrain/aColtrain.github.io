import React from 'react'
import { Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';
import screens from '../../assets/bluSafe_screens.png';

 function BluSafe() {
   return (
    <div>
        <div>
            <Employment 
            name={"BluSafe"}
            logo={ <></> }
            positionDescription={
                <>
                Developed a privacy-focused website with strong security practices, designed to build trust while delivering a seamless and safe user experience.
                {/* slide deign and graphic design, mention persona, adjvetives */}
                </>
            } 
            employer={"BluSafe"}
            jobTitle="Web Designer & Developer"
            deliverables="Website"
            tools="Figma, Wix"
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
            <p>
                Developed a privacy-focused website with strong security practices, designed to build trust while delivering a seamless and safe user experience.
            </p>
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
                <li>  </li>
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
 
 export default BluSafe