import React from 'react'
import './aboutme.css'
import winter from '../../assets/About_winter.JPG';

const Aboutme = () => {
  return (
    <div className="section__padding">
        <div>
          <h1>Hey, I'm Coltrain <a href="https://pronouns.org/">(she/her)</a>! a __________ Designer</h1>
        </div>

        
        <p>I love a good problem to solve. When im not at my computer, I am rock climbing, doing jigsaw puzzles, or hanging out with my dog winter! Life time learner. Recently took a class to learn how to setup and clean anchors for climbing outdoors and how to play mahjong.</p>
        <p>I am currently working on improving my web development skills.  </p>
        <div className="about__winter">
          <img width="50%" src={winter} />
        </div>
       
    </div>
  )
}

export default Aboutme