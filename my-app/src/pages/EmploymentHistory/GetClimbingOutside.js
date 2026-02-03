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
                Created a professional, trustworthy, and inclusive online presence that reflects the brand’s adventurous spirit. 
                Built a client-manageable website allowing easy updates, where users can explore services, meet the team, view class offerings, 
                and book directly. I also produced supporting photography and social content to strengthen the brand’s digital identity.
                {/* Social Media, Phography, Web design */}
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
        {/* <div className="section__padding">
            <h2>Overview</h2>
            <p>Created a professional, trustworthy, and inclusive online presence that reflects the brand’s adventurous spirit. 
                Built a client-manageable website allowing easy updates, where users can explore services, meet the team, view class offerings, 
                and book directly. I also produced supporting photography and social content to strengthen the brand’s digital identity.
</p>
        </div> */}
        {/* <div className="section__padding">
            <Scope
            title1={
            <>
            Overview
            </>}
            text1={
                <>
                
                <ul>
                <li>No prior digital communications</li>
                <li>Wants to emphasize climbing is fun for everyone</li>
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
                <li>No booking system</li>
                <li>Not client manageable</li>
                </ul>
                </>
            }
            title3={
                <>
                
                </>}
            text3={
                <>
                <ul>
                
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
 
 export default GetClimbingOutside