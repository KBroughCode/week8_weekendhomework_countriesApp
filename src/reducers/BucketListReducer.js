const bucketListReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_BUCKETLIST':
      return [action.bucketList, ...state]
    case 'REMOVE_FROM_BUCKETLIST':
      return [...state.slice(0, action.countryIndex),
              ...state.slice(action.countryIndex + 1)]
    default:
      return state
  }
}

export default bucketListReducer;
