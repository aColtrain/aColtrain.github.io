import React from 'react';
import './scope.css';

const Scope = ({ title1, text1, title2, text2, title3, text3,}) => {
  return (
    <div className="scope">
        <div>
            <h2>{ title1 }</h2>

            <p>{ text1 }</p>

        </div>
        <div>
            <h2>{ title2 }</h2>

            <p>{ text2 }</p>

        </div>
        <div>
            <h2>{ title3 }</h2>
            <p>{ text3 }</p>
        </div>
    </div>
  )
}

export default Scope