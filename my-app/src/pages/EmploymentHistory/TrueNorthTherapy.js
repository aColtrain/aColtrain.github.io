import React from 'react'
import { BmIntro, Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope, EyebrowHeader } from '../../components';

import screens from '../../assets/trueNorth_screens.png';
import tntAnim from '../../assets/TNT_desktop.gif';

function TrueNorthTherapy() {
  return (
    <div>
        {/* <div>
            <Employment 
            name={"True North Therapy"}
            logo={ <></> }
            positionDescription={
                <>
                Creating an inclusive, affirming brand for an LGBTQIA+ therapy service through logo design, visual identity, 
                and accessible web styling that communicates trust, warmth, and emotional safety.
               Web development, comparative research, brand identity, logo design, photography 
            
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
        </div> */}
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
        <div>
            <BmIntro
            eyebrow={"True North Therapy"}
            name={"Building a Digital Experience for a Therapy Practice"}
            positionDescription={
                <>
                Creating an affirming digital experience for an LGBTQIA+ therapy practice through logo design, visual identity, photography, and web design—building trust, communicating warmth, and making services easier to navigate.
                </>
            } 
            />
        </div>
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={"The Challenge"}
            title={"Creating Space Where Everyone Feels Welcome"}
            />
            <p>
                Chosing a therapist is personal. Beyond finding someone whoes specialties and theraeutic approach align with your needs, you're also deciding whether you feel comfortable connecting with
                them as a person.
            </p>
            <p>
                True North Therapy wanted to communicate its LGBTQIA+ affirming approach without positioning the practice as exclusively serving the LGBTQIA+ clients. The challenge was to create a brand and 
                digitial experience that welcomed people from all backgrounds while making LGBTQIA+ visitors feel recongized, represented, and confident that they would be supported. 
            </p>
            <p>
                I approached the website from the perspective for a prospective client, considering the questions and reassurance someone might need before reaching out:
            </p>
            <ul>
                <li><p>Who does this practice serve? Clearly communicatethat the practice welcomes clients of all identities while affirming its LGBTQIA+ specialization.</p></li>
                <li><p>Can I relate to this therapist? Introduce the therapist as a person, buiding familiarity and trust beyond credentials and specialties.</p></li>
                <li><p>Is this the right fit for me? Make theraeuticapproaches, specialties, and servies easy to understand.</p></li>
                <li><p>What happens next? Provide clear information about sessions, availability, and how to get started.</p></li>
            </ul>
        </div>
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={"Brand Strategy"}
            title={"Expressing Identity Through Design"}
            />
            <p>
                Before developing the visual direction, I started by asking two questions: How do we want people to feel when visiting the website, and what do we want them to think and feel about True North Therapy?
            </p>
            <p>
                The goal was to create an experience that feels welcoming, grounded, and approachable while positioning the practice as trustworthy, professional, and affirming.
            </p>
            <p>The name True North Therapy is a play on the therapist's last name, Northrup, and reflects her personal connection to nature and hiking. I leaned into this connection through layered mountain imagery and grounded color palette, creating a visual identity that feel personal and distinct from the clinical, impersonal aesthetic common across therapy websites.</p>
            <h2>Design Priorities</h2>
            <ul>
                <li><p>Inclusive by design: Reflect the practice's LGBTQIA+ affirming approach while welcoming people of all identities.</p></li>
                <li><p>Warm and professional: Build trust without feeling clinical or impersonal.</p></li>
                <li><p>Personal and cohesive: Connect the therapist's identity and values to the visual language across the website, photography, and logo.</p></li>
            </ul>
        </div>
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={"UX & Information Architechure"}
            title={"Turning Information Into a Clear Path Forward"}
            />
            <p>I organized the website around the questions prospective clients need answered: who the therapist supports, what services are available, and how to get started.</p>
            <p>
                The structure balances clear service information with oppurtunities to connect with the therapist as a person, helping visitors evaluate whether the practice feels like the right fit before reaching out.
            </p>
            <h2>Key Design Decisions</h2>
            <ul>
                <li><p>Structured service discovery: Organized specialties, therapy approaches, and session options into scannable sections.</p></li>
                <li><p>Stategic conversion points: Placed call-to-actions after key information sections to encourage visitord to schedule a free 15-minute consultation.</p></li>
                <li><p>Privacy and practice requriements: Incorporated essential practice information and privacy considerations, including HIPAA-compliant scheduling.</p></li>
                <li><p>Accessible, readable layouts: Used typography, spacing, and visual hierarchy to make information easier to scan.</p></li>
            </ul>
        </div>
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={"Visual Design & Photography"}
            title={"Building Trust Through Authenticity"}
            />
            <p>I paired the visual identity with photos of the therapist and their office to make the experience feel personal and grounded.</p>
            <p>The photography also adds transparency, helping prospective clients become familiar with the therapist and the physical space before their first visit. This can reduce uncertainty and anxiety when choosing a therapist.</p>
            <p>A hand-drawn logo, custom imagery, and an earthy color palette create visual continuity across the website while reinforcing the practices approachable, nature-inspired identity.</p>
            
        </div>
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={"Development & Delivery"}
            title={"Bringing the Experience to Life"}
            />
            <p>I translated the design into a conhesive website, bringing together brand elements, page layouts, service content, and appointment pathways in a unified experience.</p>
            <p>I implemented the website, bridging design and development to carry the visual direction into the final expereince.</p>
        </div>
        <div className="section__padding">
            
            <EyebrowHeader 
            eyebrow={"Outcome"}
            title={"A Cohesive Brand & Digital Experience"}
            />
            <p>The project brought brand strategy, UX, visual design, photography, and web development together to create a cohesive experience that supports prospective clients in finding the right care while helping the practice build trust, communicate its services, and encourage consultation bookings.</p>
        </div>
        <div className="section__padding">
            <img src={ screens } alt="" />
        </div>
    </div>
  )
}

export default TrueNorthTherapy