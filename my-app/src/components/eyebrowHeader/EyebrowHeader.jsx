import React from 'react'
import './eyebrowHeader.css'

const EyebrowHeader = ({eyebrow, title}) => {
  return (
    <div>
        <div className="eyebrow">
            <p> {eyebrow} </p>
        </div>
        <div className="title">
            <h2 className="gradient__text"> {title} </h2>
        </div>
    </div>
  )
}

export default EyebrowHeader