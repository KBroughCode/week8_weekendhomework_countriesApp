import { connect } from 'react-redux';
import CountriesList from '../components/CountriesList';

const mapStateToProps = (state) => {
  return {
    bucketList: state.bucketList
  };
};

export default connect(mapStateToProps)(CountriesList);
