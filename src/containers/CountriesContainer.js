import { connect } from 'react-redux';
import CountriesList from '../components/CountriesList';

const mapStateToProps = (state) => {
  return {
    bucketList: state.bucketList
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeCountry(countryIndex){
    dispatch({
      type:'REMOVE_FROM_BUCKETLIST',
      countryIndex
    })
  },
  visitedToggle(countryIndex){
    dispatch({
      type:'HAS_VISITED_TOGGLE',
      countryIndex
    })
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
