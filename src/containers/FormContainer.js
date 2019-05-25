import {connect} from 'react-redux'
import Form from '../components/Form';


const mapStateToProps = (state) => {
  return {
    countriesForm: state.countriesForm
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
    selectedCountry(country){
        console.log('Hello');
      dispatch({
         type: 'ADD_TO_BUCKETLIST',
         bucketList: country,
         visited: false
      })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
