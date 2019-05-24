import { combineReducers} from 'redux';

import bucketListReducer from './BucketListReducer'
import formReducer from './FormReducer'

export default combineReducers({
  countriesForm: formReducer,
  bucketList: bucketListReducer
})
