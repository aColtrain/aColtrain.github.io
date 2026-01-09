import React from 'react'
import { Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';
import screens from '../../assets/GCO_screens.png';
 
 function GetClimbingOutside() {
   return (
    <div>
        <div>
            <Employment 
            name={"Get Climbing Outside"}
            logo={ <></> }
            positionDescription={
                <>
            
                </>
            } 
            employer={"Get Climbing Outside"}
            jobTitle="Media Specialist"
            deliverables="Website"
            tools="Figma, HubSpot"
            teamSize={
                <>
                9
                <a id="MediaBridge" />
                </>
            }
            />
        </div>
        <div className="section__padding">
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
        </div>
        <div className="section__padding">
            <img src={ screens } alt="" />
        </div>
    </div>
    
   )
 }
 
 export default GetClimbingOutside