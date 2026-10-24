import React from 'react'
import { Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope, EyebrowHeader } from '../../components';
import screens from '../../assets/trueNorth_screens.png';

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
            <Employment 
            eyebrow={"True North Therapy"}
            name={"Building a Digital Experience for a Therapy Practice"}
            logo={ <></> }
            positionDescription={
                <>
                Creating an affirming digital experience for an LGBTQIA+ therapy practice through logo design, visual identity, photography, and web design—building trust, communicating warmth, and making services easier to navigate.
                </>
            } 
            employer={"True North Therapy"}
            jobTitle="UX/UI Designer & Web Developer, Branding, Photography"
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
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={"The Challenge"}
            title={"Making Care Feel Approachable"}
            />
            <p>
                Chosing a therapist is personal. True North Therapy needed a digital presence
                that communicated its LGBTQIA+ affirming approach while helping prospective 
                clients understand available services and feel comfortable taking the next step.
            </p>
            <p>
                The challenge was to balance a distinctive, inclusive brand with clear service 
                information and an intuitive path to booking
            </p>
        </div>
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={"Brand Strategy"}
            title={"Expressing Identity Through Design"}
            />
            <p>
                I developed a visual direction inspired by nature, using layered mountain imagery, 
                a grounded color pallette, and a custom logo to reflect the practice's name and values.
            </p>
            <p>
                The identity balances warmth and professionalism, while inclusive imagery and messaging 
                help communicate who the practice serves.
            </p>
            <h2>Design Priorities</h2>
            <ul>
                <li><p>Inclusive by design: Reflect the practice's LGBTQIA+ affirming approach.</p></li>
                <li><p>Warm and professional: Build trust without feeling clinical or impersonal.</p></li>
                <li><p>Consistent across touchpoints: Carry the visual identity through the website, photography, and logo design.</p></li>
            </ul>
        </div>
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={"UX & Information Architechure"}
            title={"Turning Information Into a Clear Path Forward"}
            />
            <p>I organized the website around the questions prospective clients need answered: who the therapist supports, what services are available, and how to get started.</p>
            <p>Service pages,therapist information, FAQs, and appointment prompts work together to support discovery and reduce friction between exploring care and booking consultation.</p>
            <h2>Key Design Decisions</h2>
            <ul>
                <li><p>Structured service discovery: Organized specialties, therapy approaches, and session options into scannable sections.</p></li>
                <li><p>Clear conversion paths: Contact call-to-actions throughout the site and HIPAA compliant scheduling.</p></li>
                <li><p>Accessible, readable layouts: Used typography, spacing, and visual hierarchy to make information easier to scan</p></li>
            </ul>
        </div>
        <div className="section__padding">
            <EyebrowHeader 
            eyebrow={"Visual Design & Photography"}
            title={"Building Trust Through Authenticity"}
            />
            <p>I paired the visual identity with photos of the therapist and their office to make the experience feel personal and grounded.</p>
            <p>Custom imagery, handdrawn logo, and earthy color scheme to create continuity across pages while supporitng the welcoming tone of the brand.</p>
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
            title={"A Cohesive Brand"}
            />
            <p>The finished website brings the practice's identity and digital experience together- helping prospective clients explore services, understanding the therapist's approach, and find a clear next step.</p>
            <p>The project demonstrated how brand strategy, UX thinking, visual design, photography, and web development can work together to support both user needs and business goals.</p>
        </div>
        <div className="section__padding">
            <img src={ screens } alt="" />
        </div>
    </div>
  )
}

export default TrueNorthTherapy