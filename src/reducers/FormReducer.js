const formReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_COUNTRIES':
      return [...state, ...action.countriesData]
    default:
      return state
  }
}

export default formReducer;
