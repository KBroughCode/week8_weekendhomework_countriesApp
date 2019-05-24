import React, { Component } from 'react';

class Form extends Component{
  constructor(props){
    console.log(props);
    super(props);
      this.state = {
        selectedCounty: null
      }
      this.handlechange = this.handleChange.bind(this)

    }

dropDown(){
  const dropDownList = this.props.countries.map((country, index)=>{
    return(
      <option value = {country.name} key = {index} onChange = {this.handleChange}>{country.name}</option>
    )
  })
  return dropDownList
}

componentDidMount(){
  this.props.getCountriesData();
}

handleChange(event){
  this.setState({selectedCounty: event.target.value})
}

handleSubmit(event){
  event.preventdefault()
  this.props.getCountry(this.state.selectedCounty)

}




  render(){
    return(
      <>
      <h1>Countries</h1>
      <h2> Bucket List</h2>
      <form onSubmit = {this.handleSubmit}>
        <select>
          <option>Select a Country</option>
          {this.dropDown()}
        </select>
      </form>
      </>
    )
  }
}

export default Form;
