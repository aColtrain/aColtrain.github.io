import React from 'react';
import './scope.css';

const Scope = ({ goalText, userText, problemText}) => {
  return (
    <div classname="section__padding scope">
        <div>
            
                <h2>Goals</h2>
            
            
                <p>{ goalText } kdjklsd</p>
   
        </div>
        <div>
   
                <h2>User</h2>


                <p>kdjklsd{ userText }</p>

        </div>
        <div>
            <div>
                <h2>Problems</h2>
            </div>
            <div>
                <p>{ problemText }kdjklsd</p>
            </div>
        </div>
    </div>
  )
}

export default Scope