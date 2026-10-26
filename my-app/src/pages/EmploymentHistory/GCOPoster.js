import React from 'react'
import { Employment, EyebrowHeader } from '../../components';

function GCOPoster() {
  return (
    <div>
        <div>
            <Employment 
            eyebrow={"Promotional Design & Brand Engagement"}
            name= { "Get Climbing Outside Poster"}
            logo={ <></> }
            logoDescription="" 
            positionDescription={
                <>
                Designed a promotional poster for Get Climbing Outside, a Latina-owned climbing business, to make outdoor climbing feel more approachable and encourage climbers of all levels and styles.
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
            title={"Making Climbing More Welcoming"}
            />
            <p>Climbing spaces can feel intimidating and unnnecassarily competitive. I wanted the design to communicate accessibility and inclusiveness.</p>
            <ul>
                <li><p>Approachable Imagery: Featured an outdoor climbing photo to invite viewers into the experience.</p></li>
                <li><p>Distinctive Visual Identity: Combined bold typography, vibrant green, and curved graphic elements to capture attention.</p></li>
                <li><p>Accessible Messageing: Highlighted climbing classes and guiding services to encourage participation across experience levels.</p></li>
                <li><p>Direct Engagement: Incorporated a QR code connecting potential customers to the business website.</p></li>
            </ul>
        </div>
        <div className="section__padding">
            <EyebrowHeader
            eyebrow={""}
            title={"Outcome"}
            />
            <p>The client approved the poster and displayed multiple locations across the nation. The poster became a significant lead source, accounting for approximately 60% of leads to the business website.</p>
        </div>
    </div>
  )
}

export default GCOPoster