import {connect} from 'react-redux'
import Form from '../components/Form';


const mapStateToProps = (state) => {
  return {
    countries: state
  };
};

const mapDispatchToProps = (dispatch) =>({
    getCountriesData(){
      dispatch(()=>{
        fetch('https://restcountries.eu/rest/v2/all?fields=name;flag')
        .then (res => res.json())
        .then(countriesData =>{
          dispatch({
            type: 'GET_COUNTRIES',
            countriesData
          })
        })
      })
    },
    getCountry(country){
      dispatch(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
        .then (res => res.json())
        .then(countryInfo =>{
          dispatch({
            type: 'ADD_COUNTRY',
            countryInfo
          })
        })
      })

    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
