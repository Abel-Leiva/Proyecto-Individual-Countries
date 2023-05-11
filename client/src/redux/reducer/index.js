import { GET_ALL_COUNTRIES } from "../actions";

let initialState = {
  allCountries: [],
  copyAllcountries: [],
  activities: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        copyAllcountries: action.payload,
      };

    default:
      return state;
  }
}
export default rootReducer;
