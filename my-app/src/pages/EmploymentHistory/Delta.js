import React from 'react'
import { delta } from "../../components/brand/imports"
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA } from '../../components';
import car from '../../assets/car.png';
import migration from '../../assets/delta_migration.png';
import buttons from '../../assets/delta_buttons.png';
import formfields from '../../assets/delta_formfields.png';
import lists from '../../assets/delta_lists.png';
import cover from '../../assets/delta_skyproui_cover.png';
import mealManifest1 from '../../assets/delta_mm_original.png';
import inventoryL from '../../assets/delta_mm_inventory_lowFidelity.png';
import inventoryH from '../../assets/delta_mm_inventory_highFidelity.png';
import manifestingL from '../../assets/delta_mm_manifesting_lowFidelity.png';
import manifestingH from '../../assets/delta_mm_manifesting_highFidelity.png';
import approach from '../../assets/delta_mm_approach.png';
import draft from '../../assets/delta_mm_draft.png';
import final from '../../assets/delta_mm_final.png';
import cabinObj from '../../assets/delta_myCabin_objectives.png';
import cabinApproach from '../../assets/delta_myCabin_approach.png';
import cabinDraft from '../../assets/delta_myCabin_draft.png';
import cabinFinal from '../../assets/delta_myCabin_final.png';
import demo from '../../assets/delta_demo.png';
import demoScript from '../../assets/delta_demo_script.png';
import demoFilming from '../../assets/delta_demo_filming.png';
import demoEditing from '../../assets/delta_demo_editing.png';
import banner from '../../assets/delta_banner.png';
import bannerOriginal from '../../assets/delta_banner_original.png';
import bannerIterations from '../../assets/delta_banner_iterations.png';
import bannerFinal from '../../assets/delta_banner_final.png';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { buttons },
  { formfields },
  { lists },
];

