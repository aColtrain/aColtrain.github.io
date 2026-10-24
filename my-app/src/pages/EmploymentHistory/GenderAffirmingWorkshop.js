import React from 'react'
import { Employment, EyebrowHeader } from '../../components';

function GenderAffirmingWorkshop() {
  return (
    <div>
        <div>
            <Employment 
            name= { "Gender-Affirming Workshop Campaign"}
            logo={ <></> }
            logoDescription="" 
            positionDescription={
                <>
                Hand-illustrated a series of three event flyers for gender-affirming workshops, then brought them together into a cohesive social media graphic. 
                Bold colors, original characters, and connected compositions unified the campaign around community education and self expression.
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
            eyebrow=""
            title="Illustration & Digital Campaign Design"
            />
            <p>Hand-illustrated a series of three event flyers for gen</p>
        </div>
        <div className="section__padding">
            <EyebrowHeader
            eyebrow=""
            title="Campaign Design"
            />
        </div>
        <div className="section__padding">
            <EyebrowHeader
            eyebrow=""
            title="Creative Direction"
            />
        </div>
        <div className="section__padding">
            <EyebrowHeader
            eyebrow=""
            title="Deliverables"
            />
        </div>
    </div>
  )
}

export default GenderAffirmingWorkshop