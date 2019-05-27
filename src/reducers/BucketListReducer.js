const bucketListReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_BUCKETLIST':
      return [action.bucketList, ...state]
    case 'REMOVE_FROM_BUCKETLIST':
      return [...state.slice(0, action.countryIndex),
              ...state.slice(action.countryIndex + 1)]
    case 'HAS_VISITED_TOGGLE':
      const visitedInfo = state.map((country)=>{
        if (country.id === action.countryIndex){
          return {...country,visited:true}
        }else {
          return country
        }
      })
      return visitedInfo
    default:
      return state
  }
}

export default bucketListReducer;
