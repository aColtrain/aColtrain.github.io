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
                Creating a hand-illustrated series of three flyers for gender-affirming workshops, combining queer cutral refrences, a custom character, and playful visual storytelling.
                Designed the flyers to stand alone as event promotions and connect into a larger composition for social media.
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
            eyebrow={"Art Direction"}
            title={"Making the Details Tell the Story"}
            />
            <p>Every element was intentionally curated for each workshop with details resonate with the queer community.</p>
            <ul>
                <li><p>Representatiion: Designed a gender-ambiguous character to create a more inclusive, open-ended point of identification.</p></li>
                <li><p>Community references: Incorporated symbols such as a chest binder, bell bottoms, scissors, and a cat to reflect queer culture and self expression.</p></li>
                <li><p>Workshop- specific details: Illustrated tools mentioned in the fashion workshop, added a bandana in the back pocket as a nod to queer history, and incorporated the venue's logo as a patch on the character's clothing and backpack.</p></li>
                <li><p>Grassroots aesthetic: Used hand drawn titles, expressive illustrations, simple color blocked backgrounds, and intentionally imperfect borders to give the campaign a personal, community-led feel.</p></li>
            </ul>
        </div>
        <div className="section__padding">
            <EyebrowHeader
            eyebrow={"Campaign System"}
            title={"Designed to Stand Together"}
            />
            <p>
                Each flyer promotes a distinct workshop while contributing to a larger illustration when displayed together. 
                The connected compositions creates a more eye-catching physcial display while allowing each flyer to stand independantly.
                The combined artwork also translated into a fun social media graphic that has other information as other items on a bulletin board.
            </p>
        </div>
        <div className="section__padding">
            <EyebrowHeader
            eyebrow=""
            title="Deliverables"
            />
            <p>Three illustrated event flyers and one combined social media graphic.</p>
        </div>
    </div>
  )
}

export default GenderAffirmingWorkshop