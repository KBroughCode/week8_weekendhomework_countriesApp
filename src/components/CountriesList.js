import React from 'react';
import Country from './Country';
import './CountriesList.css'

const CountriesList = (props) => {
  const countryCardsContainer = props.bucketList.map((country, index)=>{
    return <Country
    image = {country.flag}
    name = {country.name}
    index = {index}
    key = {index}
    id = {country.id}
    removeCountry = {props.removeCountry}
    visitedToggle = {props.visitedToggle}
    />
  })

  return (
    <div>
      <div className = "cards-container">
      <h2 className ="title">Bucket List</h2>
      <br></br>
          { countryCardsContainer }
        </div>
      </div>
  )
}

export default CountriesList;
