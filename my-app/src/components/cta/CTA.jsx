import React from 'react';
import './cta.css';

const CTA = ({title, description }) => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <h3>{title}</h3>
      </div>
      <div className="gpt3__cta-btn">
        <p>{ description }</p>
      </div>
    </div>
    // <div className="gpt3__cta">
    //   <div className="gpt3__cta-content">
    //     <p>Request early access</p>
    //     <h3>register today and start exploring</h3>
    //   </div>
    //   <div className="gpt3__cta-btn">
    //     <button type="button">Motivation</button>
    //   </div>
    // </div>
  )
}

export default CTA