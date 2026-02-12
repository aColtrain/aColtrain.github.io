import React from 'react'
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { delta } from "../../components/brand/imports"
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';
import car from '../../assets/car.png';
import migration from '../../assets/delta_migration.png';
import legacyDesigns from '../../assets/delta_legacydesigns.png';
import standardDesigns from '../../assets/delta_standarddesigns.png';
import buttons from '../../assets/delta_buttons.png';
import formfields from '../../assets/delta_formfields.png';
import lists from '../../assets/delta_lists.png';
import cover from '../../assets/delta_skyproui_cover.png';

import inventoryL from '../../assets/delta_mm_inventory_lowFidelity.png';
import inventoryH from '../../assets/delta_mm_inventory_highFidelity.png';
import manifestingL from '../../assets/delta_mm_manifesting_lowFidelity.png';
import manifestingH from '../../assets/delta_mm_manifesting_highFidelity.png';
import mealManifest1 from '../../assets/delta_mm_original.png';
import approach from '../../assets/delta_mm_approach.png';
import draft from '../../assets/delta_mm_draft.png';
import final from '../../assets/delta_mm_final.png';
import cabinObj from '../../assets/delta_myCabin_objectives.png';
import cabinApproach from '../../assets/delta_myCabin_approach.png';
import cabinDraft from '../../assets/delta_myCabin_draft.png';
import cabinFinal from '../../assets/delta_myCabin_final.png';
import demo from '../../assets/delta_demo.png';
// import demoScript from '../../assets/delta_demo_script.png';
import demoFilming from '../../assets/delta_demo_filming.png';
import demoEditing from '../../assets/delta_demo_editing.png';
import banner from '../../assets/delta_banner.png';
import bannerOriginal from '../../assets/delta_banner_original.png';
import bannerIterations from '../../assets/delta_banner_iterations.png';
import bannerFinal from '../../assets/delta_banner_final.png';



const images = [
  { buttons },
  { formfields },
  { lists },
];

