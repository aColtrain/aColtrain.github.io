import React from 'react'
import { Employment, EyebrowHeader } from '../../components';
import bannerHero from '../../assets/deltaBanner_hero.png';
import bannerDesign from '../../assets/deltaBanner_designApproach.png';

function DeltaOutreachBanner() {
  return (
    <div>
        <div>
            <img src={ bannerHero } alt="" className="width100 section__padding" />
            <Employment 
            name= { "Delta SkyPro Engagement Banner"}
            logo={ <></> }
            logoDescription="" 
            positionDescription={
                <>
                Redesigned the In-Flight Services DIgital Innovation tabletop banner to make SkyPro apps more eye-catching and encourage engagement at in-person events. 
                The updated design strengthes visual hierarchy, showcases the app ecosystem, and introduces a QR code that invites attendees to share feedback.
                </>
                }
            employer=""
            jobTitle=""
            deliverables=""
            tools=""
            />
        </div>
        <div className="section__padding">
            <EyebrowHeader
            eyebrow={"Design Approach"}
            title={"From Information to Interactive"}
            />
            <p>The original banner listed the available apps, while the redesign puts the SkyPro Experience front and center.</p>
            <ul>
                <li><p>Stronger Visual Hierarchy: Used Delta's brand colors bold sections, and clearer messageing to improve visibility.</p></li>
                <li><p>Product Showcase: Featured the SkyPro app icon within a mobile device mockup to put the digital ecosystem in front of the user.</p></li>
                <li><p>Interactive Engagement: Added a QR code to give viewers a direct way to share feed back about their app experience.</p></li>
            </ul>
            <img src={ bannerDesign } alt="" className="width100" />
        </div>
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={""}
            title={"Deliverable"}
            />
            <p>Redesigned event banner for in-person SkyPro app promotion and feedback colleection.</p>
        </div>
    </div>
  )
}

export default DeltaOutreachBanner