const countriesReducer = (state, action) => {
  switch(action.type) {
    case 'GET_COUNTRIES':
      return [...state,...action.countriesData]
    case 'ADD_COUNTRY':
      return [...state.action.countryInfo]
    default:
      return state

  }
}

export default countriesReducer;
