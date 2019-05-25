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
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
