import React from 'react'

const Employment = ({ logo, logoDescription, positionDescription, jobTitle, teamSize }) => {
  return (
    <div>
        <div className="section__padding">
            <img src={logo} alt={logoDescription} />
        </div>
        <div className="section__padding employment_description">
            <p>{positionDescription}</p>
            <p>{jobTitle}</p>
            <p>{teamSize}</p>
        </div>
    </div>
  )
}

export default Employment