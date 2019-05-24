import React, { Component } from 'react';

class Form extends Component{
  constructor(props){
    console.log(props);
    super(props);
      this.state = {
        selCountry: null
      }
      console.log(this.selCountry);
      this.handleChange = this.handleChange.bind(this)
    }


componentDidMount(){
  this.props.getCountriesData();
}

dropDown(){
  const dropDownList = this.props.countriesForm.map((country, index)=>{
    return(
      <option
        value = {index}
        key = {index}
        index = {index}
        >
        {country.name}
      </option>
    )
  })
  return dropDownList
}

handleChange(event){
  console.log("BOO", this.props.countriesForm);
  this.setState({selCountry: event.target.value})
  this.props.selectedCountry(this.props.countriesForm[event.target.value])
}

  render(){
    return(
      <>
        <h1>Countries</h1>
        <h2> Bucket List</h2>
        <form className = "countries-dropdown">
          <select onChange = {this.handleChange}>
            <option>Select a Country</option>
            {this.dropDown()}
          </select>
        </form>
      </>
    )
  }
}

export default Form;
