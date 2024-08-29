import React from 'react';
import { google, slack, linkedinBlue } from './imports'
import './brand.css';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={linkedinBlue} alt="linkedin" height={25} />
      </div>
    </div>
  )
}

export default Brand