import React from 'react';
import Country from './Country';
import './CountriesList.css'

const CountriesList = (props) => {
  console.log(props.bucketList);
  const countryCardsContainer = props.bucketList.map((detail, index)=>{
    return <Country
    image = {detail.flag}
    name = {detail.name}
    key = {index}
    />
  })

  return (
    <div className = "cards-container">
    { countryCardsContainer }
    </div>
  )
}

export default CountriesList;
