import {
  BY_NAME,
  FILTER_ACTIVITIES,
  GET_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_ID_COUNTRY,
  FILTERED_CONTINENT,
  FILTERED,
} from "../actions";

let initialState = {
  countries: [],
  copyAllcountries: [],
  filterCountries: [],
  filterContinent: [],
  filterActivity: [],
  activities: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        copyAllcountries: action.payload,
      };
    case GET_ID_COUNTRY:
      return { ...state, detail: action.payload };
    case BY_NAME:
      return { ...state, countries: action.payload };
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };
    ///
    case FILTER_ACTIVITIES:
      state.filterActivity = [];

      state.filterContinent.length > 0
        ? (state.filterCountries = state.filterContinent)
        : (state.filterCountries = state.countries);
      let filtrados = [];
      let afiltrar =
        state.filterCountries.length > 0
          ? state.filterCountries
          : state.copyAllcountries;
      if (action.payload !== "") {
        afiltrar.forEach((country) => {
          country.Activities.forEach((e) => {
            if (e.name == action.payload) {
              filtrados.push(country);
            }
          });
        });
      }

      state.filterCountries = filtrados;
      state.filterActivity = filtrados;

      return { ...state, countries: state.filterCountries };
    ////
    case FILTERED_CONTINENT:
      state.filterContinent = [];
      state.filterActivity.length > 0
        ? (state.filterCountries = state.filterActivity)
        : (state.filterCountries = state.countries);
      const paisesAMostrar2 = (action.payload = ""
        ? state.filterCountries
        : state.copyAllcountries.filter((e) => e.continent == action.payload));

      return {
        ...state,
        countries: paisesAMostrar2,
        filterContinent: paisesAMostrar2,
      };

    default:
      return state;
  }
}
export default rootReducer;
