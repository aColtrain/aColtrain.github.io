import React from 'react'
import { EyebrowHeader, Employment } from "../../components"

function AOEAnimation() {
  return (
    <div>
        <div>
            <Employment 
            eyebrow={"2D Animation and Social Media Campaign"}
            name= { "Alpha Omega Epsilon Recruitment"}
            logo={ <></> }
            logoDescription="" 
            positionDescription={
                <>
                Created two 2D animation promoting Alpha Omega Epsilon's recruitment event, using a Monopoly-inspired theme to connect the recruitment experience with the sorority's identity.
                Custom illustrations and playful motion bring the campaign to life wile communicating the idea of finding a home in AOE.
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