function Delta() {
  return (
    <div>
      <div className="header">
        <Employment 
        logo={ delta }
        logoDescription="Delta Air lines logo" 
        positionDescription="As a part of the initial design team for the In-Flight Services Team at Delta Air Lines, 
        I helped introduce design methods, establish design standards, increase user engagement, and fulfill the user research and design needs
        for 6+ mobile apps with an audience of 28,000+ flight attendants." 
        jobTitle="UX/UI Designer"
        teamSize="1-4"
        impact1="Team Impact"
        impact1List=""
        impact2="Products Impact"
        impact2List=""
        />
      </div>

      <div className="SkyProUI">
        <div className="section__padding">
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
        </div>
        <div className="section__padding">
          <ArticleR
          title="Library Migration"
          description={
            <>
            When setting up the library, our team explored several different softwares. We started with Adobe XD, then migrated to Axure RP. Then, we migrated again to Figma. 
            The reason for the migrations were that Adobe XD did not meet our prototyping needs at the time and that Axure RP was limited in its design capabilities. 
            Third time was a charm and Figma was able to support our design needs.
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
            form fields, and lists during the migrations.
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
            identify project files and their progress without having to click into the file. 
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
          title= "Skills Developed"
          description= "Adobe XD, Axure RP, Figma"
          />
        </div>
      </div>
  
      <div className="Meal Inventory and Meal Manifesting">
        <div className="section__padding">
          <ArticleHead
          title={
            <>
            Meal Inventory and <br /> Meal Manifesting
            </>
          }
          description={
            <>
              Designing a system that allows flight attendants to receive customer pre-order information, log meal orders, and keep track of meal inventory in flight.  
              {/* And design user flow with different entry points to accomplish this goal. 
              And integrate into Customer Card. Using up to date design UI. This project broken up into 2 parts Meal Inventory and Meal Manifesting */}
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
            Integrate the system into the customer card and design multiple points of entry to the customer card where the flight attendant will complete meal 
            manifesting. Update the UI using the SkyPro UI guidelines.
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
            Approaching this project, I first understand and map the current user experience and making notes of pain points. I meet with the 
            product owners to get feedback on my initial assessment and ask any questions, then I create a low fidelity design of the revised process of recording meal 
            inventory and meal manifesting to get more feedback on. Once I get approval on the low-fidelity designs, I flush out the high fidelity
            designs with different points of entry for manifesting the meal with detailed descriptions about changes and intended functionality 
            of the new designs. I also pull together screens for a minimal viable product.

              {/* 1. Understanding and mapping the current user experience and creating a new map of Meal Inventory<br/><br/>
              2. Get feedback from PO<br/><br/>
              3. Create a low fidelity draft of Meal Inventory and Meal Manifesting <br/><br/>
              4. Get feedback from PO<br/><br/>
              5. Create high fidellity draft with options of different points of entry for manifesting the meal with detailed descriptions about changes and functionality <br /><br/>
              6. Get feedback from PO<br /><br/>
              7. Create MVP <br /> */}

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
            When redeesigning the meal inventory screens, I incorporated the inventory data being imported automatically. The original designs showed 
            input fields for everyline item. The new designs reflect an edit state with a numerical keyboard for each line item and a confirmation button
            for all line items. This is shown in the first 2 screens in the bottom row if the Approach images.<br/><br/>
            I experiemented with recording customer orders within the customer card and the seat map. The first 2 screens show the FA being 
            able to view all the entree options in a drop down. I would talk to the POs and the development team to make sure the designs aligned with their goals 
            and that it can be developed properly. From this, I learned that the development team has plans on integrating haptic touch features and I integrated 
            that press and hold feature within the designs. I implemented that feature in my designs by having The flight attendants be able to view more information about an entree and select it by 
            pressing and holding that line item as shown in screen 3. Since there weren't many entree options, they were displayed in an accordian list. However
            displaying the drinks in the same manner would not be as efficient to select. Because of this, the list of drinks is accompany by a search bar filter.
            The draft designs include descriptions under the frames that describe the intended interactions.
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
            In the final iteration, I designed the whole meal inventory and meal manifesting process. The meal manifesting process includes 
            several entry points into a customer card, senarios of weather a person has pre-selected a meal or not and using different 
            functionally of the iphone like haptic touch. I also created designs for the minimal viable product, MVP.
            </>
          }
          images={
            <>
            <img src={ final } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <CTA 
          title= "Skills Developed"
          description= "Working within an established design aesthetic and working with people with out a design background"
          />
        </div>
      </div>
      
      <div className="MyCabin">
        <div className="section__padding">
          <ArticleHead 
          title="MyCabin Rewrite/ Cabin Discrepancy"
          description={
            <>
            My Cabin is used by the Flight Attendants to report any issues or discrepancies with the aircraft for the pilot to review. <br/>
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
          Main objectives include updating the UI and iconography, creating a more intuitive process to report discrepancies, establish an 
          information heirarchy, design a method of 
          adding descriptions, location, and additional information to a report, integrate a seatmap for reports involving seats, and include a 
          disable state for the feature. 
          {/* Create a more intuitive process to add decrepancies. <br/>
          Create a heirarchy of information <br/>
          Create designs for adding descriptions, location, and additional information to a report. <br/>
          Create a design that includes a seatmap for decrepancies involving seats. <br/>

          Adding a state where the feature is disabled. <br/>

          Update UI and Iconography */}

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
            Because the goal was to mainly update the UI, I took the original screens and designed new screens using updated components side
            by side.
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
            When drafting the designs, I created 1-3 options for feedback sessions. Often times when having multiple options, I would be 
            able to talk to the users or POs to see what they like or dislike about the designs and take that feedback for a final version.
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
            There is no official final version of the designs due to this project becoming a lower priority, but take a look around the high
            fidelity designs.
            </>
          }
          images={
            <>
            <img src={ cabinFinal } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <CTA
          title= "Skills Developed"
          description={
            <>
            Task prioritization, Communication
            </>
          }
          />
        </div>

      </div>
      
      <div className="Video Demos">
        <div className="section__padding">
          <ArticleHead
          title={"Video Demos"}
          description={
            <>
            Video Demos were made as a initiative to have short form video content for flight attendants to know what resources they 
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
            I met with the POs of all the apps that my team supported to talk about what they wanted to highlight in each of their demos. 
            After creating a draft of the script, I made a rough draft of my idea for the structure of the video. I used text to speech 
            software and stock images from the internet to quickly get my point across.
            </>
          }
          images={
            <>
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
            When filming, we used a member of the in-flight services team, Anthony, who also was a flight attendant. We planned for a full 
            day of filming where Anthony worn his flight attendant uniform. On that day, we used the inside of one of the training planes as 
            a set. I brought my tripod and we had gotten microphones off of amazon. We then recorded the intro and outro for all six videos. 
            I used a teleprompter software to display the script and propped my computer on a stool and some boxes. After filming the intros 
            and outros, we then recorded the voice overs for the features part.
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
            that for review. After recording everything, there ended up being a change of script where we weren't allowed to say 'I'm 
            Anthony and I'm a Delta Flight Attendant.' This was hard to work around due to the way Anthony's inflection was when he was 
            talking and our time restraint that prevented me from reshooting. I made it work but am not 100% happy with the way it turned 
            out and acknowledge that I did the my best with my restraints I had. For the voice over parts, used screenshots and screen 
            recordings of the existing apps and made a powerpoint that included the bulleted points. Those slides were then imported into 
            iMovie and edited to be in time to the voice over.
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
          description={"You can view more in my LinkedIn"}
          images={
            <>
            <img src={ "" } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <CTA 
          title= "Skills Developed"
          description= "Production management, Problem solving, Filming, Video Editing"
          />
        </div>
      </div>

      <div className="Engagement Banner">
        <div className="section__padding">
          <ArticleHead
          title={"Engagement Banner"}
          description={
            <>
            The Engagement Banner is used when we go to conferences, set out for user testing events, and when we host skypro support event 
            to help FA with technical problems. My team wanted to redesign the banner so that it would be more eye catching and to add a QR 
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
      </div>

    </div>
  )
}

export default Delta