const bucketListReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_BUCKETLIST':
      return [action.bucketList, ...state]
    default:
      return state
  }
}

export default bucketListReducer;
