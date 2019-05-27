import React from 'react';
import './Country.css'

const Country = (props) => {

  const handleRemove = (event) => {
    props.removeCountry(props.index)
  }

  const handleVisitedToggle = (event) => {
    props.visitedToggle(props.id)
  }

  return(
    <div className = "card">
      <img src = {props.image} className = "flag" onClick ={handleVisitedToggle} />
      <h5 className = "country-name">Name:{props.name}</h5>
      <button className = "remove-button" onClick = {handleRemove}>Remove from List</button>
    </div>
  )
}

export default Country;