function SkyProUI() {
  return (
    <div>
      {/* <ScrollToHashElement/>
      <div className="sidenav">
        <div>
          <a href="#SkyPro"><p>SkyPro UI</p></a>
          <a href="#Meal"><p>Meal Inventory & Manifesting</p></a>
          <a href="#MyCabin"><p>MyCabin Rewrite</p></a>
          <a href="#Video"><p>Video Demos</p></a>
          <a href="#Banner"><p>Engagement Banner</p></a>
        </div>
      </div> */}
      <div className="header">
        <Employment 
        name= { "SkyPro UI"}
        logo={ delta }
        logoDescription="Delta Air lines logo" 
        positionDescription={
          <>
          {/* Creating a brand library for UX/UI designers that  */}
          As a part of the initial design team for the In-Flight Services Team at Delta Air Lines, 
          I helped introduce design methods, establish design standards, increase user engagement, and fulfill the user research and design needs
          for 6+ mobile apps with an audience of 28,000+ flight attendants.
          </>
        }
        employer="Delta Air Lines"
        jobTitle="UX/UI Designer"
        deliverables="Design Library"
        tools="Adobe XD, Axure RP, Figma"
        teamSize={
          <>
          1-4
          <a id="SkyPro"/>
          </>
        }
        impact1="Team Impact"
        impact1List=""
        impact2="Products Impact"
        impact2List=""
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
              <li>The design team was using Adobe XD to design for the Flight Attendant Apps.
                We were design from scratch everytime which led to long design times as well as 
                inconsistent designs. </li>
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
              <li>Changes to designs were time-consuming</li>
              <li>No standardization</li>
              <li>Prototyping not supported</li>
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
              <li>Create a style guide</li>
              <li>Create a master library of components</li>
            </ul>
            </>
          }
          />          
        </div>

      <div className="SkyProUI">
        {/* <div className="section__padding">
          <ArticleHead
          title="SkyPro UI"
          description={
          <>
            SkyPro UI is an extensive design library containing guidelines and reusable components. We implemented it to streamline the design process. 
            The library contains stylized text, buttons, icons, etc. <br /><br />
            Team Size: 4
          </>
          }
          images={ <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="350" src="https://embed.figma.com/design/LOxr0uOoS7JG1K670ZUEwg/SkyPro-UI-(Copy)?node-id=823-14803&embed-host=share" allowfullscreen></iframe> }
          imageCaption="Click around the figma file!"
          />
        </div> */}
        <div className="section__padding">
          <ArticleL
          title="Legacy Designs"
          description={
            <>
            {/* These legacy designs show the inconsistency in spacing, buttons, and colors across different apps. Designs had to be from scratch for every task resulting in high-effort designs and long design cycles.  */}
            I inherited a fragmented landscape where 6+ mobile apps felt like they were made by different companies. Buttons, form fields, and lists had no source of truth, forcing designers to reinvent the wheel for every sprint.
            </>
          }
          images={
            <>
            <img src={ legacyDesigns } alt="" />
            <p><ul><li>Non-standardized navigation bars across different apps created user confusion</li></ul></p>
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Standard Designs"
          description={
            <>
            By migrating to Figma, I helped establish a master library that acted as the "single source of truth". We didn't just move assets; we audited every component to ensure they met the needs of 28,000+ flight attendants.
            <br/><br/>
            The Result: This shift transformed our workflow from a manual, error-prone process into a streamlined engine, resulting in a 180% increase in design efficiency and near-instantaneous updates across the entire app suite.
            </>
          }
          images={
            <>
            <img src={ standardDesigns } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Library Migration"
          description={
            <>
            When setting up the library, our team explored several different softwares. We started with Adobe XD, then migrated to Axure RP. Then, we migrated again to Figma. 
            The reason for the migrations were that Adobe XD did not meet our prototyping needs at the time and that Axure RP was limited in its design capabilities. 
            The third software, Figma, was able to support both our design and prototyping needs. 
            </>
          }
          images={
            <>
            <img src={ migration } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={
            <>
              Buttons, <br />
              Form Fields, <br />
              & Lists <br />
              OH MY!
            </>
          }
          description={
            <>
            My contributions to the SkyPro UI design library revolved around the design and component management of the buttons, 
            form fields, and lists during the migrations. Starting with Adobe XD, we were able to create master components but 
            has limited prototyping abilities. It wasnt able to handle complex interactions. When we first moved to Axure RP, we 
            were limited in the way we can style our components. The prototyping was great but designs weren't what we were looking 
            for. When settling on Figma, we were about to have a master library. This made the designs standardized, the design 
            process 80% faster, and designs changes instantanious. 
            </>
          }
          images={
            <>
            <img src={ formfields } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="File Thumbnails"
          description={
            <>
            Lastly, I created these covers to use as a thumbnail in all the files. The covers include project name, file owner, progress tags, 
            and app association. Originally, files were named by their task locator numbers. In some window views, it was the only thing that
            was visible which made it difficult to identify files by just looking at the design screens. With the cover, it is easy to 
            identify project files and their progress without having to click into the file increasing effiency by reducing developer search time. 
            </>
          }
          images={
            <>
            <img src={ cover } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <CTA 
          title= "Results"
          description= {<>
          Our team now has an extensive style guide which includes grid, colors, typography, and components. Guidelines are written up for all 
          the aspects of the style guide. The standardized library reduced developer handoff time and CSS bloat by ensuring consistent component use across all 6 apps. The designs process is <b>80% faster</b>and our team is able to better serve the 6 mobile apps with 28,000+
          flight attendants as users. 
          </>}
          />
        </div>
      </div>
  
      {/* <div className="Meal Inventory and Meal Manifesting">
        <div className="section__padding">
          <ArticleHead
          title={
            <>
            Meal Inventory and <br /> Meal Manifesting
            </>
          }
          description={
            <>
              A system that allows flight attendants to receive customer pre-order information, log meal orders, and keep track of meal 
              inventory in flight.  
              <br /><br />
              Team Size: 1
            </>
            }
          images={ 
          <>
          <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="350" src="https://embed.figma.com/design/cbYlhQ45s0XUe64rTjNLRm/%5BDESIGN%5D-Meal-Manifesting-Migration?embed-host=share" allowfullscreen></iframe>
          </>
          }
          imageCaption="Click around the Figma File!"
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Objectives"
          description={
            <>
            The objective was to integrate the system into a customer card, a screen with customer information, and to design multiple 
            points of entry to the customer card, where the flight attendant will complete meal inventory and manifesting. 
            Secondarily, to update the UI using the SkyPro UI guidelines.
            </>
          }
          images={ 
            <>
            <img src={ mealManifest1 } alt=""/>
            </>

           }
          imageCaption="Original Meal Manifesting Screen"

          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Approach"
          description={
            <>
            Approaching this project, I started by mapping the current user experience and making notes of pain points. I met with the 
            product owners to get feedback on my initial assessment and to ask any questions, then I created a low fidelity design of the
            revised process. Once I got approval on the low-fidelity designs, I fleshed out the high fidelity designs and added
            detailed descriptions about changes and intended functionality of the new designs. 
            Lastly, I reduced the design to a minimal viable product.
            </>
          }
          images={
            <>
            <img src={ approach } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Draft"
          description={
            <>
            I incorporated functionality to support the fact that the inventory data would now be imported automatically as opposed to 
            manually by the flight attendant, as it was before. The original designs showed input fields for every line item. The new 
            designs reflected an edit state with a numerical keyboard for each line item and a confirmation button for all line items. 
            This is shown in the first 2 screens in the bottom row of the Approach images above.<br/><br/>

            I experiemented with recording customer orders within the customer card and the seat map. The first 2 screens in the images in 
            this section show the flight attendants being able to view all the entree options in a drop down menu. Throughtout the process,
            I would talk to the product owners and the development team to ensure the designs aligned with their goals and that they could be
            developed properly. From these meetings, I learned that the development team had plans to integrate haptic touch features. I 
            implemented that feature in my designs by having The flight attendants be able to view more information about an entree and 
            select it by pressing and holding that line item as shown in screen 3. Since there weren't many entree options, they were 
            displayed in an accordian list. However, displaying and selecting the drinks in the same manner would not be as efficient. 
            Therefore, the list of drinks is accompanied by a search bar filter as shown in the bottom row of the images in this section.
            The draft designs include descriptions under the frames that describe their intended interactions.
            </>
          }
          images={
            <>
            <img src={ draft } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Final"
          description={
            <>
            In the final iteration, I designed the whole meal inventory and meal manifesting process. The meal manifesting process included 
            several entry points into a customer card, senarios of whether a person has pre-selected a meal, and different 
            functionally of the iPhone like haptic touch. I also created designs for the minimal viable product, MVP.
            </>
          }
          images={
            <>
            <img src={ final } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding" id="MyCabin">
          <CTA 
          title= "Skills Developed"
          description= "Working within an established design aesthetic and working with people without a design background"
          />
        </div>
      </div> */}
      
      {/* <div className="MyCabin">
        <div className="section__padding">
          <ArticleHead 
          title="MyCabin Rewrite/ Cabin Discrepancy"
          description={
            <>
            MyCabin is used by the flight attendants to report any issues or discrepancies with the aircraft for the pilot to review. <br/>
            <br/>
            Team Size: 1
            </>
          }
          images={ <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="350" src="https://embed.figma.com/design/Zl4x0nkwM3gM3X8bPG5Dw5/MyCabin-Rewrite?node-id=7-32&embed-host=share" allowfullscreen></iframe> }
          imageCaption={"Click around the figma file!"}
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Objectives"
          description={
          <>
          The main objectives for this project included updating the UI and iconography, creating a more intuitive process to report 
          discrepancies, establishing an 
          information heirarchy, designing a method of 
          adding descriptions, location, and additional information to a report, integrating a seatmap for reports involving seats, and including a 
          disabled state for the feature. 
          </>
          }
          images={
            <>
            <img src={ cabinObj } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Approach"
          description={
            <>
            Because the product owner was mostly interested in updating the UI, I foucsed on designing new screens using updated components
            from the SkyPro UI design library. When addressing the other objectives, I put myself in the users position and went through the
            process of submiting a report, making note of what would make this process more streamlined. 
            </>
          }
          images={
            <>
            <img src={ cabinApproach } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Draft"
          description={
            <>
            When drafting the designs, I created 1-3 options for each feedback session. Oftentimes when presenting multiple options, I 
            would be able to talk to the product owners to get feedback about the designs and implement it into a final version. For the
            updated iconography, I opted to replace the paper airplane and pilot hat icons, indicating the that the report was sent to the
            pilot and recieved by the pilot, with the words sent and recieved. I considered using double check marks but ultimately went with
            the words for clarity. Lastly, date section headers were added to improve information heirarchy as shown in the third screen in
            the images in this section.
            </>
          }
          images={
            <>
            <img src={ cabinDraft } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Final"
          description={
            <>
            There is no official final version of the designs due to this project becoming a lower priority, but take a look around the Figma file
            for the high fidelity designs.
            </>
          }
          images={
            <>
            <img src={ cabinFinal } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding" id="Video">
          <CTA
          title= "Skills Developed"
          description={
            <>
            Task prioritization, Communication
            </>
          }
          />
        </div>

      </div> */}
      
      {/* <div className="Video Demos">
        <div className="section__padding">
          <ArticleHead
          title={"Video Demos"}
          description={
            <>
            Video Demos were made as an initiative to have short form video content for flight attendants to know what resources they 
            have in their devices for managing a flight and to help upper management get a quick grasp on the role the In-Flight Technology 
            Team plays.
            <br/>
            <br/>
            Team Size: 2
            </>
          }
          images={
            <>
            <img src={ demo } alt="" />
            </>
          }
          imageCaption={
            <>
            </>
          } 
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Script"
          description={
            <>
            I met with the product owners of all the apps that my team supported to talk about what they wanted to highlight in each of 
            the video demos. 
            After creating a draft of each script, I made a rough draft of my idea for the structure of the videos. I used text to speech 
            software, a stock image, and screenshots to create a first draft of the videos. This video puts the rough in rough draft, but 
            it gets the job done. 
            I learned that the scenes with the screenshots would be better as a voice over. Having a voice over would allow realestate for 
            bullet points to better highlight the features of the apps in a visual way. 

            </>
          }
          images={
            <>
            <iframe
            width="100%" 
            height="300"
            src='https://www.youtube.com/embed/_I8Rd_ks-so'
            frameborder='0'
            allow='encrypted-media'
            allowfullscreen
            title='First Draft'
            />

            <img src={ demoScript } alt="" /> 
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"Filming"}
          description={
            <>
            When filming, we used a member of the In-Flight Services team, Anthony, who also was a flight attendant as the actor. We scheduled a full 
            day of filming where Anthony wore his flight attendant uniform. On that day, we used the inside of one of the training planes as 
            a set. I brought my tripod and set up a wearable microphone. We then recorded the intro and outro for all six videos. 
            Due to having only one day in Anthony's schedule to film and limited time for him to memorise the script, I used teleprompter
            software to display the script. We had set the laptop with thesoftware on a seat and filmed. However, it was obvious that he was reading
            something. To mitigate this, I propped my computer on a stool and some boxes I had found around the room. After filming the intros 
            and outros, we then recorded the voice overs for the features demo.
            </>
          }
          images={
            <>
            <img src={ demoFilming } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Editing"}
          description={
            <>
            To edit the demos, I used the iMovie software. I started by editing one full video with our recorded material and presenting 
            that for review. After recording and editing everything, there ended up being a change of script where we weren't allowed to say 'I'm 
            Anthony and I'm a Delta Flight Attendant.' This was hard to work around due to the way Anthony's inflection was when he was 
            talking and our time constraints. For the voiceover parts, I used screenshots and screen 
            recordings of the existing apps and made a powerpoint that included the bulleted points. Those slides were then imported into 
            iMovie and edited to be in time to the voiceover. 
            </>
          }
          images={
            <>
            <img src={ demoEditing } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"Final"}
          description={
            <>
            I produced 6 videos 1-2 minutes long. Given the quick turnaround and last minute changes to the script, I am not as happy 
            as I could be with the results, however I am proud of myself for being able to adapt to the circumstances. <br/><br/>
            View the playlist of all the demos on <a href='https://www.youtube.com/playlist?list=PL8e45rsI4i0u__uX-P0y0dwmMXweE8gq0' className="underline">YouTube</a>.
            </>
          }
          images={
            <>
            <iframe
            width="100%" 
            height="300"
            src='https://www.youtube.com/embed/oqoDtynXY_w'
            frameborder='0'
            allow='encrypted-media'
            allowfullscreen
            title='Flight Family Final Draft'
            />
            </>
          }
          />
        </div>
        <div className="section__padding" id="Banner">
          <CTA 
          title= "Skills Developed"
          description= "Production management, Problem solving, Filming, Video Editing"
          />
        </div>
      </div> */}

      {/* <div className="Engagement Banner">
        <div className="section__padding">
          <ArticleHead
          title={"Engagement Banner"}
          description={
            <>
            The Engagement Banner is used when the In-Flight Services team goes to conferences, to base visits for user testing events, and 
            to SkyPro support events. My team wanted to redesign the banner so that it would be more eye catching and to add a QR 
            code to recieve feedback. <br/>
            <br/>
            Team Size: 1
            </>
          }
          images={ 
          <>
          <img width="100%" src= { banner } />
          </>
          }
          imageCaption={""}
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Original Version"}
          description={
            <>
            The original version of this design has no pizazz. The majority of the sign is navy with white text and it has no imagery. 
            The enviroment that the sign appears in is atop a table with a navy blue table cloth. 
            </>
          }
          images={
            <>
            <img src={ bannerOriginal } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"Iterations"}
          description={
            <>
            When considering the redesign, one of my main focuses was to expand the color pallete. I focused on using the Delta brand 
            red and using more interesting geometry to create an eye catching option. I explored options that included red backgrounds and 
            using plane imagery.
            </>
          }
          images={
            <>
            <img src={ bannerIterations } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Final Version"}
          description={
            <>
            The final version has 3 main portions, the red header, the blue QR section, and the bottom portion that mimics a phone home screen.
            The idea was to have a sign that visually shows that we deal with phone apps and want you to interact with us via the QR code.
            </>
          }
          images={
            <>
            <img src={ bannerFinal } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <CTA 
          title= "Skills Developed"
          description= "Printing, Graphic Design"
          />
        </div>
      </div> */}

    </div>
  )
}

export default SkyProUI