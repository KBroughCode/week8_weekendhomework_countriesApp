import React from 'react';
import Country from './Country';
import './CountriesList.css'

const CountriesList = (props) => {
  console.log(props.bucketList);
  const countryCardsContainer = props.bucketList.map((detail, index)=>{
    return <Country
    image = {detail.flag}
    name = {detail.name}
    index = {index}
    key = {index}
    removeCountry ={props.removeCountry}
    visitedToggle ={props.visitedToggle}
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
