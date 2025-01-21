import React from 'react';
import './scope.css';

const Scope = ({ goalText, userText, problemText}) => {
  return (
    <div className="scope">
        <div>
            <h2>Goals</h2>

            <p>{ goalText }</p>

        </div>
        <div>
            <h2>User</h2>

            <p>{ userText }</p>

        </div>
        <div>
            <h2>Problems</h2>
            <p>{ problemText }</p>
        </div>
    </div>
  )
}

export default Scope