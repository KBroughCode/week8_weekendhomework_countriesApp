import React from 'react';
import './Country.css'

const Country = (props) => {

  const handleRemove = (event) => {
    props.removeCountry(props.index)
  }

  return(
    <div className = "card">
      <img src = {props.image} className = "flag"/>
      <h4>Name:{props.name}</h4>
      <h5>Visited: </h5>
      <button className = "remove-button" onClick = {handleRemove}>Remove from List</button>
    </div>
  )
}

export default Country;
