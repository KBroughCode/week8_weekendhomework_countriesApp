import React from 'react';
import './Country.css'

const Country = (props) => {

  return(
    <div className = "card">
    <img src = {props.image} className = "flag"/>
    <h4>Name:{props.name}</h4>
    <h5>Visited: </h5>
    </div>
  )
}

export default Country;
