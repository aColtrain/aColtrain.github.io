import React from 'react'

const BmIntro = ({eyebrow,  name, positionDescription}) => {
  return (
    <div>
        <div className="section__padding">
            <div className="eyebrow">
                <p> {eyebrow} </p>
            </div>
            <div className="title">
                <h1 className="gradient__text"> {name} </h1>
                <p>{positionDescription}</p> 
            </div> 
        </div>
    </div>
  )
}

export default BmIntro